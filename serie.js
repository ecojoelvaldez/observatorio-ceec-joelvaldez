/* ============================================================================
   OBSERVATORIO CEEC · SERIE.JS
   ============================================================================ */

const PALETTE = ['#1A2F40', '#D4A030', '#3D6B8A', '#B84A3A', '#5A8A4A'];

let SERIE_DATA = null;
let ACTIVE_SERIES = new Set();
let ACTIVE_RANGE = 'all'; // 'all' | '5y' | '10y' | '1y'

// ============================================================================
// LOAD
// ============================================================================

async function loadSerie() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');

  if (!id) {
    showError('Sin ID de serie. Vuelve al repositorio.');
    return;
  }

  try {
    const res = await fetch(`data/${id}.json`);
    if (!res.ok) throw new Error('No encontrado');
    SERIE_DATA = await res.json();

    if (SERIE_DATA._status === 'pending_api_key' || !SERIE_DATA.observaciones || SERIE_DATA.observaciones.length === 0) {
      renderPending();
    } else {
      renderSerie();
    }
  } catch (e) {
    console.error(e);
    showError('No se pudo cargar la serie solicitada.');
  }
}

function showError(msg) {
  document.getElementById('serie-content').innerHTML = `
    <div class="pending-block">
      <h3>Serie no disponible</h3>
      <p>${msg}</p>
      <a href="index.html#repositorio" class="download-btn secondary" style="margin-top:16px;">← Volver al repositorio</a>
    </div>`;
}

function renderPending() {
  document.getElementById('bc-current').textContent = SERIE_DATA.titulo_corto;
  document.title = `${SERIE_DATA.titulo_corto} · Observatorio CEEC`;

  document.getElementById('serie-content').innerHTML = `
    <div class="serie-header">
      <div>
        <div class="serie-meta-top">
          <span class="tag source">${SERIE_DATA.fuente.split('·')[0].trim()}</span>
          <span class="tag">${SERIE_DATA.categoria.toUpperCase()}</span>
          <span class="tag">${SERIE_DATA.frecuencia.toUpperCase()}</span>
        </div>
        <h1>${SERIE_DATA.titulo}</h1>
        <p class="serie-desc">${SERIE_DATA.descripcion}</p>
      </div>
    </div>
    <div class="pending-block">
      <h3>Serie en preparación</h3>
      <p>Esta serie requiere conexión activa con la API de ${SERIE_DATA.fuente.split('·')[0].trim()}.<br>Estará disponible en el próximo build del Observatorio.</p>
      <a href="${SERIE_DATA.fuente_url}" target="_blank" rel="noopener" class="download-btn" style="margin-top:24px;">Ver fuente original →</a>
      <a href="index.html#repositorio" class="download-btn secondary">← Volver al repositorio</a>
    </div>
  `;
}

// ============================================================================
// RENDER
// ============================================================================

