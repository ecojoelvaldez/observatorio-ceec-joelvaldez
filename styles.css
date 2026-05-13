/* ============================================================================
   OBSERVATORIO CEEC · STYLES
   ============================================================================ */

:root {
  --ceec-azul: #3D6B8A;
  --ceec-azul-dark: #2A4A60;
  --ceec-azul-darker: #1A2F40;
  --ceec-dorado: #D4A030;
  --ceec-dorado-soft: #E8B547;
  --ceec-fondo: #F5F1E8;
  --ceec-fondo-2: #FAF7EF;
  --ceec-papel: #FFFEFA;
  --ceec-tinta: #1A1A1A;
  --ceec-tinta-soft: #4A4A4A;
  --ceec-tinta-mute: #7A7A7A;
  --ceec-borde: #D9D2C0;
  --ceec-borde-soft: #ECE7D8;
  --ceec-rojo: #B84A3A;
  --ceec-verde: #5A8A4A;

  --font-display: 'Fraunces', Georgia, serif;
  --font-body: 'IBM Plex Sans', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}

* { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: smooth; }

body {
  font-family: var(--font-body);
  background: var(--ceec-fondo);
  color: var(--ceec-tinta);
  line-height: 1.6;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
}

a { color: var(--ceec-azul); text-decoration: none; }
a:hover { text-decoration: underline; }

/* ==================== TOPBAR ==================== */
.topbar {
  background: var(--ceec-azul-darker);
  color: var(--ceec-fondo);
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.05em;
  padding: 8px 0;
}
.topbar-inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 32px;
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
}
.topbar-inner span { opacity: 0.7; }
.topbar-status::before {
  content: "●";
  color: var(--ceec-dorado-soft);
  margin-right: 6px;
  animation: pulse 2s ease-in-out infinite;
}
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

/* ==================== NAV ==================== */
nav {
  border-bottom: 1px solid var(--ceec-borde);
  padding: 20px 0;
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(8px);
  background: rgba(255, 254, 250, 0.95);
}
.nav-inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.brand {
  display: flex;
  align-items: center;
  gap: 14px;
  cursor: pointer;
}
.brand-mark {
  width: 38px;
  height: 38px;
  background: var(--ceec-azul);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--ceec-dorado-soft);
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 16px;
  border: 2px solid var(--ceec-dorado);
}
.brand-text { display: flex; flex-direction: column; line-height: 1.1; }
.brand-title {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 18px;
  color: var(--ceec-azul-darker);
  letter-spacing: -0.01em;
}
.brand-sub {
  font-family: var(--font-mono);
  font-size: 9.5px;
  color: var(--ceec-tinta-soft);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-top: 2px;
}
.nav-links {
  display: flex;
  gap: 32px;
  list-style: none;
}
.nav-links a {
  color: var(--ceec-tinta);
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  position: relative;
  padding-bottom: 4px;
  transition: color 0.2s;
}
.nav-links a:hover { color: var(--ceec-azul); text-decoration: none; }
.nav-links a.active { color: var(--ceec-azul); }
.nav-links a.active::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--ceec-dorado);
}

/* ==================== HERO ==================== */
.hero {
  max-width: 1280px;
  margin: 0 auto;
  padding: 80px 32px 60px;
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 64px;
  align-items: end;
}
.hero-eyebrow {
  font-family: var(--font-mono);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: var(--ceec-azul);
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  gap: 12px;
}
.hero-eyebrow::before {
  content: "";
  width: 32px;
  height: 1.5px;
  background: var(--ceec-dorado);
}
.hero h1 {
  font-family: var(--font-display);
  font-weight: 400;
  font-size: clamp(48px, 6vw, 76px);
  line-height: 1.02;
  letter-spacing: -0.025em;
  color: var(--ceec-azul-darker);
  margin-bottom: 28px;
  font-variation-settings: "opsz" 144;
}
.hero h1 em {
  font-style: italic;
  color: var(--ceec-azul);
  font-weight: 400;
}
.hero-lede {
  font-size: 17px;
  line-height: 1.6;
  color: var(--ceec-tinta-soft);
  max-width: 540px;
  font-weight: 400;
}
.hero-stats {
  display: flex;
  flex-direction: column;
  gap: 24px;
  border-left: 1px solid var(--ceec-borde);
  padding-left: 32px;
}
.stat { display: flex; flex-direction: column; gap: 4px; }
.stat-num {
  font-family: var(--font-display);
  font-size: 44px;
  line-height: 1;
  color: var(--ceec-azul-darker);
  font-weight: 500;
  letter-spacing: -0.02em;
}
.stat-num em {
  font-family: var(--font-mono);
  font-size: 14px;
  color: var(--ceec-dorado);
  font-style: normal;
  margin-left: 6px;
  vertical-align: top;
}
.stat-label {
  font-family: var(--font-mono);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--ceec-tinta-soft);
}

