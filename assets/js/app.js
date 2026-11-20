/* =====================================================
   COUNTRIES GEOGRAPHIC CENTERS — app.js
   ===================================================== */

/* ── ISO codes ── */
const ISO = {
  "Afghanistan":"af","Albania":"al","Algeria":"dz","Andorra":"ad","Angola":"ao",
  "Antigua and Barbuda":"ag","Argentina":"ar","Armenia":"am","Australia":"au","Austria":"at",
  "Azerbaijan":"az","Bahamas":"bs","Bahrain":"bh","Bangladesh":"bd","Barbados":"bb",
  "Belarus":"by","Belgium":"be","Belize":"bz","Benin":"bj","Bhutan":"bt","Bolivia":"bo",
  "Bosnia and Herzegovina":"ba","Botswana":"bw","Brazil":"br","Brunei":"bn","Bulgaria":"bg",
  "Burkina Faso":"bf","Burundi":"bi","Cabo Verde":"cv","Cambodia":"kh","Cameroon":"cm",
  "Canada":"ca","Central African Republic":"cf","Chad":"td","Chile":"cl","China":"cn",
  "Colombia":"co","Comoros":"km","Congo (Congo-Brazzaville)":"cg","Costa Rica":"cr",
  "Croatia":"hr","Cuba":"cu","Cyprus":"cy","Czechia":"cz",
  "Democratic Republic of the Congo":"cd","Denmark":"dk","Djibouti":"dj","Dominica":"dm",
  "Dominican Republic":"do","Ecuador":"ec","Egypt":"eg","El Salvador":"sv",
  "Equatorial Guinea":"gq","Eritrea":"er","Estonia":"ee","Eswatini":"sz","Ethiopia":"et",
  "Fiji":"fj","Finland":"fi","France":"fr","Gabon":"ga","Gambia":"gm","Georgia":"ge",
  "Germany":"de","Ghana":"gh","Greece":"gr","Greenland":"gl","Grenada":"gd",
  "Guatemala":"gt","Guinea":"gn","Guinea-Bissau":"gw","Guyana":"gy","Haiti":"ht",
  "Honduras":"hn","Hungary":"hu","Iceland":"is","India":"in","Indonesia":"id",
  "Iran":"ir","Iraq":"iq","Ireland":"ie","Israel":"il","Italy":"it","Jamaica":"jm",
  "Japan":"jp","Jordan":"jo","Kazakhstan":"kz","Kenya":"ke","Kiribati":"ki",
  "Kuwait":"kw","Kyrgyzstan":"kg","Laos":"la","Latvia":"lv","Lebanon":"lb",
  "Lesotho":"ls","Liberia":"lr","Libya":"ly","Liechtenstein":"li","Lithuania":"lt",
  "Luxembourg":"lu","Madagascar":"mg","Malawi":"mw","Malaysia":"my","Maldives":"mv",
  "Mali":"ml","Malta":"mt","Marshall Islands":"mh","Mauritania":"mr","Mauritius":"mu",
  "Mexico":"mx","Micronesia":"fm","Moldova":"md","Monaco":"mc","Mongolia":"mn",
  "Montenegro":"me","Morocco":"ma","Mozambique":"mz","Myanmar":"mm","Namibia":"na",
  "Nauru":"nr","Nepal":"np","Netherlands":"nl","New Zealand":"nz","Nicaragua":"ni",
  "Niger":"ne","Nigeria":"ng","North Korea":"kp","North Macedonia":"mk","Norway":"no",
  "Oman":"om","Pakistan":"pk","Palau":"pw","Panama":"pa","Papua New Guinea":"pg",
  "Paraguay":"py","Peru":"pe","Philippines":"ph","Poland":"pl","Portugal":"pt",
  "Qatar":"qa","Romania":"ro","Russia":"ru","Rwanda":"rw","Saint Kitts and Nevis":"kn",
  "Saint Lucia":"lc","Saint Vincent and the Grenadines":"vc","Samoa":"ws",
  "San Marino":"sm","Sao Tome and Principe":"st","Saudi Arabia":"sa","Senegal":"sn",
  "Serbia":"rs","Seychelles":"sc","Sierra Leone":"sl","Singapore":"sg","Slovakia":"sk",
  "Slovenia":"si","Solomon Islands":"sb","Somalia":"so","South Africa":"za",
  "South Korea":"kr","South Sudan":"ss","Spain":"es","Sri Lanka":"lk","Sudan":"sd",
  "Suriname":"sr","Sweden":"se","Switzerland":"ch","Syria":"sy","Taiwan":"tw",
  "Tajikistan":"tj","Tanzania":"tz","Thailand":"th","Timor-Leste":"tl","Togo":"tg",
  "Tonga":"to","Trinidad and Tobago":"tt","Tunisia":"tn","Türkiye":"tr",
  "Turkmenistan":"tm","Tuvalu":"tv","Uganda":"ug","Ukraine":"ua",
  "United Arab Emirates":"ae","United Kingdom":"gb","United States":"us","Uruguay":"uy",
  "Uzbekistan":"uz","Vanuatu":"vu","Vatican City":"va","Venezuela":"ve","Vietnam":"vn",
  "Yemen":"ye","Zambia":"zm","Zimbabwe":"zw"
};

