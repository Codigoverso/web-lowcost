/* ===== NAV SCROLL ===== */
const nav = document.getElementById('nav')!;
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

/* ===== BURGER MENU ===== */
const burger = document.getElementById('burger')!;
const navLinks = document.getElementById('nav-links')!;
burger.addEventListener('click', () => navLinks.classList.toggle('open'));
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
const rotatingEl = document.getElementById('rotating-text') as HTMLElement;
rotatingEl.style.transition = 'opacity 0.3s ease, transform 0.3s ease';

setInterval(() => {
  rotatingEl.style.opacity = '0';
  rotatingEl.style.transform = 'translateY(12px)';
  setTimeout(() => {
    phraseIdx = (phraseIdx + 1) % phrases.length;
    rotatingEl.textContent = phrases[phraseIdx];
    rotatingEl.style.opacity = '1';
    rotatingEl.style.transform = 'translateY(0)';
  }, 300);
}, 3000);

/* ===== COUNTER ANIMATION ===== */
function animateCounter(el: HTMLElement, target: number, duration = 1200) {
  const start = performance.now();
  const update = (now: number) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = String(Math.round(eased * target));
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

const statsEl = document.querySelector('.hero-stats');
if (statsEl) {
  new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.querySelectorAll<HTMLElement>('.stat-num').forEach(el => {
        animateCounter(el, parseInt(el.dataset.target ?? '0', 10));
      });
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.5 }).observe(statsEl);
}

/* ===== TERMINAL ANIMATION ===== */
const terminalLines = [
  { id: 't1', text: 'Analizando sector y competencia...' },
  { id: 't2', text: 'Procesando imágenes del cliente...' },
  { id: 't3', text: 'Aplicando estilo de inspiración...' },
  { id: 't4', text: 'Generando estructura HTML/CSS...' },
  { id: 't5', text: 'Web lista para revisión ✓' },
];

function typeText(el: HTMLElement, text: string, speed = 24): Promise<void> {
  return new Promise(resolve => {
    let i = 0;
    const type = () => {
      if (i < text.length) { el.textContent += text[i++]; setTimeout(type, speed + Math.random() * 18); }
      else resolve();
    };
    type();
  });
}

async function runTerminal() {
  for (const { id, text } of terminalLines) {
    const el = document.getElementById(id);
    if (el) { await typeText(el, text); await new Promise(r => setTimeout(r, 400)); }
  }
}

const terminal = document.querySelector('.ai-terminal');
if (terminal) {
  new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      runTerminal();
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.4 }).observe(terminal);
}

/* ===== SCROLL REVEAL ===== */
document.querySelectorAll('.reveal').forEach(el => {
  new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.1 }).observe(el);
});

/* ===== SELECT PLAN FROM PRICING CARDS ===== */
(window as any).selectPlan = (plan: string) => {
  document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' });
  setTimeout(() => {
    const option = document.querySelector<HTMLElement>(`.plan-option[data-value="${plan}"]`);
    if (option) {
      document.querySelectorAll('.plan-option').forEach(o => o.classList.remove('selected'));
      option.classList.add('selected');
      (option.querySelector('input') as HTMLInputElement).checked = true;
    }
  }, 600);
};

/* ===== PLAN OPTION CLICK ===== */
document.querySelectorAll('.plan-option').forEach(option => {
  option.addEventListener('click', () => {
    document.querySelectorAll('.plan-option').forEach(o => o.classList.remove('selected'));
    option.classList.add('selected');
    (option.querySelector('input') as HTMLInputElement).checked = true;
    document.getElementById('error-plan')?.classList.add('hidden');
  });
});