function renderSerie() {
  document.getElementById('bc-current').textContent = SERIE_DATA.titulo_corto;
  document.title = `${SERIE_DATA.titulo_corto} · Observatorio CEEC`;

  // Inicialmente activamos solo la primera serie disponible
  ACTIVE_SERIES.clear();
  if (SERIE_DATA.series_disponibles && SERIE_DATA.series_disponibles.length > 0) {
    ACTIVE_SERIES.add(SERIE_DATA.series_disponibles[0]);
  }

  const ultimaObs = SERIE_DATA.observaciones[SERIE_DATA.observaciones.length - 1];
  const ultimoValor = ultimaObs ? ultimaObs.valor : '—';
  const ultimaFecha = ultimaObs ? ultimaObs.fecha : '—';

  document.getElementById('serie-content').innerHTML = `
    <div class="serie-header">
      <div>
        <div class="serie-meta-top">
          <span class="tag source">${SERIE_DATA.fuente.split('·')[0].trim()}</span>
          <span class="tag">${SERIE_DATA.categoria.toUpperCase()}</span>
          <span class="tag">${SERIE_DATA.frecuencia.toUpperCase()}</span>
        </div>
        <h1>${SERIE_DATA.titulo}</h1>
        <p class="serie-desc">${SERIE_DATA.descripcion}</p>
      </div>
      <div class="serie-quickstats">
        <div class="qstat">
          <div class="qstat-label">Última observación</div>
          <div class="qstat-value mono">${ultimaFecha}</div>
        </div>
        <div class="qstat">
          <div class="qstat-label">Último valor</div>
          <div class="qstat-value">${formatNum(ultimoValor)}</div>
        </div>
        <div class="qstat">
          <div class="qstat-label">Periodo cubierto</div>
          <div class="qstat-value mono" style="font-size:13px;">${SERIE_DATA.primera_obs} → ${SERIE_DATA.ultima_obs}</div>
        </div>
        <div class="qstat">
          <div class="qstat-label">N. observaciones</div>
          <div class="qstat-value">${SERIE_DATA.n_observaciones.toLocaleString('es-DO')}</div>
        </div>
      </div>
    </div>

    <div class="chart-block">
      <div class="chart-controls">
        <div class="serie-selector" id="serie-selector">
          ${SERIE_DATA.series_disponibles.map((s, i) => `
            <button class="serie-toggle ${i === 0 ? 'active' : ''}" data-serie="${s}" style="--c:${PALETTE[i % PALETTE.length]};">
              ${s}
            </button>
          `).join('')}
        </div>
        <div class="chart-range">
          <button class="range-btn" data-range="1y">1A</button>
          <button class="range-btn" data-range="5y">5A</button>
          <button class="range-btn" data-range="10y">10A</button>
          <button class="range-btn active" data-range="all">Todo</button>
        </div>
      </div>
      <svg id="chart" viewBox="0 0 1100 380" preserveAspectRatio="none"></svg>
    </div>

    <div class="serie-detail-grid">
      <div class="detail-block">
        <h3>Metodología</h3>
        <p>${SERIE_DATA.metodologia || 'Descripción metodológica no disponible para esta serie.'}</p>
      </div>
      <div class="detail-block">
        <h3>Metadatos</h3>
        <dl>
          <dt>Fuente</dt><dd>${SERIE_DATA.fuente}</dd>
          <dt>Unidad</dt><dd>${SERIE_DATA.unidad}</dd>
          <dt>Frecuencia</dt><dd>${SERIE_DATA.frecuencia}</dd>
          <dt>Categoría</dt><dd>${SERIE_DATA.categoria}</dd>
          <dt>Primera obs.</dt><dd>${SERIE_DATA.primera_obs}</dd>
          <dt>Última obs.</dt><dd>${SERIE_DATA.ultima_obs}</dd>
        </dl>
      </div>
    </div>

    <div style="margin-bottom:32px;">
      <button class="download-btn" id="btn-csv">⬇ Descargar CSV</button>
      <button class="download-btn secondary" id="btn-json">⬇ Descargar JSON</button>
      <a href="${SERIE_DATA.fuente_url}" target="_blank" rel="noopener" class="download-btn secondary">Ver en fuente original →</a>
    </div>
  `;

  setupSerieControls();
  drawChart();
}

// ============================================================================
// CHART
// ============================================================================

function getFilteredData() {
  let data = SERIE_DATA.observaciones.filter(o => ACTIVE_SERIES.has(o.serie));

  // Filtro de rango temporal
  if (ACTIVE_RANGE !== 'all' && data.length > 0) {
    const lastDate = new Date(data[data.length - 1].fecha);
    const years = { '1y': 1, '5y': 5, '10y': 10 }[ACTIVE_RANGE];
    const cutoff = new Date(lastDate);
    cutoff.setFullYear(cutoff.getFullYear() - years);
    data = data.filter(o => new Date(o.fecha) >= cutoff);
  }

  return data;
}

