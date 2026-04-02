const D = window.KANSAI_DATA;
const ROUTE_COLOR = {
  arrival:'#64748b', day1:'#111827', day2:'#334155', transfer:'#0f172a',
  osaka_conan:'#475569', food:'#9ca3af', return:'#94a3b8'
};
const byId = Object.fromEntries(D.points.map((p, i) => [p.id, { ...p, num: i + 1 }]));

const map = L.map('map');
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

const markers = [];
const lines = [];

const gm = p => 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(p.n + ' ' + p.a);
const osm = p => 'https://www.openstreetmap.org/?mlat=' + p.lat + '&mlon=' + p.lng + '#map=16/' + p.lat + '/' + p.lng;
const routeDir = r => {
  const a = byId[r.f], b = byId[r.t];
  return 'https://www.google.com/maps/dir/?api=1&origin=' + encodeURIComponent(a.n) + '&destination=' + encodeURIComponent(b.n);
};

const visibleRouteGroups = view => {
  const mapByView = {
    all:['arrival','day1','day2','food','transfer','osaka_conan','return'],
    arrival:['arrival'],
    day1:['day1','food'],
    day2:['day2'],
    transfer:['transfer','osaka_conan'],
    osaka_conan:['osaka_conan'],
    return:['return'],
    pikmin:['day1','day2'],
    food:['food'],
    hotels:['arrival','transfer','return']
  };
  return mapByView[view] || mapByView.all;
};

const popupHtml = p => `
  <div>
    <b>${p.num}. ${p.n}</b>
    <div style="margin-top:4px;color:#6b7280">${p.a}｜${D.labels[p.p]}</div>
    <div style="margin-top:8px;line-height:1.6">${p.m}</div>
    <div style="margin-top:10px;display:flex;gap:8px;flex-wrap:wrap">
      <a class="mini" href="${gm(p)}" target="_blank" rel="noopener">Google Maps</a>
      <a class="mini" href="${osm(p)}" target="_blank" rel="noopener">OpenStreetMap</a>
    </div>
  </div>`;

D.points.forEach((p, i) => {
  const icon = L.divIcon({
    className: '',
    html: `<div class="marker ${p.p}">${i + 1}</div>`,
    iconSize: [28, 28],
    iconAnchor: [14, 14]
  });
  const marker = L.marker([p.lat, p.lng], { icon }).addTo(map).bindPopup(popupHtml({ ...p, num: i + 1 }));
  marker._view = p.v || [];
  marker.on('click', () => document.getElementById('c_' + p.id)?.scrollIntoView({ behavior: 'smooth', block: 'center' }));
  markers.push(marker);
});

D.routes.forEach(r => {
  const a = byId[r.f], b = byId[r.t];
  const line = L.polyline([[a.lat, a.lng], [b.lat, b.lng]], {
    color: ROUTE_COLOR[r.g] || '#94a3b8',
    weight: ['food', 'return'].includes(r.g) ? 3 : 4,
    opacity: .82,
    dashArray: ['food', 'return'].includes(r.g) ? '6,8' : null
  }).addTo(map);
  line._group = r.g;
  lines.push(line);
});

map.fitBounds(L.featureGroup(markers).getBounds().pad(.12));

const filters = document.getElementById('filters');
D.views.forEach(([key, label], idx) => {
  const b = document.createElement('button');
  b.className = 'fbtn' + (idx === 0 ? ' active' : '');
  b.textContent = label;
  b.dataset.view = key;
  b.onclick = () => applyFilter(key, b);
  filters.appendChild(b);
});

const board = document.getElementById('board');
D.itinerary.forEach(day => {
  const el = document.createElement('article');
  el.className = 'day-card';
  el.innerHTML = `
    <div class="day-top">
      <div>
        <div class="day-no">${day.day}</div>
        <div class="day-date">${day.date}</div>
      </div>
      <span class="pace">${day.pace}</span>
    </div>
    <div class="day-theme">${day.title}</div>
    <div class="day-base">${day.base}</div>
    <div class="tag-row">
      ${day.tags.map(([kind, text]) => `<span class="tag ${kind}">${text}</span>`).join('')}
    </div>
    <div class="quick-list">
      ${day.focus.map(([title, desc]) => `<div class="quick-item"><b>${title}</b><span>${desc}</span></div>`).join('')}
    </div>
    <div class="mini-row">
      <button class="jump-btn" data-view="${day.jump}">看這天地圖</button>
    </div>`;
  board.appendChild(el);
});

const routeList = document.getElementById('routeList');
D.routes.forEach(r => {
  const a = byId[r.f], b = byId[r.t];
  const el = document.createElement('div');
  el.className = 'routeItem';
  el.dataset.group = r.g;
  el.innerHTML = `
    <b>${a.n} → ${b.n}</b>
    <div class="muted">${r.m}｜${r.tm}</div>
    <div class="actions"><a class="mini" href="${routeDir(r)}" target="_blank" rel="noopener">Google 路線</a></div>`;
  routeList.appendChild(el);
});

const cards = document.getElementById('cards');
D.points.forEach((p, i) => {
  const el = document.createElement('article');
  el.className = 'card';
  el.id = 'c_' + p.id;
  el.dataset.views = (p.v || []).join(' ');
  el.innerHTML = `
    <div class="head">
      <div class="num ${p.p}">${i + 1}</div>
      <div>
        <h3>${p.n}</h3>
        <div class="meta">${p.a}｜${D.labels[p.p]}｜建議停留：${p.s}</div>
      </div>
    </div>
    <div class="sum">${p.m}</div>
    <div class="actions">
      <a class="mini" href="${gm(p)}" target="_blank" rel="noopener">Google Maps</a>
      <a class="mini" href="${osm(p)}" target="_blank" rel="noopener">OpenStreetMap</a>
      ${p.ref ? `<a class="mini" href="${p.ref}" target="_blank" rel="noopener">場景來源</a>` : ''}
    </div>`;
  cards.appendChild(el);
});

function setBoardActive(view) {
  document.querySelectorAll('.jump-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.view === view);
  });
}

function applyFilter(view, btnEl = null) {
  document.querySelectorAll('.fbtn').forEach(x => x.classList.remove('active'));
  if (btnEl) btnEl.classList.add('active');

  const allowedRoutes = visibleRouteGroups(view);

  markers.forEach(m => {
    const show = view === 'all' || (m._view || []).includes(view);
    if (show) { if (!map.hasLayer(m)) m.addTo(map); }
    else { if (map.hasLayer(m)) map.removeLayer(m); }
  });

  lines.forEach(l => {
    const show = allowedRoutes.includes(l._group);
    if (show) { if (!map.hasLayer(l)) l.addTo(map); }
    else { if (map.hasLayer(l)) map.removeLayer(l); }
  });

  document.querySelectorAll('.card').forEach(c => {
    const show = view === 'all' || c.dataset.views.split(' ').includes(view);
    c.classList.toggle('hidden', !show);
  });

  document.querySelectorAll('.routeItem').forEach(r => {
    r.classList.toggle('hidden', !allowedRoutes.includes(r.dataset.group));
  });

  setBoardActive(view);
}

document.addEventListener('click', e => {
  const btn = e.target.closest('.jump-btn');
  if (!btn) return;
  const view = btn.dataset.view;
  const filterBtn = document.querySelector(`.fbtn[data-view="${view}"]`);
  applyFilter(view, filterBtn);
  document.getElementById('map').scrollIntoView({ behavior: 'smooth', block: 'start' });
});

applyFilter('all', document.querySelector('.fbtn'));