/* ==================== SECTION DIVIDER ==================== */
.section-divider {
  max-width: 1280px;
  margin: 0 auto;
  padding: 60px 32px 32px;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  border-bottom: 1px solid var(--ceec-borde);
  flex-wrap: wrap;
  gap: 16px;
}
.section-divider-left {
  display: flex;
  align-items: baseline;
  gap: 20px;
}
.section-num {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--ceec-dorado);
  letter-spacing: 0.1em;
}
.section-divider h2 {
  font-family: var(--font-display);
  font-weight: 500;
  font-size: 36px;
  color: var(--ceec-azul-darker);
  letter-spacing: -0.02em;
  line-height: 1;
}
.section-divider-right {
  font-family: var(--font-mono);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--ceec-tinta-soft);
}

/* ==================== REPO ==================== */
.repo {
  max-width: 1280px;
  margin: 0 auto;
  padding: 32px 32px 80px;
}
.repo-controls {
  display: flex;
  gap: 12px;
  margin-bottom: 32px;
  flex-wrap: wrap;
  align-items: center;
}
.repo-search {
  flex: 1;
  min-width: 280px;
  position: relative;
}
.repo-search input {
  width: 100%;
  padding: 12px 16px 12px 42px;
  border: 1px solid var(--ceec-borde);
  background: var(--ceec-papel);
  font-family: var(--font-body);
  font-size: 14px;
  color: var(--ceec-tinta);
  border-radius: 0;
  transition: border-color 0.2s;
}
.repo-search input:focus { outline: none; border-color: var(--ceec-azul); }
.repo-search::before {
  content: "⌕";
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--ceec-tinta-soft);
  font-size: 18px;
}
.filter-pill {
  padding: 8px 16px;
  border: 1px solid var(--ceec-borde);
  background: var(--ceec-papel);
  font-family: var(--font-mono);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--ceec-tinta-soft);
  cursor: pointer;
  transition: all 0.2s;
}
.filter-pill:hover { border-color: var(--ceec-azul); color: var(--ceec-azul); }
.filter-pill.active {
  background: var(--ceec-azul-darker);
  color: var(--ceec-papel);
  border-color: var(--ceec-azul-darker);
}

