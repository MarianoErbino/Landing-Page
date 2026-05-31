// ===============================================
//  Cerrajería Vichi · Landing MVP — script.js
// ===============================================

// ============ INTRO ANIMADA ============
(function intro() {
  const el = document.getElementById('intro');
  if (!el) return;
  // bloqueo scroll mientras dura
  document.body.style.overflow = 'hidden';
  const dismiss = () => {
    el.classList.add('is-hidden');
    document.body.style.overflow = '';
  };
  // se autoesconde al terminar la animación CSS (≈2.6s en total)
  const timer = setTimeout(dismiss, 2800);
  // permitir saltarla con clic / tecla
  const skip = () => { clearTimeout(timer); dismiss(); };
  el.addEventListener('click', skip);
  document.addEventListener('keydown', function once(e) {
    if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
      skip();
      document.removeEventListener('keydown', once);
    }
  });
})();

// Datos mock de trabajos. Mariano: reemplazá las imágenes
// por fotos reales (en /assets/works/) y editá los textos.
const WORKS = [
  {
    id: 1,
    title: 'Cambio de cerradura multipunto',
    short: 'Departamento en Palermo. Trabex 5 puntos antiganzúa instalada en 40 min.',
    description:
      'El cliente quería reforzar la seguridad después de mudarse. Reemplazamos la cerradura común por una multipunto Trabex con 5 puntos de anclaje y sistema antiganzúa. Incluyó ajuste de marco y prueba de juego de llaves.',
    category: 'cambio',
    badge: 'Cambio cerradura',
    place: 'Palermo · CABA',
    date: 'Mar 2026',
    images: [
      'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503525148566-ef5c2b9c93bd?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  {
    id: 2,
    title: 'Trabajos en oficinas',
    short: 'Microcentro. Puerta blindada abierta sin rayones a las 03:00 AM.',
    description:
      'Llamada de urgencia: la última persona en salir cerró la puerta con las llaves adentro. Trabajamos con técnica de ganzúa fina, sin daño a la cerradura ni a la pintura. Reapertura del local en menos de 25 minutos desde el llamado.',
    category: 'apertura',
    badge: 'Apertura urgente',
    place: 'Microcentro · CABA',
    date: 'Mar 2026',
    images: [
      'https://images.unsplash.com/photo-1622495966500-31650a8c4f95?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  {
    id: 3,
    title: 'Cerradura digital con huella',
    short: 'Casa en Belgrano R. Cerradura biométrica con app y código maestro.',
    description:
      'Instalación de cerradura digital de última generación con apertura por huella, código numérico, tarjeta NFC y app por Bluetooth. Configuración de 6 usuarios y registro de accesos en el celular del cliente.',
    category: 'digital',
    badge: 'Digital',
    place: 'Belgrano R · CABA',
    date: 'Feb 2026',
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1496180470114-6ef490f3ff22?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  {
    id: 4,
    title: 'Copia de llave con chip para auto',
    short: 'Renault Sandero 2019. Llave codificada con transponder original.',
    description:
      'Cliente perdió la única llave del auto. Generamos una llave nueva con chip transponder codificada al inmovilizador del vehículo, manteniendo todas las funciones del control remoto (cierre, alarma, baúl).',
    category: 'auto',
    badge: 'Auto',
    place: 'Caballito · CABA',
    date: 'Feb 2026',
    fallback: 'car key',
    images: [
      'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  {
    id: 5,
    title: 'Cerradura de seguridad en local comercial',
    short: 'Avenida Cabildo. Cilindro antibumping y refuerzo de marco.',
    description:
      'Local que sufrió un intento de robo. Cambiamos a cilindro antibumping certificado, reforzamos el marco con planchuela de hierro y agregamos pasador suplementario superior. Asesoramiento adicional sobre alarma perimetral.',
    category: 'cambio',
    badge: 'Cambio cerradura',
    place: 'Núñez · CABA',
    date: 'Ene 2026',
    images: [
      'assets/works/cambio-oficinas.webp',
    ],
  },
  {
    id: 6,
    title: 'Apertura de caja fuerte',
    short: 'Caja fuerte ignífuga. Recuperamos contenido sin destruir el equipo.',
    description:
      'Caja fuerte que quedó bloqueada por falla mecánica. Apertura controlada sin uso de violencia, recuperación del contenido y posterior reparación del mecanismo. Cliente conservó la caja funcionando con una combinación nueva.',
    category: 'apertura',
    badge: 'Apertura',
    place: 'Recoleta · CABA',
    date: 'Ene 2026',
    fallback: 'safe vault',
    images: [
      'assets/works/caja-fuerte.jpeg',
    ],
  },
  {
    id: 7,
    title: 'Copia de llave en el acto',
    short: 'Mientras esperás. Cortamos y probamos la llave en menos de 10 minutos.',
    description:
      'Servicio en mostrador: duplicado de llaves residenciales y de seguridad en el momento. Probamos cada copia en la cerradura del cliente para garantizar funcionamiento correcto antes de entregar.',
    category: 'copias',
    badge: 'Copias',
    place: 'Almagro · CABA',
    date: 'May 2026',
    fallback: 'key duplicate cutting',
    images: [
      'assets/works/copia-llave.jpg',
      'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  {
    id: 8,
    title: 'Copia de control remoto',
    short: 'Clonación de controles de portón y alarma de auto.',
    description:
      'Duplicado y programación de controles remotos para portones de cochera, alarmas vehiculares y barreras de edificios. Trabajamos con frecuencias fijas y rolling code.',
    category: 'copias',
    badge: 'Control remoto',
    place: 'Vicente López · GBA',
    date: 'May 2026',
    fallback: 'remote control car',
    images: [
      'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  {
    id: 9,
    title: 'Cambio de cerradura a domicilio',
    short: 'Vamos a tu casa, asesoramos y dejamos la cerradura nueva el mismo día.',
    description:
      'Visita técnica a domicilio para evaluar la puerta, recomendar la cerradura adecuada (multipunto, doble paleta, antibumping) y realizar la instalación completa el mismo día. Incluye juego de llaves y prueba final.',
    category: 'cambio',
    badge: 'A domicilio',
    place: 'Villa Crespo · CABA',
    date: 'Abr 2026',
    fallback: 'door lock installation',
    images: [
      'assets/works/cambio-domicilio.jpg',
      'https://images.unsplash.com/photo-1503525148566-ef5c2b9c93bd?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  {
    id: 10,
    title: 'Control de acceso para edificios',
    short: 'Tarjetas, código y app para el ingreso del edificio.',
    description:
      'Instalación de sistemas de control de acceso para edificios y consorcios: lectores de tarjeta de proximidad, teclado numérico y apertura por app. Registro de ingresos y altas/bajas remotas para el administrador.',
    category: 'digital',
    badge: 'Acceso edificio',
    place: 'Caballito · CABA',
    date: 'Abr 2026',
    fallback: 'access control keypad building',
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1496180470114-6ef490f3ff22?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  {
    id: 11,
    title: 'Aperturas judiciales',
    short: 'Apertura asistida con orden judicial y oficial de justicia presente.',
    description:
      'Servicio para abogados, escribanos y oficiales de justicia: apertura de inmuebles con orden judicial, acta de procedimiento y resguardo de la cerradura cuando lo requiere el oficio. Coordinamos día y horario.',
    category: 'apertura',
    badge: 'Judicial',
    place: 'Recoleta · CABA',
    date: 'Mar 2026',
    fallback: 'door lock court',
    images: [
      'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1530538987395-032d1800fdd4?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  {
    id: 12,
    title: 'Apertura a domicilio',
    short: 'Vichi llega a tu puerta y la abre sin dañarla. CABA y GBA.',
    description:
      'Servicio de apertura sin daño en tu domicilio: te quedaste afuera, perdiste las llaves o se rompió la cerradura. Llegamos al lugar y trabajamos con técnica de ganzúa para abrir sin romper. Cobertura CABA y GBA.',
    category: 'apertura',
    badge: 'A domicilio',
    place: 'San Telmo · CABA',
    date: 'Mar 2026',
    fallback: 'locksmith opening door house',
    images: [
      'assets/works/apertura-domicilio.webp',
      'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=1200&q=80',
    ],
  },
];

// ============ RENDER CARDS ============
const grid = document.getElementById('worksGrid');

// Placeholder de respaldo (si una URL externa falla).
const FALLBACK_IMG =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#18181d"/>
          <stop offset="100%" stop-color="#0a0a0c"/>
        </linearGradient>
      </defs>
      <rect width="600" height="450" fill="url(#g)"/>
      <g fill="none" stroke="#f5b624" stroke-width="6" stroke-linecap="round">
        <circle cx="240" cy="225" r="55"/>
        <line x1="295" y1="225" x2="430" y2="225"/>
        <line x1="395" y1="225" x2="395" y2="250"/>
        <line x1="425" y1="225" x2="425" y2="260"/>
      </g>
      <text x="50%" y="380" text-anchor="middle" font-family="Inter, sans-serif"
            font-size="22" font-weight="700" fill="#f5b624" letter-spacing="3">
        VICHI CERRAJERÍA
      </text>
    </svg>`
  );

function imgFallback() {
  return `onerror="this.onerror=null;this.src='${FALLBACK_IMG}'"`;
}

function renderWorks(filter = 'all') {
  const list = filter === 'all' ? WORKS : WORKS.filter((w) => w.category === filter);
  grid.innerHTML = list
    .map(
      (w) => `
    <article class="work-card" data-id="${w.id}" tabindex="0">
      <div class="work-card__media">
        <img src="${w.images[0]}" alt="${escapeHtml(w.title)}" loading="lazy" ${imgFallback()} />
        <span class="work-card__badge">${escapeHtml(w.badge)}</span>
        ${w.images.length > 1 ? `<span class="work-card__count">
          <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>
          ${w.images.length}
        </span>` : ''}
      </div>
      <div class="work-card__body">
        <h3 class="work-card__title">${escapeHtml(w.title)}</h3>
        <p class="work-card__desc">${escapeHtml(w.short)}</p>
        <div class="work-card__meta">
          <span>${escapeHtml(w.place)}</span>
          <span>${escapeHtml(w.date)}</span>
        </div>
      </div>
    </article>
  `,
    )
    .join('');
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[c]);
}

renderWorks();

// ============ FILTROS ============
document.getElementById('workFilters').addEventListener('click', (e) => {
  const btn = e.target.closest('.chip');
  if (!btn) return;
  document.querySelectorAll('#workFilters .chip').forEach((c) => c.classList.remove('is-active'));
  btn.classList.add('is-active');
  renderWorks(btn.dataset.filter);
});

// ============ MODAL ============
const modal = document.getElementById('workModal');
const modalHero = document.getElementById('modalHero');
const modalThumbs = document.getElementById('modalThumbs');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalCategory = document.getElementById('modalCategory');

function openModal(workId) {
  const w = WORKS.find((x) => x.id === workId);
  if (!w) return;

  modalCategory.textContent = w.badge;
  modalTitle.textContent = w.title;
  modalDescription.textContent = w.description;
  modalHero.onerror = () => { modalHero.onerror = null; modalHero.src = FALLBACK_IMG; };
  modalHero.src = w.images[0];
  modalHero.alt = w.title;
  modalThumbs.innerHTML = w.images
    .map(
      (src, i) => `<img src="${src}" data-index="${i}" class="${i === 0 ? 'is-active' : ''}" alt="" ${imgFallback()} />`,
    )
    .join('');

  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

grid.addEventListener('click', (e) => {
  const card = e.target.closest('.work-card');
  if (card) openModal(Number(card.dataset.id));
});

grid.addEventListener('keydown', (e) => {
  if (e.key !== 'Enter' && e.key !== ' ') return;
  const card = e.target.closest('.work-card');
  if (card) {
    e.preventDefault();
    openModal(Number(card.dataset.id));
  }
});

modal.addEventListener('click', (e) => {
  if (e.target.dataset.close !== undefined) closeModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
});

modalThumbs.addEventListener('click', (e) => {
  const t = e.target.closest('img');
  if (!t) return;
  modalThumbs.querySelectorAll('img').forEach((i) => i.classList.remove('is-active'));
  t.classList.add('is-active');
  modalHero.onerror = () => { modalHero.onerror = null; modalHero.src = FALLBACK_IMG; };
  modalHero.src = t.src;
});

// ============ AGENDAR VISITA ============
// Franjas habilitadas: 12:00–16:00 y 19:00–21:00 (slots de 30 min).
// El último slot disponible para iniciar la visita es 15:30 y 20:30
// (la visita ocupa la franja hasta las 16:00 / 21:00).
const BOOKING_SLOTS = [
  '12:00', '12:30', '13:00', '13:30',
  '14:00', '14:30', '15:00', '15:30',
  '19:00', '19:30', '20:00', '20:30',
];

const bkForm = document.getElementById('bookingForm');
const bkDate = document.getElementById('bk-date');
const bkSlotsBox = document.getElementById('bk-slots');
const bkSlotsHint = document.getElementById('bk-slots-hint');
const bkTime = document.getElementById('bk-time');
const bkConfirm = document.getElementById('bookingConfirm');
const bkConfirmDetail = document.getElementById('bkConfirmDetail');

if (bkForm) {
  // Fecha mínima: hoy. Máxima: 60 días.
  const today = new Date();
  const todayIso = toLocalIso(today);
  const max = new Date();
  max.setDate(max.getDate() + 60);
  bkDate.min = todayIso;
  bkDate.max = toLocalIso(max);

  bkDate.addEventListener('change', renderSlots);

  bkSlotsBox.addEventListener('click', (e) => {
    const btn = e.target.closest('.slot');
    if (!btn || btn.disabled) return;
    bkSlotsBox.querySelectorAll('.slot').forEach((s) => s.classList.remove('is-selected'));
    btn.classList.add('is-selected');
    bkTime.value = btn.dataset.time;
    bkSlotsHint.classList.remove('is-error');
    bkSlotsHint.textContent = `Reservás el horario ${btn.dataset.time} hs.`;
  });

  bkForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validateBooking()) return;
    const data = Object.fromEntries(new FormData(bkForm).entries());
    showConfirm(data);
    bkForm.reset();
    bkSlotsBox.innerHTML = '';
    bkSlotsHint.textContent = 'Seleccioná primero un día.';
    bkTime.value = '';
  });

  // Cerrar modal confirmación
  bkConfirm.addEventListener('click', (e) => {
    if (e.target.dataset.closeConfirm !== undefined) closeConfirm();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && bkConfirm.classList.contains('is-open')) closeConfirm();
  });
}

function toLocalIso(d) {
  const tz = d.getTimezoneOffset() * 60000;
  return new Date(d.getTime() - tz).toISOString().slice(0, 10);
}

function renderSlots() {
  const value = bkDate.value;
  if (!value) {
    bkSlotsBox.innerHTML = '';
    bkSlotsHint.textContent = 'Seleccioná primero un día.';
    bkSlotsHint.classList.remove('is-error');
    bkTime.value = '';
    return;
  }
  const selected = new Date(value + 'T00:00:00');
  const now = new Date();
  const isToday = toLocalIso(selected) === toLocalIso(now);

  bkSlotsBox.innerHTML = BOOKING_SLOTS.map((t) => {
    const [h, m] = t.split(':').map(Number);
    let disabled = false;
    if (isToday) {
      const slotDate = new Date(selected);
      slotDate.setHours(h, m, 0, 0);
      // pedir al menos 30 min de anticipación
      if (slotDate.getTime() - now.getTime() < 30 * 60 * 1000) disabled = true;
    }
    return `<button type="button" class="slot" data-time="${t}"${disabled ? ' disabled' : ''}>${t}</button>`;
  }).join('');

  bkTime.value = '';
  const available = bkSlotsBox.querySelectorAll('.slot:not(:disabled)').length;
  bkSlotsHint.classList.remove('is-error');
  bkSlotsHint.textContent = available
    ? `${available} horario${available === 1 ? '' : 's'} disponible${available === 1 ? '' : 's'} ese día.`
    : 'No hay horarios disponibles para ese día. Probá con otra fecha o llamanos para una urgencia.';
}

function validateBooking() {
  let ok = true;
  const required = ['name', 'phone', 'address', 'service', 'date'];
  required.forEach((field) => {
    const el = bkForm.elements[field];
    const wrap = el.closest('.field');
    if (!el.value.trim()) {
      wrap.classList.add('is-invalid');
      ok = false;
    } else {
      wrap.classList.remove('is-invalid');
    }
  });
  if (!bkTime.value) {
    bkSlotsHint.classList.add('is-error');
    bkSlotsHint.textContent = 'Elegí un horario disponible para continuar.';
    ok = false;
  }
  return ok;
}

function showConfirm({ name, date, time, service, address }) {
  const niceDate = date
    ? new Date(date + 'T00:00:00').toLocaleDateString('es-AR', {
        weekday: 'long', day: 'numeric', month: 'long',
      })
    : '';
  const serviceLabel = {
    apertura: 'Apertura de puerta',
    cambio: 'Cambio de cerradura',
    digital: 'Cerradura digital',
    copias: 'Copia de llaves',
    presupuesto: 'Presupuesto / consulta',
  }[service] || service;

  bkConfirmDetail.innerHTML = `
    <div><strong>Cliente:</strong> ${escapeHtml(name)}</div>
    <div><strong>Servicio:</strong> ${escapeHtml(serviceLabel)}</div>
    <div><strong>Día:</strong> ${escapeHtml(niceDate)}</div>
    <div><strong>Horario:</strong> ${escapeHtml(time)} hs</div>
    <div><strong>Dirección:</strong> ${escapeHtml(address)}</div>
  `;

  bkConfirm.classList.add('is-open');
  bkConfirm.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeConfirm() {
  bkConfirm.classList.remove('is-open');
  bkConfirm.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

// ============ NAV MOBILE (hamburguesa) ============
(function navMobile() {
  const burger = document.getElementById('navBurger');
  const links = document.getElementById('navLinks');
  if (!burger || !links) return;

  const setOpen = (open) => {
    burger.classList.toggle('is-open', open);
    links.classList.toggle('is-open', open);
    burger.setAttribute('aria-expanded', String(open));
  };

  burger.addEventListener('click', () => {
    setOpen(!links.classList.contains('is-open'));
  });

  // cerrar al elegir un link
  links.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') setOpen(false);
  });

  // cerrar con Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && links.classList.contains('is-open')) setOpen(false);
  });
})();

// ============ AÑO FOOTER ============
document.getElementById('year').textContent = new Date().getFullYear();
