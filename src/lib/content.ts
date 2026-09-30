// Content queries and the related-content rules.
import { getCollection, type CollectionEntry } from "astro:content";

export type Post = CollectionEntry<"blog">;
export type Work = CollectionEntry<"work">;

const isLive = (draft: boolean) => import.meta.env.DEV || !draft;

export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection("blog", (p) => isLive(p.data.draft));
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getWork(): Promise<Work[]> {
  const items = await getCollection("work", (w) => isLive(w.data.draft));
  return items.sort((a, b) => a.data.order - b.data.order || b.data.date.valueOf() - a.data.date.valueOf());
}

const shared = (a: string[], b: string[]) => a.filter((x) => b.includes(x)).length;

/**
 * Related posts for a post: same pillar first, then posts sharing an audience,
 * then the newest. For support posts, a different angle is preferred so readers
 * see the other strands of support rather than three posts on cost.
 */
export function relatedPosts(post: Post, all: Post[], limit = 3): Post[] {
  const score = (p: Post) => {
    let s = 0;
    if (p.data.pillar === post.data.pillar) s += 100;
    s += shared(p.data.audiences, post.data.audiences) * 10;
    if (post.data.pillar === "support" && p.data.supportAngle && p.data.supportAngle !== post.data.supportAngle) s += 5;
    return s;
  };
  return all
    .filter((p) => p.id !== post.id)
    .map((p) => ({ p, s: score(p) }))
    .sort((a, b) => b.s - a.s || b.p.data.date.valueOf() - a.p.data.date.valueOf())
    .slice(0, limit)
    .map((x) => x.p);
}

/** Posts in a pillar. For support, mix the angles so all three strands show. */
export function postsForPillar(pillar: string, all: Post[], limit = 3): Post[] {
  const inPillar = all.filter((p) => p.data.pillar === pillar);
  if (pillar !== "support") return inPillar.slice(0, limit);
  const picked: Post[] = [];
  const seen = new Set<string>();
  for (const p of inPillar) {
    const angle = p.data.supportAngle ?? "none";
    if (!seen.has(angle)) { picked.push(p); seen.add(angle); }
    if (picked.length === limit) return picked;
  }
  for (const p of inPillar) {
    if (!picked.includes(p)) picked.push(p);
    if (picked.length === limit) break;
  }
  return picked;
}

export function postsForAudience(audience: string, all: Post[], limit = 3): Post[] {
  return all.filter((p) => p.data.audiences.includes(audience)).slice(0, limit);
}

/** Case studies that match a pillar (and, when given, an audience first). */
export function workFor(all: Work[], opts: { pillar?: string; audience?: string }, limit = 3): Work[] {
  const score = (w: Work) =>
    (opts.pillar && w.data.pillars.includes(opts.pillar as never) ? 10 : 0) +
    (opts.audience && w.data.audiences.includes(opts.audience as never) ? 20 : 0);
  return all
    .map((w) => ({ w, s: score(w) }))
    .filter((x) => x.s > 0)
    .sort((a, b) => b.s - a.s || a.w.data.order - b.w.data.order)
    .slice(0, limit)
    .map((x) => x.w);
}
export const POSTS_PER_PAGE = 13; // 1 featured + 12 in the grid