.repo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  gap: 1px;
  background: var(--ceec-borde);
  border: 1px solid var(--ceec-borde);
}
.repo-card {
  background: var(--ceec-papel);
  padding: 24px;
  cursor: pointer;
  transition: background 0.2s;
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-height: 220px;
  text-decoration: none;
  color: inherit;
}
.repo-card:hover { background: var(--ceec-fondo-2); text-decoration: none; }
.card-meta {
  display: flex;
  justify-content: space-between;
  font-family: var(--font-mono);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--ceec-tinta-soft);
  gap: 12px;
}
.card-source { color: var(--ceec-azul); font-weight: 500; }
.card-title {
  font-family: var(--font-display);
  font-size: 22px;
  font-weight: 500;
  line-height: 1.15;
  color: var(--ceec-azul-darker);
  letter-spacing: -0.01em;
}
.card-desc { font-size: 13px; line-height: 1.5; color: var(--ceec-tinta-soft); }
.card-spark { height: 50px; margin-top: auto; }
.card-spark svg { width: 100%; height: 100%; display: block; }
.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px dashed var(--ceec-borde-soft);
  padding-top: 12px;
  margin-top: 4px;
}
.card-update {
  font-family: var(--font-mono);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--ceec-tinta-soft);
}
.card-action {
  font-family: var(--font-mono);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--ceec-azul);
  font-weight: 600;
}
.card-action::after { content: " →"; }
.card-status-pending {
  display: inline-block;
  padding: 2px 8px;
  background: var(--ceec-borde-soft);
  color: var(--ceec-tinta-mute);
  font-family: var(--font-mono);
  font-size: 9px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.repo-card.featured {
  grid-column: span 2;
  background: var(--ceec-azul-darker);
  color: var(--ceec-fondo);
  min-height: 280px;
  position: relative;
  overflow: hidden;
}
.repo-card.featured::before {
  content: "";
  position: absolute;
  top: 0; right: 0;
  width: 200px; height: 200px;
  background: radial-gradient(circle, var(--ceec-dorado) 0%, transparent 70%);
  opacity: 0.15;
  transform: translate(40%, -40%);
}
.repo-card.featured:hover { background: var(--ceec-azul-dark); }
.repo-card.featured .card-meta { color: var(--ceec-dorado-soft); }
.repo-card.featured .card-source { color: var(--ceec-dorado); }
.repo-card.featured .card-title { color: var(--ceec-fondo); font-size: 32px; }
.repo-card.featured .card-desc { color: rgba(245, 241, 232, 0.75); font-size: 14px; }
.repo-card.featured .card-footer { border-top-color: rgba(245, 241, 232, 0.15); }
.repo-card.featured .card-update { color: rgba(245, 241, 232, 0.6); }
.repo-card.featured .card-action { color: var(--ceec-dorado); }
.repo-card.featured .card-spark { height: 80px; }

/* ==================== FOOTER ==================== */
footer {
  background: var(--ceec-azul-darker);
  color: var(--ceec-fondo);
  padding: 60px 0 30px;
  margin-top: 80px;
}
.footer-inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 32px;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 60px;
}
.footer-brand h3 {
  font-family: var(--font-display);
  font-size: 28px;
  font-weight: 500;
  margin-bottom: 12px;
  color: var(--ceec-fondo);
}
.footer-brand p {
  color: rgba(245, 241, 232, 0.7);
  max-width: 380px;
  font-size: 14px;
}
.footer-col h4 {
  font-family: var(--font-mono);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--ceec-dorado-soft);
  margin-bottom: 16px;
}
.footer-col ul { list-style: none; }
.footer-col li { margin-bottom: 8px; }
.footer-col a {
  color: rgba(245, 241, 232, 0.8);
  text-decoration: none;
  font-size: 13px;
}
.footer-col a:hover { color: var(--ceec-dorado); text-decoration: none; }
.footer-bottom {
  max-width: 1280px;
  margin: 50px auto 0;
  padding: 24px 32px 0;
  border-top: 1px solid rgba(245, 241, 232, 0.15);
  display: flex;
  justify-content: space-between;
  font-family: var(--font-mono);
  font-size: 10.5px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: rgba(245, 241, 232, 0.5);
  flex-wrap: wrap;
  gap: 12px;
}

/* ==================== PÁGINAS INTERIORES ==================== */
.page {
  max-width: 1100px;
  margin: 0 auto;
  padding: 60px 32px 80px;
}
.page-eyebrow {
  font-family: var(--font-mono);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: var(--ceec-azul);
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 12px;
}
.page-eyebrow::before {
  content: "";
  width: 32px;
  height: 1.5px;
  background: var(--ceec-dorado);
}
.page h1 {
  font-family: var(--font-display);
  font-weight: 400;
  font-size: clamp(40px, 5vw, 60px);
  line-height: 1.05;
  letter-spacing: -0.02em;
  color: var(--ceec-azul-darker);
  margin-bottom: 24px;
  font-variation-settings: "opsz" 144;
}
.page-lede {
  font-size: 18px;
  line-height: 1.6;
  color: var(--ceec-tinta-soft);
  max-width: 720px;
  margin-bottom: 48px;
  font-family: var(--font-display);
  font-weight: 300;
  font-style: italic;
}

.page h2 {
  font-family: var(--font-display);
  font-weight: 500;
  font-size: 30px;
  color: var(--ceec-azul-darker);
  letter-spacing: -0.015em;
  margin-top: 56px;
  margin-bottom: 20px;
  border-top: 1px solid var(--ceec-borde);
  padding-top: 32px;
}
.page h3 {
  font-family: var(--font-display);
  font-weight: 500;
  font-size: 22px;
  color: var(--ceec-azul-darker);
  margin-top: 32px;
  margin-bottom: 12px;
}
.page p {
  font-size: 15.5px;
  line-height: 1.7;
  color: var(--ceec-tinta);
  margin-bottom: 16px;
  max-width: 720px;
}
.page p.muted { color: var(--ceec-tinta-soft); }
.page ul, .page ol {
  margin: 0 0 20px 24px;
  font-size: 15.5px;
  line-height: 1.8;
  max-width: 720px;
}
.page li { margin-bottom: 4px; }

