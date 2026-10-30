/**
 * Netlify Function: WhatsApp link
 *
 * The number lives only in the WHATSAPP_NUMBER environment variable. It is
 * never in the HTML and never behind a plain link, so bots that scrape pages
 * or follow links can't collect it:
 *
 * - The site's WhatsApp links point at /contact/. A click in a browser runs
 *   src/scripts/site.ts, which POSTs here and only then opens WhatsApp.
 * - A GET (a bot or a pasted /whatsapp/ link) is sent to /contact/ instead.
 * - When TURNSTILE_SECRET_KEY is set, the POST must carry a Turnstile token,
 *   checked with the same rules as the forms.
 *
 * WHATSAPP_NUMBER can be written as 07700 900123 or +44 7700 900123. Until it
 * is set this answers 404 and the links are not shown.
 */

const MESSAGE = "Hi Steve, I found you on your website and wanted to ask about ";

// Only a missing or rejected token fails; if Cloudflare is down or the secret
// is wrong the click goes through, as the forms do.
async function passesTurnstile(token) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true;
  if (!token) return false;
  try {
    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: new URLSearchParams({ secret, response: token }),
      signal: AbortSignal.timeout(5000),
    });
    if (!res.ok) return true;
    const data = await res.json();
    if (data.success) return true;
    const codes = data['error-codes'] || [];
    if (codes.some((c) => ['missing-input-secret', 'invalid-input-secret', 'internal-error'].includes(c))) {
      console.error('Turnstile is misconfigured; WhatsApp click let through:', codes);
      return true;
    }
    return false;
  } catch (error) {
    console.error('Turnstile unreachable; WhatsApp click let through:', error);
    return true;
  }
}

export async function handler(event) {
  // A UK number typed as 07... becomes 447...
  const number = (process.env.WHATSAPP_NUMBER || '').replace(/\D/g, '').replace(/^0/, '44');
  const json = { 'Content-Type': 'application/json', 'Cache-Control': 'no-store', 'X-Robots-Tag': 'noindex, nofollow' };

  if (!number) {
    return { statusCode: 404, headers: json, body: JSON.stringify({ error: 'Not found' }) };
  }

  // Links and bots arrive as GET: send them to the contact page, never the number
  if (event.httpMethod !== 'POST') {
    return { statusCode: 302, headers: { Location: '/contact/', 'Cache-Control': 'no-store', 'X-Robots-Tag': 'noindex, nofollow' }, body: '' };
  }

  let token = '';
  try {
    token = JSON.parse(event.body || '{}')['cf-turnstile-response'] || '';
  } catch {}

  if (!(await passesTurnstile(token))) {
    return { statusCode: 403, headers: json, body: JSON.stringify({ error: 'Check failed' }) };
  }

  return {
    statusCode: 200,
    headers: json,
    body: JSON.stringify({ url: `https://wa.me/${number}?text=${encodeURIComponent(MESSAGE)}` }),
  };
}
