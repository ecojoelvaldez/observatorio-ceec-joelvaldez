/* ============================================================================
   OBSERVATORIO CEEC · APP.JS
   ============================================================================ */

let CATALOG = null;
let CURRENT_FILTER = 'all';
let CURRENT_QUERY = '';

// Sparklines pre-definidos (placeholder hasta que se haga fetch real de cada serie)
const SPARK_PATHS = {
  imae: "M0,60 L40,55 L80,50 L120,52 L160,48 L200,42 L240,38 L280,35 L320,40 L360,55 L400,70 L440,62 L480,45 L520,30 L560,22 L600,18 L640,15 L680,12 L720,10 L760,8 L800,5",
  tc_usd: "M0,40 L30,38 L60,35 L90,33 L120,30 L150,28 L180,25 L210,22 L240,20 L270,18 L300,15 L330,12 L360,8 L400,5",
  tc_eur: "M0,30 L30,32 L60,28 L90,25 L120,28 L150,22 L180,18 L210,20 L240,15 L270,12 L300,15 L330,10 L360,8 L400,12",
  tpm: "M0,40 L60,40 L60,30 L120,30 L120,15 L200,15 L200,10 L280,10 L280,20 L360,20 L360,30 L400,30",
  sib_bancos: "M0,25 L40,28 L80,22 L120,30 L160,25 L200,20 L240,28 L280,22 L320,18 L360,22 L400,15",
  fed_funds: "M0,45 L80,45 L80,30 L160,30 L160,15 L240,15 L240,10 L320,10 L320,20 L400,20",
  us10y: "M0,35 L40,32 L80,30 L120,25 L160,18 L200,22 L240,15 L280,20 L320,18 L360,22 L400,15",
  wti: "M0,20 L40,30 L80,25 L120,35 L160,28 L200,32 L240,25 L280,30 L320,22 L360,28 L400,30",
  dxy: "M0,30 L40,28 L80,32 L120,25 L160,22 L200,28 L240,20 L280,18 L320,22 L360,15 L400,18",
};

// ============================================================================
// LOAD
// ============================================================================

async function loadCatalog() {
  try {
    const res = await fetch('data/catalog.json');
    CATALOG = await res.json();
    updateStats();
    renderCards();
  } catch (e) {
    console.error('Error cargando catálogo:', e);
    document.getElementById('repo-grid').innerHTML =
      '<div style="padding:32px;color:var(--ceec-tinta-soft);">Error cargando catálogo. Revisa data/catalog.json.</div>';
  }
}

function updateStats() {
  if (!CATALOG) return;
  const n = CATALOG.series.length;
  const fuentes = new Set(CATALOG.series.map(s => s.fuente)).size;
  const obsTotal = CATALOG.series.reduce((sum, s) => sum + (s.n_obs || 0), 0);

  document.getElementById('stat-series').innerHTML = `${n}<em>SERIES</em>`;
  document.getElementById('stat-obs').innerHTML =
    obsTotal > 0 ? `${obsTotal.toLocaleString('es-DO')}<em>OBS</em>` : `—<em>OBS</em>`;
  document.getElementById('stat-fuentes').innerHTML = `${fuentes}<em>FUENTES</em>`;
}

// ============================================================================
// RENDER
// ============================================================================

function renderCards() {
  if (!CATALOG) return;
  const grid = document.getElementById('repo-grid');
  const filtered = CATALOG.series.filter(s => {
    const matchesFilter = CURRENT_FILTER === 'all' || s.categoria === CURRENT_FILTER;
    const q = CURRENT_QUERY.toLowerCase();
    const matchesQuery = !q ||
      s.titulo.toLowerCase().includes(q) ||
      s.titulo_corto.toLowerCase().includes(q) ||
      s.fuente.toLowerCase().includes(q) ||
      s.fuente_completa.toLowerCase().includes(q) ||
      s.categoria.toLowerCase().includes(q) ||
      (s.descripcion || '').toLowerCase().includes(q);
    return matchesFilter && matchesQuery;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `<div style="padding:48px;text-align:center;color:var(--ceec-tinta-soft);font-style:italic;">Sin resultados para esta búsqueda.</div>`;
    return;
  }

  grid.innerHTML = filtered.map(renderCard).join('');
}

function renderCard(s) {
  const isFeatured = s.featured;
  const cls = isFeatured ? 'repo-card featured' : 'repo-card';
  const sparkPath = SPARK_PATHS[s.id] || SPARK_PATHS.imae;
  const strokeColor = isFeatured ? '#D4A030' : '#3D6B8A';
  const isPending = s._status === 'pending';
  const pendingLabel = isPending
    ? `<span class="card-status-pending">Próximamente</span>`
    : `<span class="card-update">ACTUALIZADO · ${s.ultima_obs || '—'}</span>`;

  const sparkSvg = isFeatured
    ? `<svg viewBox="0 0 800 80" preserveAspectRatio="none">
         <path d="${sparkPath}" fill="none" stroke="${strokeColor}" stroke-width="2"/>
         <path d="${sparkPath} L800,80 L0,80 Z" fill="url(#g1)" opacity="0.3"/>
         <defs>
           <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
             <stop offset="0%" stop-color="${strokeColor}"/>
             <stop offset="100%" stop-color="${strokeColor}" stop-opacity="0"/>
           </linearGradient>
         </defs>
       </svg>`
    : `<svg viewBox="0 0 400 50" preserveAspectRatio="none">
         <path d="${sparkPath}" fill="none" stroke="${strokeColor}" stroke-width="1.8"/>
       </svg>`;

  const link = isPending ? '#' : `serie.html?id=${s.id}`;

  return `
    <a href="${link}" class="${cls}">
      <div class="card-meta">
        <span class="card-source">${s.fuente_completa || s.fuente}</span>
        <span>${s.categoria.toUpperCase()} · ${s.frecuencia.toUpperCase()}</span>
      </div>
      <h3 class="card-title">${s.titulo}</h3>
      <p class="card-desc">${s.descripcion || ''}</p>
      <div class="card-spark">${sparkSvg}</div>
      <div class="card-footer">
        ${pendingLabel}
        <span class="card-action">${isPending ? 'En desarrollo' : 'Explorar serie'}</span>
      </div>
    </a>
  `;
}

// ============================================================================
// EVENTS
// ============================================================================

function setupFilters() {
  document.querySelectorAll('.filter-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      CURRENT_FILTER = btn.dataset.filter;
      renderCards();
    });
  });

  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      CURRENT_QUERY = e.target.value;
      renderCards();
    });
  }
}

// ============================================================================
// INIT
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {
  loadCatalog();
  setupFilters();
});