/* Roadmap timeline */
.roadmap-phase {
  border-left: 2px solid var(--ceec-borde);
  padding: 24px 0 24px 32px;
  position: relative;
  margin-left: 8px;
}
.roadmap-phase::before {
  content: "";
  width: 14px;
  height: 14px;
  background: var(--ceec-papel);
  border: 2px solid var(--ceec-dorado);
  border-radius: 50%;
  position: absolute;
  left: -8px;
  top: 28px;
}
.roadmap-phase.done::before { background: var(--ceec-dorado); }
.roadmap-phase .phase-label {
  font-family: var(--font-mono);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--ceec-dorado);
  margin-bottom: 6px;
}
.roadmap-phase .phase-title {
  font-family: var(--font-display);
  font-size: 22px;
  font-weight: 500;
  color: var(--ceec-azul-darker);
  margin-bottom: 8px;
}
.roadmap-phase ul { margin-top: 8px; }

/* Tabla de profesores */
.profs-table {
  width: 100%;
  border-collapse: collapse;
  background: var(--ceec-papel);
  margin-top: 24px;
  font-size: 14px;
}
.profs-table th {
  text-align: left;
  padding: 12px 16px;
  background: var(--ceec-azul-darker);
  color: var(--ceec-fondo);
  font-family: var(--font-mono);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 500;
}
.profs-table td {
  padding: 14px 16px;
  border-bottom: 1px solid var(--ceec-borde-soft);
  vertical-align: top;
}
.profs-table tr:hover td { background: var(--ceec-fondo-2); }
.profs-table .prof-name { font-weight: 600; color: var(--ceec-azul-darker); }
.profs-table .prof-area {
  font-family: var(--font-mono);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--ceec-tinta-soft);
}
.profs-table .prof-note {
  font-size: 13px;
  color: var(--ceec-tinta-soft);
  font-style: italic;
}

/* Banner colaboración */
.collab-banner {
  background: var(--ceec-azul-darker);
  color: var(--ceec-fondo);
  padding: 32px;
  margin-top: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
}
.collab-banner h4 {
  font-family: var(--font-display);
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 6px;
  color: var(--ceec-fondo);
}
.collab-banner p {
  color: rgba(245, 241, 232, 0.75);
  font-size: 14px;
  margin: 0;
  max-width: 540px;
}
.collab-banner a {
  background: var(--ceec-dorado);
  color: var(--ceec-azul-darker);
  padding: 12px 22px;
  font-family: var(--font-mono);
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 600;
  text-decoration: none;
  white-space: nowrap;
}
.collab-banner a:hover { background: var(--ceec-dorado-soft); text-decoration: none; }

/* ==================== VISTA DE SERIE ==================== */
.serie-page { max-width: 1280px; margin: 0 auto; padding: 40px 32px 80px; }
.breadcrumb {
  font-family: var(--font-mono);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--ceec-tinta-soft);
  margin-bottom: 32px;
}
.breadcrumb a { color: var(--ceec-tinta-soft); }
.breadcrumb a:hover { color: var(--ceec-azul); text-decoration: none; }

.serie-header {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 48px;
  margin-bottom: 40px;
  padding-bottom: 32px;
  border-bottom: 1px solid var(--ceec-borde);
}
.serie-meta-top {
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
  font-family: var(--font-mono);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
}
.serie-meta-top .tag {
  padding: 4px 10px;
  background: var(--ceec-papel);
  border: 1px solid var(--ceec-borde);
  color: var(--ceec-tinta-soft);
}
.serie-meta-top .tag.source { color: var(--ceec-azul); border-color: var(--ceec-azul); }

.serie-page h1 {
  font-family: var(--font-display);
  font-weight: 500;
  font-size: clamp(36px, 4.5vw, 54px);
  line-height: 1.05;
  letter-spacing: -0.02em;
  color: var(--ceec-azul-darker);
  margin-bottom: 16px;
}
.serie-desc {
  font-size: 15.5px;
  line-height: 1.65;
  color: var(--ceec-tinta-soft);
}

