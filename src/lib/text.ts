const escape = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

// "Hand the worry *over*." → words in asterisks become accent italics.
export function accentify(s: string): string {
  return escape(s).replace(/\*([^*]+)\*/g, '<em class="accent-italic">$1</em>');
}

// Plain version for meta tags and alt text.
export const plain = (s: string) => s.replace(/\*/g, "");

export function formatDate(d: Date): string {
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

export function readingTime(body: string | undefined): number {
  const words = (body ?? "")
    .replace(/<[^>]+>/g, " ")
    .replace(/[#>*_`\-[\]()]/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 230));
}
