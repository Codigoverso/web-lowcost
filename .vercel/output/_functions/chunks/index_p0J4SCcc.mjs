import { c as createComponent } from './astro-component_ANUH2K9A.mjs';
import 'piccolore';
import { n as createRenderInstruction, h as addAttribute, o as renderHead, p as renderSlot, r as renderTemplate, m as maybeRenderHead, q as renderComponent, v as Fragment } from './entrypoint_Bav4QZeC.mjs';
import 'clsx';

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

const $$Base = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Base;
  const {
    title = "DevWebs — Tu web profesional desde 29€/mes",
    description = "Webs profesionales creadas con IA en 72 horas. Sin complicaciones, sin contratos largos. Elige tu plan y empieza hoy."
  } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title><meta name="description"${addAttribute(description, "content")}><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="preconnect" href="https://fonts.googleapis.com"><link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/home/user/web-lowcost/src/layouts/Base.astro", void 0);

const $$Nav = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="nav" id="nav"> <div class="nav-inner"> <a href="#" class="logo"> <span class="logo-icon">⚡</span> <span>Dev<strong>Webs</strong></span> </a> <div class="nav-links" id="nav-links"> <a href="#planes">Planes</a> <a href="#proceso">Cómo funciona</a> <a href="#formulario" class="btn-nav">Empezar ahora</a> </div> <button class="burger" id="burger" aria-label="Menú"> <span></span><span></span><span></span> </button> </div> </nav>`;
}, "/home/user/web-lowcost/src/components/Nav.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="hero"> <div class="hero-bg"> <div class="orb orb-1"></div> <div class="orb orb-2"></div> <div class="grid-lines"></div> </div> <div class="hero-inner"> <div class="ai-badge"> <span class="ai-dot"></span>
Diseñado con Inteligencia Artificial
</div> <h1 class="hero-title">
Tu web profesional<br> <span class="gradient-text" id="rotating-text">lista en 72 horas</span> </h1> <p class="hero-sub">
Sin reuniones interminables. Sin precios ocultos. Solo tu web funcionando,<br class="br-hide">
atrayendo clientes desde el primer día.
</p> <div class="hero-ctas"> <a href="#formulario" class="btn-primary">
Solicitar mi web
<svg width="16" height="16" viewBox="0 0 16 16" fill="none"> <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </svg> </a> <a href="#planes" class="btn-ghost">Ver planes y precios</a> </div> <div class="hero-stats"> <div class="stat"> <span class="stat-num" data-target="72">0</span> <span class="stat-unit">h</span> <span class="stat-label">de entrega</span> </div> <div class="stat-divider"></div> <div class="stat"> <span class="stat-num" data-target="100">0</span> <span class="stat-unit">%</span> <span class="stat-label">personalizada</span> </div> <div class="stat-divider"></div> <div class="stat"> <span class="stat-num" data-target="0">0</span> <span class="stat-unit">€</span> <span class="stat-label">de alta</span> </div> </div> </div> <div class="hero-scroll"> <div class="scroll-indicator"></div> </div> </section>`;
}, "/home/user/web-lowcost/src/components/Hero.astro", void 0);

