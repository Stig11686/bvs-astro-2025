// Headlines use one emphasised phrase in claret italic.
// Write it as *phrase* (or <em>phrase</em>) and it becomes <span class="it">.
export function emph(text = ""): string {
  return text
    .replace(/<em[^>]*>(.*?)<\/em>/g, '<span class="it">$1</span>')
    .replace(/\*([^*]+)\*/g, '<span class="it">$1</span>');
}

// Split a headline into animated lines on " | ".
export const lines = (text = "") => text.split(/\s*\|\s*/).map(emph);

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
export const formatDate = (d: Date, month: "short" | "long" = "short") =>
  month === "long"
    ? d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" })
    : `${d.getUTCDate()} ${MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()}`;

export function readingTime(body = ""): string {
  const words = body.replace(/<[^>]+>|[#*_>`-]/g, " ").split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 220))} min read`;
}