.serie-quickstats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}
.qstat {
  background: var(--ceec-papel);
  border: 1px solid var(--ceec-borde);
  padding: 16px;
}
.qstat-label {
  font-family: var(--font-mono);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--ceec-tinta-soft);
  margin-bottom: 6px;
}
.qstat-value {
  font-family: var(--font-display);
  font-size: 26px;
  font-weight: 500;
  color: var(--ceec-azul-darker);
  line-height: 1;
}
.qstat-value.mono {
  font-family: var(--font-mono);
  font-size: 18px;
}

.chart-block {
  background: var(--ceec-papel);
  border: 1px solid var(--ceec-borde);
  padding: 32px;
  margin-bottom: 32px;
}
.chart-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  flex-wrap: wrap;
  gap: 16px;
}
.serie-selector {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
.serie-toggle {
  padding: 6px 12px;
  border: 1px solid var(--ceec-borde);
  background: transparent;
  font-family: var(--font-mono);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--ceec-tinta-soft);
  cursor: pointer;
  transition: all 0.2s;
}
.serie-toggle.active {
  background: var(--ceec-azul-darker);
  color: var(--ceec-papel);
  border-color: var(--ceec-azul-darker);
}
.chart-range {
  display: flex;
  gap: 4px;
}
.range-btn {
  padding: 6px 10px;
  background: transparent;
  border: 1px solid transparent;
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.08em;
  color: var(--ceec-tinta-soft);
  cursor: pointer;
}
.range-btn.active { color: var(--ceec-azul-darker); border-color: var(--ceec-borde); }

#chart { width: 100%; height: 380px; }

.serie-detail-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 32px;
  margin-bottom: 40px;
}
.detail-block {
  background: var(--ceec-papel);
  border: 1px solid var(--ceec-borde);
  padding: 28px;
}
.detail-block h3 {
  font-family: var(--font-display);
  font-size: 20px;
  font-weight: 500;
  color: var(--ceec-azul-darker);
  margin-bottom: 16px;
}
.detail-block p {
  font-size: 14.5px;
  line-height: 1.65;
  color: var(--ceec-tinta);
  margin-bottom: 12px;
}
.detail-block dl {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 10px 16px;
  font-size: 13px;
}
.detail-block dt {
  font-family: var(--font-mono);
  font-size: 10.5px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--ceec-tinta-soft);
}
.detail-block dd { color: var(--ceec-tinta); }

.download-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 20px;
  background: var(--ceec-azul-darker);
  color: var(--ceec-papel);
  font-family: var(--font-mono);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 600;
  text-decoration: none;
  margin-right: 12px;
  margin-bottom: 8px;
  border: none;
  cursor: pointer;
  transition: background 0.2s;
}
.download-btn:hover { background: var(--ceec-azul); text-decoration: none; }
.download-btn.secondary {
  background: transparent;
  color: var(--ceec-azul-darker);
  border: 1px solid var(--ceec-azul-darker);
}
.download-btn.secondary:hover { background: var(--ceec-azul-darker); color: var(--ceec-papel); }

/* Pending state */
.pending-block {
  background: var(--ceec-borde-soft);
  border: 1px dashed var(--ceec-borde);
  padding: 60px 32px;
  text-align: center;
  color: var(--ceec-tinta-soft);
}
.pending-block h3 {
  font-family: var(--font-display);
  font-size: 22px;
  color: var(--ceec-azul-darker);
  margin-bottom: 12px;
}

/* ==================== RESPONSIVE ==================== */
@media (max-width: 900px) {
  .hero { grid-template-columns: 1fr; gap: 40px; }
  .hero-stats {
    border-left: none;
    border-top: 1px solid var(--ceec-borde);
    padding-left: 0;
    padding-top: 24px;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 28px;
  }
  .footer-inner { grid-template-columns: 1fr; gap: 32px; }
  .repo-card.featured { grid-column: span 1; }
  .nav-links { display: none; }
  .serie-header { grid-template-columns: 1fr; gap: 24px; }
  .serie-detail-grid { grid-template-columns: 1fr; }
  .profs-table { font-size: 13px; }
  .profs-table th, .profs-table td { padding: 10px 8px; }
}