const $$AiSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="ai-section"> <div class="container"> <div class="ai-content"> <div class="ai-visual reveal"> <div class="ai-terminal"> <div class="terminal-bar"> <span class="dot red"></span> <span class="dot yellow"></span> <span class="dot green"></span> <span class="terminal-title">ia.devwebs.es</span> </div> <div class="terminal-body"> <p class="t-line"><span class="t-prompt">›</span> <span class="t-text" id="t1"></span></p> <p class="t-line"><span class="t-prompt">›</span> <span class="t-text" id="t2"></span></p> <p class="t-line"><span class="t-prompt">›</span> <span class="t-text" id="t3"></span></p> <p class="t-line"><span class="t-prompt">›</span> <span class="t-text" id="t4"></span></p> <p class="t-line t-success"><span class="t-check">✓</span> <span id="t5"></span></p> </div> </div> </div> <div class="ai-text reveal"> <span class="section-label">IA al servicio de tu negocio</span> <h2>Hacemos el trabajo.<br>Tú te llevas los clientes.</h2> <p>Nuestra IA analiza tu sector, tu competencia y las páginas de inspiración que nos envías para generar una web única, optimizada y lista para convertir visitas en clientes.</p> <ul class="ai-features"> <li> <span class="feature-icon">🎨</span> <div> <strong>Diseño adaptado a tu marca</strong> <span>Usamos tus colores, tipografías e imágenes</span> </div> </li> <li> <span class="feature-icon">📱</span> <div> <strong>100% responsive</strong> <span>Perfecta en móvil, tablet y ordenador</span> </div> </li> <li> <span class="feature-icon">⚡</span> <div> <strong>Velocidad extrema</strong> <span>Carga en menos de 2 segundos</span> </div> </li> <li> <span class="feature-icon">🔍</span> <div> <strong>SEO incluido</strong> <span>Optimizada para aparecer en Google</span> </div> </li> </ul> </div> </div> </div> </section>`;
}, "/home/user/web-lowcost/src/components/AiSection.astro", void 0);

const $$Planes = createComponent(($$result, $$props, $$slots) => {
  const planes = [
    {
      id: "starter",
      icon: "🚀",
      name: "Starter",
      desc: "Para empezar a tener presencia online",
      price: 29,
      featured: false,
      features: [
        { text: "Landing page de una sola página", ok: true },
        { text: "Diseño con tus imágenes y colores", ok: true },
        { text: "Optimizada para móvil", ok: true },
        { text: "Dominio (.es o .com, facturado aparte)", ok: true },
        { text: "Hosting y SSL incluidos", ok: true },
        { text: "Entrega en 72 horas", ok: true },
        { text: "Formulario de contacto", ok: false },
        { text: "Secciones adicionales", ok: false }
      ]
    },
    {
      id: "pro",
      icon: "⭐",
      name: "Pro",
      desc: "Para captar clientes desde el primer día",
      price: 49,
      featured: true,
      features: [
        { text: "Landing page de una sola página", ok: true },
        { text: "Diseño con tus imágenes y colores", ok: true },
        { text: "Optimizada para móvil", ok: true },
        { text: "Dominio (.es o .com, facturado aparte)", ok: true },
        { text: "Hosting y SSL incluidos", ok: true },
        { text: "Entrega en 72 horas", ok: true },
        { text: "Formulario de contacto", ok: true, bold: true },
        { text: "Secciones adicionales", ok: false }
      ]
    },
    {
      id: "business",
      icon: "🏆",
      name: "Business",
      desc: "La web completa que tu negocio merece",
      price: 79,
      featured: false,
      features: [
        { text: "5 secciones a tu medida", ok: true, bold: true },
        { text: "Diseño con tus imágenes y colores", ok: true },
        { text: "Optimizada para móvil", ok: true },
        { text: "Dominio (.es o .com, facturado aparte)", ok: true },
        { text: "Hosting y SSL incluidos", ok: true },
        { text: "Entrega en 72 horas", ok: true },
        { text: "Formulario de contacto", ok: true, bold: true },
        { text: "Integración con Google Maps", ok: true, bold: true }
      ]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="planes" id="planes"> <div class="container"> <div class="section-header reveal"> <span class="section-label">Sin sorpresas</span> <h2>Elige tu plan</h2> <p>Alta gratuita. Sin permanencia. Cancela cuando quieras.</p> </div> <div class="planes-grid"> ${planes.map((plan) => renderTemplate`<div${addAttribute(`plan-card reveal${plan.featured ? " featured" : ""}`, "class")}${addAttribute(plan.id, "data-plan")}> ${plan.featured && renderTemplate`<div class="plan-badge">Más popular</div>`} <div class="plan-header"> <div class="plan-icon">${plan.icon}</div> <div class="plan-name">${plan.name}</div> <div class="plan-desc">${plan.desc}</div> </div> <div class="plan-price"> <span class="price-currency">€</span> <span class="price-num">${plan.price}</span> <span class="price-period">/mes</span> </div> <div class="plan-alta">Alta gratuita · sin permanencia</div> <ul class="plan-features"> ${plan.features.map((f) => renderTemplate`<li${addAttribute(!f.ok ? "disabled" : "", "class")}> <span${addAttribute(f.ok ? "check" : "cross", "class")}>${f.ok ? "✓" : "✗"}</span> ${f.bold ? renderTemplate`<strong>${f.text}</strong>` : f.text} </li>`)} </ul> <button${addAttribute(`btn-plan${plan.featured ? " btn-plan-featured" : ""}`, "class")}${addAttribute(`selectPlan('${plan.id}')`, "onclick")}>
Quiero este plan
</button> </div>`)} </div> <p class="planes-note">
¿Tienes dudas? Escríbenos a${" "} <a href="mailto:hola@devtools.es">hola@devtools.es</a>${" "}
y te aconsejamos sin compromiso.
</p> </div> </section>`;
}, "/home/user/web-lowcost/src/components/Planes.astro", void 0);

