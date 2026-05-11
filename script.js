/* ===== NAV SCROLL ===== */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

/* ===== BURGER MENU ===== */
const burger = document.getElementById('burger');
const navLinks = document.querySelector('.nav-links');
burger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

/* ===== HERO ROTATING TEXT ===== */
const phrases = [
  'lista en 72 horas',
  'diseñada por IA',
  'desde 29€/mes',
  'sin complicaciones',
  'que convierte visitas',
];
let phraseIdx = 0;
const rotatingEl = document.getElementById('rotating-text');

function rotateText() {
  rotatingEl.style.opacity = '0';
  rotatingEl.style.transform = 'translateY(12px)';
  setTimeout(() => {
    phraseIdx = (phraseIdx + 1) % phrases.length;
    rotatingEl.textContent = phrases[phraseIdx];
    rotatingEl.style.opacity = '1';
    rotatingEl.style.transform = 'translateY(0)';
  }, 300);
}

rotatingEl.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
setInterval(rotateText, 3000);

/* ===== COUNTER ANIMATION ===== */
function animateCounter(el, target, duration = 1200) {
  const start = performance.now();
  const update = (now) => {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target);
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.querySelectorAll('.stat-num').forEach(el => {
      const target = parseInt(el.dataset.target, 10);
      animateCounter(el, target);
    });
    statsObserver.unobserve(entry.target);
  });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) statsObserver.observe(heroStats);

/* ===== TERMINAL ANIMATION ===== */
const lines = [
  { id: 't1', text: 'Analizando sector y competencia...' },
  { id: 't2', text: 'Procesando imágenes del cliente...' },
  { id: 't3', text: 'Aplicando estilo de inspiración...' },
  { id: 't4', text: 'Generando estructura HTML/CSS...' },
  { id: 't5', text: 'Web lista para revisión ✓' },
];

function typeText(el, text, speed = 28) {
  return new Promise(resolve => {
    let i = 0;
    const type = () => {
      if (i < text.length) {
        el.textContent += text[i++];
        setTimeout(type, speed + Math.random() * 20);
      } else {
        resolve();
      }
    };
    type();
  });
}

async function runTerminal() {
  for (let i = 0; i < lines.length; i++) {
    const { id, text } = lines[i];
    const el = document.getElementById(id);
    if (!el) continue;
    await typeText(el, text, 22);
    await new Promise(r => setTimeout(r, 400));
  }
}

const terminalObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    runTerminal();
    terminalObserver.unobserve(entry.target);
  });
}, { threshold: 0.4 });

const terminal = document.querySelector('.ai-terminal');
if (terminal) terminalObserver.observe(terminal);

/* ===== SCROLL REVEAL ===== */
const revealEls = document.querySelectorAll(
  '.plan-card, .step, .ai-features li, .ai-text, .ai-visual, .section-header'
);
revealEls.forEach(el => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => revealObserver.observe(el));

/* ===== PLAN CARDS SELECT FROM PRICING ===== */
function selectPlan(plan) {
  document.getElementById('formulario').scrollIntoView({ behavior: 'smooth' });
  setTimeout(() => {
    const option = document.querySelector(`.plan-option[data-value="${plan}"]`);
    if (option) {
      option.querySelector('input').checked = true;
      document.querySelectorAll('.plan-option').forEach(o => o.classList.remove('selected'));
      option.classList.add('selected');
    }
  }, 600);
}

/* ===== PLAN OPTION CLICK ===== */
document.querySelectorAll('.plan-option').forEach(option => {
  option.addEventListener('click', () => {
    document.querySelectorAll('.plan-option').forEach(o => o.classList.remove('selected'));
    option.classList.add('selected');
    option.querySelector('input').checked = true;
    const errorEl = document.getElementById('error-plan');
    if (errorEl) errorEl.classList.add('hidden');
  });
});

/* ===== MULTI-STEP FORM ===== */
let currentStep = 1;
const totalSteps = 3;

