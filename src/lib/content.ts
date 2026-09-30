import { getCollection, type CollectionEntry } from "astro:content";

export type Post = CollectionEntry<"blog">;
export type Work = CollectionEntry<"portfolio">;

// Published posts, newest first. Drafts show in `npm run dev` only.
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection("blog", (p) => import.meta.env.DEV || !p.data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getWork(): Promise<Work[]> {
  const work = await getCollection("portfolio", (p) => import.meta.env.DEV || !p.data.draft);
  return work.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

// Card label pulled from the case study's "Result" line
export const result = (w: Work) =>
  w.data.information.find((i) => /result/i.test(i.label))?.value ?? w.data.description;
export const info = (w: Work, key: string) =>
  w.data.information.find((i) => new RegExp(key, "i").test(i.label))?.value ?? "";

// Summary for cards and meta tags: description, else meta description, else first paragraph
export function summary(post: Post): string {
  if (post.data.description) return post.data.description;
  if (post.data.metaDescription) return post.data.metaDescription;
  const para = (post.body ?? "").split(/\n\s*\n/).find((p) => /^[A-Za-z"“‘']/.test(p.trim())) ?? "";
  const text = para.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/[*_`]/g, "").trim();
  return text.length > 160 ? text.slice(0, 157).replace(/\s+\S*$/, "") + "…" : text;
}