const $$Proceso = createComponent(($$result, $$props, $$slots) => {
  const steps = [
    {
      num: "01",
      title: "Rellena el formulario",
      desc: "Elige tu plan, cuéntanos tu negocio, súbenos tus imágenes y comparte 3 webs que te gusten como inspiración. Listo."
    },
    {
      num: "02",
      title: "La IA trabaja por ti",
      desc: "Nuestra inteligencia artificial diseña tu web basándose en tu sector, tu estilo y tu competencia. Tú no tienes que hacer nada."
    },
    {
      num: "03",
      title: "Tu web, en 72 horas",
      desc: "Recibes el enlace de tu web lista para funcionar. Revisamos juntos, ajustamos lo que necesites y la publicamos."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="proceso" id="proceso"> <div class="container"> <div class="section-header reveal"> <span class="section-label">Sin complicaciones</span> <h2>Cómo funciona</h2> <p>Tres pasos. Nada más.</p> </div> <div class="proceso-steps"> ${steps.map((step, i) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <div class="step reveal"> <div class="step-num">${step.num}</div> <div class="step-content"> <h3>${step.title}</h3> <p>${step.desc}</p> </div> </div> ${i < steps.length - 1 && renderTemplate`<div class="step-connector"> <div class="connector-line"></div> </div>`}` })}`)} </div> </div> </section>`;
}, "/home/user/web-lowcost/src/components/Proceso.astro", void 0);

const $$Formulario = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="formulario-section" id="formulario"> <div class="container"> <div class="section-header reveal"> <span class="section-label">Empieza hoy</span> <h2>Solicita tu web ahora</h2> <p>Rellena el formulario y te contactamos en menos de 24 horas.</p> </div> <form class="form-card" id="main-form" novalidate> <!-- PASO 1: PLAN --> <div class="form-step active" data-step="1"> <h3 class="step-title"> <span class="step-badge">1</span>
Elige tu plan
</h3> <div class="plan-selector"> <label class="plan-option" data-value="starter"> <input type="radio" name="plan" value="starter" required> <div class="plan-option-inner"> <span class="po-icon">🚀</span> <div class="po-info"> <strong>Starter</strong> <span>Landing page</span> </div> <span class="po-price">29€/mes</span> </div> </label> <label class="plan-option" data-value="pro"> <input type="radio" name="plan" value="pro"> <div class="plan-option-inner"> <span class="po-icon">⭐</span> <div class="po-info"> <strong>Pro</strong> <span>Landing + contacto</span> </div> <span class="po-price">49€/mes</span> </div> </label> <label class="plan-option" data-value="business"> <input type="radio" name="plan" value="business"> <div class="plan-option-inner"> <span class="po-icon">🏆</span> <div class="po-info"> <strong>Business</strong> <span>5 secciones + contacto</span> </div> <span class="po-price">79€/mes</span> </div> </label> </div> <div class="form-error hidden" id="error-plan">Selecciona un plan para continuar</div> <div class="form-nav"> <button type="button" class="btn-next" id="next-1">Siguiente</button> </div> </div> <!-- PASO 2: DATOS --> <div class="form-step" data-step="2"> <h3 class="step-title"> <span class="step-badge">2</span>
Tus datos de contacto
</h3> <div class="form-row"> <div class="form-group"> <label for="nombre">Nombre y apellidos *</label> <input type="text" id="nombre" name="nombre" placeholder="Ana García" required> </div> <div class="form-group"> <label for="email">Email *</label> <input type="email" id="email" name="email" placeholder="ana@tunegocio.com" required> </div> </div> <div class="form-row"> <div class="form-group"> <label for="telefono">Teléfono *</label> <input type="tel" id="telefono" name="telefono" placeholder="+34 600 000 000" required> </div> <div class="form-group"> <label for="negocio">Nombre de tu negocio *</label> <input type="text" id="negocio" name="negocio" placeholder="Clínica García" required> </div> </div> <div class="form-group full"> <label for="descripcion">¿A qué te dedicas? Cuéntanos algo de tu negocio *</label> <textarea id="descripcion" name="descripcion" rows="4" placeholder="Ej: Soy fisioterapeuta en Valencia, atiendo a deportistas y particulares. Quiero una web para que los clientes puedan conocer mis servicios y contactarme fácilmente." required></textarea> </div> <div class="form-nav"> <button type="button" class="btn-back" id="back-2">← Volver</button> <button type="button" class="btn-next" id="next-2">Siguiente</button> </div> </div> <!-- PASO 3: INSPIRACIÓN --> <div class="form-step" data-step="3"> <h3 class="step-title"> <span class="step-badge">3</span>
Inspiración y material
</h3> <p class="step-desc">Esto es lo que nuestra IA necesita para crear una web que te encante.</p> <div class="form-group"> <label>Sube tus imágenes (logo, fotos del negocio, equipo...)</label> <div class="upload-area" id="upload-area"> <input type="file" id="imagenes" name="imagenes" multiple accept="image/*"> <div class="upload-placeholder"> <svg width="40" height="40" viewBox="0 0 40 40" fill="none"> <path d="M20 8v16M12 16l8-8 8 8" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M8 30h24" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"></path> </svg> <strong>Arrastra tus imágenes aquí</strong> <span>o haz clic para seleccionarlas</span> <span class="upload-note">JPG, PNG, WEBP hasta 10MB cada una</span> </div> <div class="upload-preview" id="upload-preview"></div> </div> </div> <div class="form-group"> <label>3 webs que te gusten como inspiración *</label> <p class="field-hint">No tienen que ser de tu sector. Comparte webs cuyo diseño o estilo te inspire.</p> <div class="inspiracion-inputs"> <div class="inspi-input"> <span class="inspi-num">1</span> <input type="url" name="inspi1" id="inspi1" placeholder="https://ejemplo.com" required> </div> <div class="inspi-input"> <span class="inspi-num">2</span> <input type="url" name="inspi2" id="inspi2" placeholder="https://ejemplo2.com" required> </div> <div class="inspi-input"> <span class="inspi-num">3</span> <input type="url" name="inspi3" id="inspi3" placeholder="https://ejemplo3.com" required> </div> </div> </div> <div class="form-group"> <label for="notas">¿Algo más que debamos saber?</label> <textarea id="notas" name="notas" rows="3" placeholder="Colores favoritos, cosas que no quieres, referencias concretas..."></textarea> </div> <div class="form-check"> <label class="checkbox-label"> <input type="checkbox" id="acepto" name="acepto" required> <span class="checkbox-custom"></span>
Acepto la <a href="/privacidad">política de privacidad</a> y el tratamiento de mis datos para gestionar mi solicitud.
</label> <div class="form-error hidden" id="error-acepto">Debes aceptar la política de privacidad</div> </div> <div class="form-nav"> <button type="button" class="btn-back" id="back-3">← Volver</button> <button type="submit" class="btn-submit" id="btn-submit"> <span class="btn-submit-text">Enviar solicitud</span> <span class="btn-submit-loading hidden">Enviando...</span> </button> </div> </div> <!-- SUCCESS --> <div class="form-success hidden" id="form-success"> <div class="success-icon">✓</div> <h3>¡Solicitud enviada!</h3> <p>Hemos recibido tu solicitud. Te contactaremos en menos de <strong>24 horas</strong> para ponernos en marcha.</p> <p class="success-sub">Revisa tu bandeja de entrada (y la carpeta de spam, por si acaso).</p> </div> </form> <!-- PROGRESS --> <div class="form-progress" id="form-progress"> <div class="progress-step active" data-pstep="1"> <div class="ps-dot"></div> <span>Plan</span> </div> <div class="progress-line"></div> <div class="progress-step" data-pstep="2"> <div class="ps-dot"></div> <span>Datos</span> </div> <div class="progress-line"></div> <div class="progress-step" data-pstep="3"> <div class="ps-dot"></div> <span>Inspiración</span> </div> </div> </div> </section>`;
}, "/home/user/web-lowcost/src/components/Formulario.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="footer"> <div class="container"> <div class="footer-inner"> <div class="footer-brand"> <a href="#" class="logo"> <span class="logo-icon">⚡</span> <span>Dev<strong>Webs</strong></span> </a> <p>Webs profesionales creadas con IA.<br>Tu negocio online, sin complicaciones.</p> </div> <div class="footer-links"> <div class="footer-col"> <strong>Producto</strong> <a href="#planes">Planes y precios</a> <a href="#proceso">Cómo funciona</a> <a href="#formulario">Solicitar web</a> </div> <div class="footer-col"> <strong>Legal</strong> <a href="/privacidad">Política de privacidad</a> <a href="/terminos">Términos y condiciones</a> <a href="/cookies">Cookies</a> </div> <div class="footer-col"> <strong>Contacto</strong> <a href="mailto:hola@devtools.es">hola@devtools.es</a> </div> </div> </div> <div class="footer-bottom"> <p>© ${(/* @__PURE__ */ new Date()).getFullYear()} DevWebs by devtools.es. Todos los derechos reservados.</p> </div> </div> </footer>`;
}, "/home/user/web-lowcost/src/components/Footer.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Base", $$Base, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Nav", $$Nav, {})} ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "AiSection", $$AiSection, {})} ${renderComponent($$result2, "Planes", $$Planes, {})} ${renderComponent($$result2, "Proceso", $$Proceso, {})} ${renderComponent($$result2, "Formulario", $$Formulario, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ${renderScript($$result2, "/home/user/web-lowcost/src/pages/index.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "/home/user/web-lowcost/src/pages/index.astro", void 0);

const $$file = "/home/user/web-lowcost/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