function drawChart() {
  const svg = document.getElementById('chart');
  if (!svg) return;
  svg.innerHTML = '';

  const data = getFilteredData();

  if (data.length === 0) {
    svg.innerHTML = '<text x="550" y="190" text-anchor="middle" fill="#7A7A7A" font-family="JetBrains Mono" font-size="12">Selecciona al menos una serie</text>';
    return;
  }

  const W = 1100, H = 380;
  const padL = 70, padR = 30, padT = 30, padB = 50;
  const plotW = W - padL - padR;
  const plotH = H - padT - padB;

  // Agrupar por serie
  const seriesMap = {};
  for (const obs of data) {
    if (!seriesMap[obs.serie]) seriesMap[obs.serie] = [];
    seriesMap[obs.serie].push(obs);
  }

  // Calcular extents
  const allValues = data.map(d => d.valor);
  const allDates = data.map(d => new Date(d.fecha).getTime());
  const yMin = Math.min(...allValues);
  const yMax = Math.max(...allValues);
  const yPad = (yMax - yMin) * 0.08 || 1;
  const yLo = yMin - yPad, yHi = yMax + yPad;
  const xMin = Math.min(...allDates);
  const xMax = Math.max(...allDates);

  const xScale = t => padL + ((t - xMin) / (xMax - xMin || 1)) * plotW;
  const yScale = v => padT + plotH - ((v - yLo) / (yHi - yLo || 1)) * plotH;

  // Grid y axis Y
  const yTicks = 5;
  let gridHtml = '';
  for (let i = 0; i <= yTicks; i++) {
    const v = yLo + (yHi - yLo) * (i / yTicks);
    const y = yScale(v);
    gridHtml += `<line x1="${padL}" y1="${y}" x2="${W - padR}" y2="${y}" stroke="#ECE7D8" stroke-width="1"/>`;
    gridHtml += `<text x="${padL - 8}" y="${y + 4}" text-anchor="end" font-family="JetBrains Mono" font-size="10" fill="#7A7A7A">${formatNum(v)}</text>`;
  }

  // Axis X (años)
  const xTicks = 6;
  for (let i = 0; i <= xTicks; i++) {
    const t = xMin + (xMax - xMin) * (i / xTicks);
    const x = xScale(t);
    const dt = new Date(t);
    const label = dt.getFullYear();
    gridHtml += `<text x="${x}" y="${H - padB + 20}" text-anchor="middle" font-family="JetBrains Mono" font-size="10" fill="#7A7A7A">${label}</text>`;
  }

  // Borde del plot area
  gridHtml += `<rect x="${padL}" y="${padT}" width="${plotW}" height="${plotH}" fill="none" stroke="#D9D2C0" stroke-width="1"/>`;

  // Líneas por serie
  let linesHtml = '';
  const allSeries = SERIE_DATA.series_disponibles;
  Object.entries(seriesMap).forEach(([serieName, obs]) => {
    const colorIdx = allSeries.indexOf(serieName);
    const color = PALETTE[colorIdx % PALETTE.length];
    obs.sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
    const path = obs.map((o, i) => {
      const x = xScale(new Date(o.fecha).getTime());
      const y = yScale(o.valor);
      return `${i === 0 ? 'M' : 'L'}${x.toFixed(2)},${y.toFixed(2)}`;
    }).join(' ');
    linesHtml += `<path d="${path}" fill="none" stroke="${color}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>`;
  });

  // Hover indicator (vertical line + tooltip)
  linesHtml += `
    <line id="hover-line" x1="0" y1="${padT}" x2="0" y2="${padT + plotH}" stroke="#1A2F40" stroke-width="1" stroke-dasharray="2,3" opacity="0"/>
    <g id="hover-dots"></g>
    <rect id="hover-overlay" x="${padL}" y="${padT}" width="${plotW}" height="${plotH}" fill="transparent" style="cursor:crosshair;"/>
  `;

  svg.innerHTML = gridHtml + linesHtml;

  setupHover(svg, seriesMap, xScale, yScale, padL, padT, plotW, plotH, xMin, xMax, allSeries);
}