function showStep(step) {
  document.querySelectorAll('.form-step').forEach(s => s.classList.remove('active'));
  const el = document.querySelector(`.form-step[data-step="${step}"]`);
  if (el) el.classList.add('active');

  document.querySelectorAll('.progress-step').forEach((ps, idx) => {
    const n = idx + 1;
    ps.classList.remove('active', 'done');
    if (n < step) ps.classList.add('done');
    else if (n === step) ps.classList.add('active');
  });

  document.getElementById('form-progress').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function validateStep(step) {
  if (step === 1) {
    const selected = document.querySelector('input[name="plan"]:checked');
    if (!selected) {
      document.getElementById('error-plan').classList.remove('hidden');
      return false;
    }
    return true;
  }
  if (step === 2) {
    const fields = ['nombre', 'email', 'telefono', 'negocio', 'descripcion'];
    let valid = true;
    fields.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      el.classList.remove('error');
      if (!el.value.trim()) {
        el.classList.add('error');
        valid = false;
      }
    });
    const email = document.getElementById('email');
    if (email && email.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      email.classList.add('error');
      valid = false;
    }
    return valid;
  }
  if (step === 3) {
    let valid = true;
    ['inspi1', 'inspi2', 'inspi3'].forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      el.classList.remove('error');
      if (!el.value.trim()) { el.classList.add('error'); valid = false; }
    });
    const acepto = document.getElementById('acepto');
    if (!acepto.checked) {
      document.getElementById('error-acepto').classList.remove('hidden');
      valid = false;
    } else {
      document.getElementById('error-acepto').classList.add('hidden');
    }
    return valid;
  }
  return true;
}

function nextStep(current) {
  if (!validateStep(current)) return;
  currentStep = current + 1;
  showStep(currentStep);
  document.querySelector('.form-card').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function prevStep(current) {
  currentStep = current - 1;
  showStep(currentStep);
  document.querySelector('.form-card').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ===== FILE UPLOAD ===== */
const uploadArea = document.getElementById('upload-area');
const fileInput = document.getElementById('imagenes');
const previewContainer = document.getElementById('upload-preview');

if (uploadArea && fileInput) {
  ['dragenter', 'dragover'].forEach(evt => {
    uploadArea.addEventListener(evt, e => {
      e.preventDefault();
      uploadArea.classList.add('drag-over');
    });
  });

  ['dragleave', 'drop'].forEach(evt => {
    uploadArea.addEventListener(evt, e => {
      e.preventDefault();
      uploadArea.classList.remove('drag-over');
    });
  });

  uploadArea.addEventListener('drop', e => {
    const files = e.dataTransfer?.files;
    if (files) handleFiles(files);
  });

  fileInput.addEventListener('change', () => handleFiles(fileInput.files));
}

function handleFiles(files) {
  previewContainer.innerHTML = '';
  Array.from(files).slice(0, 12).forEach(file => {
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = e => {
      const img = document.createElement('img');
      img.src = e.target.result;
      img.className = 'preview-thumb';
      img.alt = file.name;
      previewContainer.appendChild(img);
    };
    reader.readAsDataURL(file);
  });
  if (files.length > 0) {
    document.querySelector('.upload-placeholder').style.display = 'none';
  }
}

/* ===== FORM SUBMIT ===== */
document.getElementById('main-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  if (!validateStep(3)) return;

  const btn = document.getElementById('btn-submit');
  btn.querySelector('.btn-submit-text').classList.add('hidden');
  btn.querySelector('.btn-submit-loading').classList.remove('hidden');
  btn.disabled = true;

  // Simulate async submit (replace with real fetch to your backend/formspree)
  await new Promise(r => setTimeout(r, 1800));

  document.getElementById('main-form').querySelector('.form-step.active').style.display = 'none';
  document.getElementById('form-success').classList.remove('hidden');
  document.getElementById('form-progress').style.display = 'none';
  document.getElementById('form-success').scrollIntoView({ behavior: 'smooth', block: 'center' });
});