/* ===== MULTI-STEP FORM ===== */
function showStep(step: number) {
  document.querySelectorAll('.form-step').forEach(s => s.classList.remove('active'));
  document.querySelector<HTMLElement>(`.form-step[data-step="${step}"]`)?.classList.add('active');
  document.querySelectorAll('.progress-step').forEach((ps, idx) => {
    const n = idx + 1;
    ps.classList.remove('active', 'done');
    if (n < step) ps.classList.add('done');
    else if (n === step) ps.classList.add('active');
  });
  document.querySelector('.form-card')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function validateStep(step: number): boolean {
  if (step === 1) {
    const ok = !!document.querySelector('input[name="plan"]:checked');
    document.getElementById('error-plan')?.classList.toggle('hidden', ok);
    return ok;
  }
  if (step === 2) {
    let valid = true;
    ['nombre', 'email', 'telefono', 'negocio', 'descripcion'].forEach(id => {
      const el = document.getElementById(id) as HTMLInputElement | null;
      if (!el) return;
      el.classList.remove('error');
      if (!el.value.trim()) { el.classList.add('error'); valid = false; }
    });
    const email = document.getElementById('email') as HTMLInputElement;
    if (email?.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      email.classList.add('error'); valid = false;
    }
    return valid;
  }
  if (step === 3) {
    let valid = true;
    ['inspi1', 'inspi2', 'inspi3'].forEach(id => {
      const el = document.getElementById(id) as HTMLInputElement | null;
      if (!el) return;
      el.classList.remove('error');
      if (!el.value.trim()) { el.classList.add('error'); valid = false; }
    });
    const acepto = document.getElementById('acepto') as HTMLInputElement;
    if (!acepto.checked) {
      document.getElementById('error-acepto')?.classList.remove('hidden');
      valid = false;
    } else {
      document.getElementById('error-acepto')?.classList.add('hidden');
    }
    return valid;
  }
  return true;
}

document.getElementById('next-1')?.addEventListener('click', () => { if (validateStep(1)) showStep(2); });
document.getElementById('next-2')?.addEventListener('click', () => { if (validateStep(2)) showStep(3); });
document.getElementById('back-2')?.addEventListener('click', () => showStep(1));
document.getElementById('back-3')?.addEventListener('click', () => showStep(2));

/* ===== FILE UPLOAD ===== */
const uploadArea = document.getElementById('upload-area');
const fileInput = document.getElementById('imagenes') as HTMLInputElement | null;
const previewContainer = document.getElementById('upload-preview');

if (uploadArea && fileInput) {
  ['dragenter', 'dragover'].forEach(evt => {
    uploadArea.addEventListener(evt, e => { e.preventDefault(); uploadArea.classList.add('drag-over'); });
  });
  ['dragleave', 'drop'].forEach(evt => {
    uploadArea.addEventListener(evt, e => { e.preventDefault(); uploadArea.classList.remove('drag-over'); });
  });
  uploadArea.addEventListener('drop', (e: DragEvent) => {
    if (e.dataTransfer?.files) handleFiles(e.dataTransfer.files);
  });
  fileInput.addEventListener('change', () => { if (fileInput.files) handleFiles(fileInput.files); });
}

function handleFiles(files: FileList) {
  if (!previewContainer) return;
  previewContainer.innerHTML = '';
  Array.from(files).slice(0, 12).forEach(file => {
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = e => {
      const img = document.createElement('img');
      img.src = e.target?.result as string;
      img.className = 'preview-thumb';
      img.alt = file.name;
      previewContainer.appendChild(img);
    };
    reader.readAsDataURL(file);
  });
  if (files.length > 0) {
    (document.querySelector('.upload-placeholder') as HTMLElement).style.display = 'none';
  }
}

/* ===== FORM SUBMIT ===== */
document.getElementById('main-form')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (!validateStep(3)) return;

  const form = e.target as HTMLFormElement;
  const btn = document.getElementById('btn-submit') as HTMLButtonElement;
  btn.querySelector('.btn-submit-text')?.classList.add('hidden');
  btn.querySelector('.btn-submit-loading')?.classList.remove('hidden');
  btn.disabled = true;

  try {
    const formData = new FormData(form);
    const res = await fetch('/api/contacto', { method: 'POST', body: formData });
    if (!res.ok) throw new Error('error');
    document.querySelector('.form-step.active')?.classList.remove('active');
    document.getElementById('form-success')?.classList.remove('hidden');
    document.getElementById('form-progress')?.remove();
    document.getElementById('form-success')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  } catch {
    btn.querySelector('.btn-submit-text')?.classList.remove('hidden');
    btn.querySelector('.btn-submit-loading')?.classList.add('hidden');
    btn.disabled = false;
    alert('Hubo un error al enviar. Por favor inténtalo de nuevo o escríbenos a hola@webrapida.es');
  }
});