/* ── Translations ── */
const LANG = {
  en: {
    heroTitle: "Geographic Center of Every Country",
    heroSub: "Explore the exact mathematical center of 196 countries, calculated from millions of boundary coordinates.",
    searchPlaceholder: "Search any country…",
    mapTitle: "World Map",
    countries: "Countries",
    btnExplore: "Explore Map",
    btnCountries: "Browse All",
    sortAZ: "A → Z",
    sortZA: "Z → A",
    all: "All",
    openPage: "View center →",
    statCountries: "Countries",
    statMethod: "WGS84",
    statAccuracy: "±3–7m",
    statLabel1: "Mapped",
    statLabel2: "Ellipsoid",
    statLabel3: "Accuracy",
    creditText: "Data sourced from",
  },
  tr: {
    heroTitle: "Her Ülkenin Coğrafi Merkezi",
    heroSub: "Milyonlarca sınır koordinatından hesaplanan 196 ülkenin tam matematiksel merkezini keşfedin.",
    searchPlaceholder: "Ülke ara…",
    mapTitle: "Dünya Haritası",
    countries: "Ülkeler",
    btnExplore: "Haritayı Keşfet",
    btnCountries: "Tümünü Gör",
    sortAZ: "A → Z",
    sortZA: "Z → A",
    all: "Tümü",
    openPage: "Merkezi gör →",
    statCountries: "Ülke",
    statMethod: "WGS84",
    statAccuracy: "±3–7m",
    statLabel1: "Haritalandı",
    statLabel2: "Elipsoid",
    statLabel3: "Hassasiyet",
    creditText: "Veri kaynağı:",
  },
  de: {
    heroTitle: "Geografischer Mittelpunkt jedes Landes",
    heroSub: "Erkunden Sie den exakten mathematischen Mittelpunkt von 196 Ländern aus Millionen von Grenzkoordinaten berechnet.",
    searchPlaceholder: "Land suchen…",
    mapTitle: "Weltkarte",
    countries: "Länder",
    btnExplore: "Karte erkunden",
    btnCountries: "Alle anzeigen",
    sortAZ: "A → Z",
    sortZA: "Z → A",
    all: "Alle",
    openPage: "Mittelpunkt →",
    statCountries: "Länder",
    statMethod: "WGS84",
    statAccuracy: "±3–7m",
    statLabel1: "Kartiert",
    statLabel2: "Ellipsoid",
    statLabel3: "Genauigkeit",
    creditText: "Daten von",
  },
  es: {
    heroTitle: "Centro Geográfico de Cada País",
    heroSub: "Explora el centro matemático exacto de 196 países, calculado a partir de millones de coordenadas de frontera.",
    searchPlaceholder: "Buscar país…",
    mapTitle: "Mapa Mundial",
    countries: "Países",
    btnExplore: "Explorar Mapa",
    btnCountries: "Ver Todos",
    sortAZ: "A → Z",
    sortZA: "Z → A",
    all: "Todos",
    openPage: "Ver centro →",
    statCountries: "Países",
    statMethod: "WGS84",
    statAccuracy: "±3–7m",
    statLabel1: "Mapeados",
    statLabel2: "Elipsoide",
    statLabel3: "Precisión",
    creditText: "Datos de",
  },
  pt: {
    heroTitle: "Centro Geográfico de Cada País",
    heroSub: "Explore o centro matemático exato de 196 países, calculado a partir de milhões de coordenadas de fronteira.",
    searchPlaceholder: "Buscar país…",
    mapTitle: "Mapa Mundial",
    countries: "Países",
    btnExplore: "Explorar Mapa",
    btnCountries: "Ver Todos",
    sortAZ: "A → Z",
    sortZA: "Z → A",
    all: "Todos",
    openPage: "Ver centro →",
    statCountries: "Países",
    statMethod: "WGS84",
    statAccuracy: "±3–7m",
    statLabel1: "Mapeados",
    statLabel2: "Elipsoide",
    statLabel3: "Precisão",
    creditText: "Dados de",
  }
};

