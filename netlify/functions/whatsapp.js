/**
 * Netlify Function: WhatsApp link
 *
 * /whatsapp/ redirects here (public/_redirects), and this sends the visitor
 * on to WhatsApp. The number lives only in the WHATSAPP_NUMBER environment
 * variable, so it never appears in the site's HTML for scrapers to collect.
 *
 * WHATSAPP_NUMBER can be written as 07700 900123 or +44 7700 900123. Until it
 * is set this answers 404 and the links are not shown.
 */

const MESSAGE = "Hi Steve, I found you on your website and wanted to ask about ";

export async function handler() {
  // A UK number typed as 07... becomes 447...
  const number = (process.env.WHATSAPP_NUMBER || '').replace(/\D/g, '').replace(/^0/, '44');

  if (!number) {
    return { statusCode: 404, body: 'Not found' };
  }

  return {
    statusCode: 302,
    headers: {
      Location: `https://wa.me/${number}?text=${encodeURIComponent(MESSAGE)}`,
      'Cache-Control': 'no-store',
      'X-Robots-Tag': 'noindex, nofollow',
    },
    body: '',
  };
}