function setupHover(svg, seriesMap, xScale, yScale, padL, padT, plotW, plotH, xMin, xMax, allSeries) {
  const overlay = svg.querySelector('#hover-overlay');
  const hoverLine = svg.querySelector('#hover-line');
  const hoverDots = svg.querySelector('#hover-dots');

  // Tooltip externo
  let tooltip = document.getElementById('chart-tooltip');
  if (!tooltip) {
    tooltip = document.createElement('div');
    tooltip.id = 'chart-tooltip';
    tooltip.style.cssText = `
      position: fixed; pointer-events: none; opacity: 0;
      background: #1A2F40; color: #F5F1E8; padding: 10px 14px;
      font-family: 'JetBrains Mono', monospace; font-size: 11px;
      border: 1px solid #D4A030; z-index: 1000;
      transition: opacity 0.15s; min-width: 160px;
    `;
    document.body.appendChild(tooltip);
  }

  overlay.addEventListener('mousemove', (e) => {
    const rect = svg.getBoundingClientRect();
    const svgX = ((e.clientX - rect.left) / rect.width) * 1100;
    if (svgX < padL || svgX > padL + plotW) return;

    // Inverse scale to date
    const t = xMin + ((svgX - padL) / plotW) * (xMax - xMin);

    // Encontrar punto más cercano en cada serie
    let dots = '';
    let tooltipRows = '';
    let bestDate = null;

    Object.entries(seriesMap).forEach(([serieName, obs]) => {
      let closest = obs[0];
      let minDist = Infinity;
      for (const o of obs) {
        const dt = new Date(o.fecha).getTime();
        const dist = Math.abs(dt - t);
        if (dist < minDist) { minDist = dist; closest = o; }
      }
      const colorIdx = allSeries.indexOf(serieName);
      const color = PALETTE[colorIdx % PALETTE.length];
      const cx = xScale(new Date(closest.fecha).getTime());
      const cy = yScale(closest.valor);
      dots += `<circle cx="${cx}" cy="${cy}" r="4" fill="${color}" stroke="#FFFEFA" stroke-width="2"/>`;
      tooltipRows += `
        <div style="display:flex;justify-content:space-between;gap:16px;margin-top:4px;">
          <span style="opacity:0.8;">
            <span style="display:inline-block;width:8px;height:8px;background:${color};margin-right:6px;"></span>
            ${serieName}
          </span>
          <span style="font-weight:600;">${formatNum(closest.valor)}</span>
        </div>`;
      bestDate = closest.fecha;
    });

    hoverLine.setAttribute('x1', svgX);
    hoverLine.setAttribute('x2', svgX);
    hoverLine.setAttribute('opacity', 1);
    hoverDots.innerHTML = dots;

    tooltip.innerHTML = `
      <div style="font-weight:600;color:#D4A030;border-bottom:1px solid rgba(212,160,48,0.3);padding-bottom:4px;">${bestDate}</div>
      ${tooltipRows}
    `;
    tooltip.style.opacity = '1';
    tooltip.style.left = (e.clientX + 16) + 'px';
    tooltip.style.top = (e.clientY + 16) + 'px';
  });

  overlay.addEventListener('mouseleave', () => {
    hoverLine.setAttribute('opacity', 0);
    hoverDots.innerHTML = '';
    tooltip.style.opacity = '0';
  });
}

// ============================================================================
// CONTROLS
// ============================================================================

function setupSerieControls() {
  // Toggles de series (multi-select)
  document.querySelectorAll('.serie-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const s = btn.dataset.serie;
      if (ACTIVE_SERIES.has(s)) {
        if (ACTIVE_SERIES.size > 1) {
          ACTIVE_SERIES.delete(s);
          btn.classList.remove('active');
        }
      } else {
        ACTIVE_SERIES.add(s);
        btn.classList.add('active');
      }
      drawChart();
    });
  });

  // Botones de rango
  document.querySelectorAll('.range-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.range-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      ACTIVE_RANGE = btn.dataset.range;
      drawChart();
    });
  });

  // Descargas
  document.getElementById('btn-csv')?.addEventListener('click', downloadCSV);
  document.getElementById('btn-json')?.addEventListener('click', downloadJSON);
}

function downloadCSV() {
  const headers = ['fecha', 'serie', 'valor'];
  const rows = [headers.join(',')];
  for (const o of SERIE_DATA.observaciones) {
    rows.push(`${o.fecha},"${o.serie}",${o.valor}`);
  }
  const blob = new Blob([rows.join('\n')], { type: 'text/csv;charset=utf-8;' });
  triggerDownload(blob, `${SERIE_DATA.id}_observatorio_ceec.csv`);
}

function downloadJSON() {
  const blob = new Blob([JSON.stringify(SERIE_DATA, null, 2)], { type: 'application/json' });
  triggerDownload(blob, `${SERIE_DATA.id}_observatorio_ceec.json`);
}

function triggerDownload(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// ============================================================================
// UTILS
// ============================================================================

function formatNum(v) {
  if (v === null || v === undefined || isNaN(v)) return '—';
  const n = Number(v);
  if (Math.abs(n) >= 1000) return n.toLocaleString('es-DO', { maximumFractionDigits: 2 });
  if (Math.abs(n) >= 100) return n.toFixed(2);
  if (Math.abs(n) >= 10) return n.toFixed(2);
  return n.toFixed(3);
}

// ============================================================================
// INIT
// ============================================================================

document.addEventListener('DOMContentLoaded', loadSerie);