/* ── Helpers ── */
function toSlug(name) {
  return name.normalize('NFKD').replace(/[\u0300-\u036f]/g,'')
    .replace(/[^0-9a-zA-Z\s\-]/g,'').trim().toLowerCase().replace(/\s+/g,'-');
}
function flagUrl(name) {
  const iso = ISO[name];
  return iso ? `assets/flags/${iso}.svg` : `assets/flags/unknown.svg`;
}
function formatCoord(lat, lon) {
  const la = lat >= 0 ? lat.toFixed(4)+'°N' : Math.abs(lat).toFixed(4)+'°S';
  const lo = lon >= 0 ? lon.toFixed(4)+'°E' : Math.abs(lon).toFixed(4)+'°W';
  return `${la}, ${lo}`;
}

/* ── State ── */
let countries = [];
let filtered  = [];
let lang      = localStorage.getItem('cgc_lang') || 'en';
let sortOrder = 'az';
let searchQ   = '';
let leafMap   = null;

/* ── Apply language ── */
function applyLang(l) {
  lang = l;
  localStorage.setItem('cgc_lang', l);
  const t = LANG[l] || LANG.en;
  document.querySelectorAll('[data-t]').forEach(el => {
    const key = el.getAttribute('data-t');
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.querySelectorAll('[data-tp]').forEach(el => {
    const key = el.getAttribute('data-tp');
    if (t[key] !== undefined) el.placeholder = t[key];
  });
  document.documentElement.lang = l;
  const sel = document.getElementById('lang-select');
  if (sel) sel.value = l;
}

/* ── Theme ── */
function initTheme() {
  const saved = localStorage.getItem('cgc_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);
  const btn = document.getElementById('theme-btn');
  if (btn) btn.textContent = saved === 'dark' ? '☀️' : '🌙';
}
function toggleTheme() {
  const cur  = document.documentElement.getAttribute('data-theme');
  const next = cur === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('cgc_theme', next);
  const btn = document.getElementById('theme-btn');
  if (btn) btn.textContent = next === 'dark' ? '☀️' : '🌙';
}

/* ── Render cards ── */
function renderCards() {
  const grid = document.getElementById('country-grid');
  const countEl = document.getElementById('results-count');
  if (!grid) return;
  const t = LANG[lang] || LANG.en;

  let list = [...filtered];
  if (sortOrder === 'za') list.reverse();

  grid.innerHTML = '';
  list.forEach(c => {
    const slug = toSlug(c.name);
    const href = `countries/right-in-the-middle-of-${slug}.html`;
    const flag = flagUrl(c.name);
    const coords = formatCoord(c.lat, c.lon);

    const a = document.createElement('a');
    a.className = 'country-card';
    a.href = href;
    a.innerHTML = `
      <img class="card-flag" src="${flag}" alt="${c.name} flag" loading="lazy"
           onerror="this.src='assets/flags/unknown.svg'">
      <div class="card-body">
        <div class="card-name">${c.name}</div>
        <div class="card-coords">${coords}</div>
        <span class="card-cta">${t.openPage}</span>
      </div>`;
    grid.appendChild(a);
  });

  if (countEl) countEl.textContent = `${list.length} / ${countries.length}`;
}

/* ── Filter + search ── */
function applyFilter() {
  const q = searchQ.toLowerCase().trim();
  filtered = countries.filter(c =>
    !q || c.name.toLowerCase().includes(q) || toSlug(c.name).includes(q.replace(/\s+/g,'-'))
  );
  renderCards();
}

/* ── Leaflet map ── */
function initMap() {
  if (leafMap || !document.getElementById('world-map')) return;

  leafMap = L.map('world-map', {
    center: [20, 10], zoom: 2, minZoom: 2, maxZoom: 10,
    zoomControl: true, worldCopyJump: false
  });

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    subdomains: 'abc', maxZoom: 19
  }).addTo(leafMap);

  // Dark mode tile invert
  if (document.documentElement.getAttribute('data-theme') === 'dark') {
    const s = document.createElement('style');
    s.id = 'map-tile-filter';
    s.textContent = '.leaflet-tile-pane{filter:invert(1) hue-rotate(180deg) brightness(0.85) contrast(0.9);}';
    document.head.appendChild(s);
  }

  const pinIcon = L.divIcon({
    className: '',
    html: '<div style="width:9px;height:9px;border-radius:50%;background:#00c6ff;border:2px solid #fff;box-shadow:0 1px 5px rgba(0,0,0,0.5);"></div>',
    iconSize: [9,9], iconAnchor: [4,4], popupAnchor: [0,-6]
  });

  countries.forEach(c => {
    const slug = toSlug(c.name);
    const iso  = ISO[c.name] || '';
    const t    = LANG[lang] || LANG.en;
    const flagImg = iso
      ? `<img src="assets/flags/${iso}.svg" style="width:40px;height:26px;object-fit:cover;border-radius:3px;border:1px solid #ddd;display:block;margin:0 auto 6px">`
      : '';

    const marker = L.marker([c.lat, c.lon], { icon: pinIcon });
    marker.bindPopup(() => `
      <div style="text-align:center;min-width:150px">
        ${flagImg}
        <div style="font-weight:700;font-size:.95rem;margin-bottom:3px">${c.name}</div>
        <div style="font-size:.72rem;color:#888;margin-bottom:8px">${formatCoord(c.lat,c.lon)}</div>
        <a href="countries/right-in-the-middle-of-${slug}.html"
           style="display:inline-block;padding:5px 14px;background:linear-gradient(90deg,#00c6ff,#0072ff);color:#fff;border-radius:20px;font-size:.78rem;font-weight:600;text-decoration:none">
          ${t.openPage}
        </a>
      </div>`, { maxWidth: 200 });

    marker.on('click', () => {
      window.location.href = `countries/right-in-the-middle-of-${slug}.html`;
    });
    marker.on('contextmenu', e => { e.originalEvent.preventDefault(); marker.openPopup(); });
    marker.addTo(leafMap);
  });
}

/* ── BOOT ── */
document.addEventListener('DOMContentLoaded', () => {
  initTheme();

  // Theme toggle
  document.getElementById('theme-btn')?.addEventListener('click', toggleTheme);

  // Lang select
  const langSel = document.getElementById('lang-select');
  if (langSel) {
    langSel.value = lang;
    langSel.addEventListener('change', e => { applyLang(e.target.value); renderCards(); });
  }

  // Mobile nav
  document.getElementById('nav-toggle')?.addEventListener('click', () => {
    document.getElementById('nav-links').classList.toggle('open');
  });

  // Sort
  document.getElementById('sort-select')?.addEventListener('change', e => {
    sortOrder = e.target.value;
    renderCards();
  });

  // Search
  const searchInput = document.getElementById('search-input');
  const searchRes   = document.getElementById('search-results');

  searchInput?.addEventListener('input', e => {
    searchQ = e.target.value;
    applyFilter();
    // live dropdown
    const q = searchQ.toLowerCase().trim();
    if (!q || !searchRes) { searchRes && (searchRes.classList.remove('open')); return; }
    const hits = countries.filter(c => c.name.toLowerCase().includes(q)).slice(0,8);
    if (!hits.length) { searchRes.classList.remove('open'); return; }
    const t = LANG[lang] || LANG.en;
    searchRes.innerHTML = hits.map(c => {
      const iso = ISO[c.name]||'';
      const flagHtml = iso ? `<img src="assets/flags/${iso}.svg" alt="">` : '';
      return `<div class="sr-item" data-slug="${toSlug(c.name)}" data-lat="${c.lat}" data-lon="${c.lon}" data-name="${c.name}">
        ${flagHtml}<span>${c.name}</span>
        <span class="sr-coords">${formatCoord(c.lat,c.lon)}</span>
      </div>`;
    }).join('');
    searchRes.classList.add('open');

    searchRes.querySelectorAll('.sr-item').forEach(item => {
      item.addEventListener('click', () => {
        searchInput.value = item.dataset.name;
        searchQ = item.dataset.name;
        searchRes.classList.remove('open');
        applyFilter();
        // scroll to card
        const slug = item.dataset.slug;
        const card = document.querySelector(`[href="countries/right-in-the-middle-of-${slug}.html"]`);
        card?.scrollIntoView({ behavior:'smooth', block:'center' });
        // pan map
        if (leafMap) leafMap.setView([parseFloat(item.dataset.lat), parseFloat(item.dataset.lon)], 5, {animate:true});
      });
    });
  });

  document.addEventListener('click', e => {
    if (!e.target.closest('.search-wrap')) searchRes?.classList.remove('open');
  });

  document.getElementById('search-btn')?.addEventListener('click', () => {
    searchQ = searchInput?.value || '';
    applyFilter();
    searchRes?.classList.remove('open');
  });

  searchInput?.addEventListener('keydown', e => {
    if (e.key === 'Enter') { searchQ = e.target.value; applyFilter(); searchRes?.classList.remove('open'); }
    if (e.key === 'Escape') searchRes?.classList.remove('open');
  });

  // Load data
  fetch('assets/js/countries_coordinates.json')
    .then(r => r.json())
    .then(data => {
      countries = data.sort((a,b) => a.name.localeCompare(b.name));
      filtered  = [...countries];
      applyLang(lang);
      renderCards();
      initMap();
    })
    .catch(err => console.error('Failed to load coordinates:', err));
});
