import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();

  const plan = formData.get('plan') as string;
  const nombre = formData.get('nombre') as string;
  const email = formData.get('email') as string;
  const telefono = formData.get('telefono') as string;
  const negocio = formData.get('negocio') as string;
  const descripcion = formData.get('descripcion') as string;
  const inspi1 = formData.get('inspi1') as string;
  const inspi2 = formData.get('inspi2') as string;
  const inspi3 = formData.get('inspi3') as string;
  const notas = formData.get('notas') as string;

  // Validación básica server-side
  if (!plan || !nombre || !email || !telefono || !negocio || !descripcion) {
    return new Response(JSON.stringify({ error: 'Faltan campos obligatorios' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const planLabels: Record<string, string> = {
    starter: 'Starter — 29€/mes',
    pro: 'Pro — 49€/mes',
    business: 'Business — 79€/mes',
  };

  const resend = new Resend(import.meta.env.RESEND_API_KEY);

  const { error } = await resend.emails.send({
    from: import.meta.env.EMAIL_FROM ?? 'WebRápida <noreply@webrapida.es>',
    to: [import.meta.env.EMAIL_TO ?? 'hola@webrapida.es'],
    replyTo: email,
    subject: `Nueva solicitud: ${planLabels[plan] ?? plan} — ${negocio}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1a1a2e">
        <div style="background:linear-gradient(135deg,#4f8ef7,#7c3aed);padding:24px 32px;border-radius:12px 12px 0 0">
          <h1 style="margin:0;color:#fff;font-size:1.4rem">⚡ Nueva solicitud de web</h1>
          <p style="margin:4px 0 0;color:rgba(255,255,255,0.8);font-size:0.9rem">${planLabels[plan] ?? plan}</p>
        </div>
        <div style="background:#f8fafc;padding:32px;border-radius:0 0 12px 12px;border:1px solid #e2e8f0;border-top:none">
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:10px 0;border-bottom:1px solid #e2e8f0;width:40%;color:#64748b;font-size:0.875rem">Nombre</td><td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-weight:600">${nombre}</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #e2e8f0;color:#64748b;font-size:0.875rem">Email</td><td style="padding:10px 0;border-bottom:1px solid #e2e8f0"><a href="mailto:${email}" style="color:#4f8ef7">${email}</a></td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #e2e8f0;color:#64748b;font-size:0.875rem">Teléfono</td><td style="padding:10px 0;border-bottom:1px solid #e2e8f0">${telefono}</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #e2e8f0;color:#64748b;font-size:0.875rem">Negocio</td><td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-weight:600">${negocio}</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #e2e8f0;color:#64748b;font-size:0.875rem">Plan</td><td style="padding:10px 0;border-bottom:1px solid #e2e8f0"><span style="background:#4f8ef7;color:#fff;padding:3px 10px;border-radius:100px;font-size:0.8rem;font-weight:700">${planLabels[plan] ?? plan}</span></td></tr>
          </table>
          <h3 style="margin:24px 0 8px;font-size:0.9rem;color:#64748b;text-transform:uppercase;letter-spacing:0.05em">Descripción del negocio</h3>
          <p style="margin:0;background:#fff;padding:16px;border-radius:8px;border:1px solid #e2e8f0;line-height:1.6">${descripcion}</p>
          <h3 style="margin:24px 0 8px;font-size:0.9rem;color:#64748b;text-transform:uppercase;letter-spacing:0.05em">Webs de inspiración</h3>
          <div style="background:#fff;padding:16px;border-radius:8px;border:1px solid #e2e8f0">
            <p style="margin:4px 0"><a href="${inspi1}" style="color:#4f8ef7">1. ${inspi1}</a></p>
            <p style="margin:4px 0"><a href="${inspi2}" style="color:#4f8ef7">2. ${inspi2}</a></p>
            <p style="margin:4px 0"><a href="${inspi3}" style="color:#4f8ef7">3. ${inspi3}</a></p>
          </div>
          ${notas ? `<h3 style="margin:24px 0 8px;font-size:0.9rem;color:#64748b;text-transform:uppercase;letter-spacing:0.05em">Notas adicionales</h3><p style="margin:0;background:#fff;padding:16px;border-radius:8px;border:1px solid #e2e8f0;line-height:1.6">${notas}</p>` : ''}
        </div>
      </div>
    `,
  });

  if (error) {
    console.error('Resend error:', error);
    return new Response(JSON.stringify({ error: 'Error al enviar el email' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
