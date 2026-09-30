// The media library. Every image lives once in src/assets/media/ and is
// described once in src/data/media.yaml. Everything else refers to it by name.
import type { ImageMetadata } from "astro";
import { media, type MediaEntry } from "./data";

const files = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/media/*.{jpg,jpeg,png,webp,avif,gif}",
  { eager: true },
);
const byFile = new Map(
  Object.entries(files).map(([p, mod]) => [p.split("/").pop()!, mod.default]),
);

export interface ResolvedMedia extends MediaEntry {
  id: string;
  src: ImageMetadata;
}

export function hasMedia(id: string | undefined): boolean {
  return !!id && !!media[id] && byFile.has(media[id].file);
}

export function getMedia(id: string): ResolvedMedia {
  const entry = media[id];
  if (!entry) {
    throw new Error(`Image "${id}" is not in the media library. Add it to src/data/media.yaml.`);
  }
  const src = byFile.get(entry.file);
  if (!src) {
    throw new Error(
      `Image "${id}" points at src/assets/media/${entry.file}, which does not exist.` +
        (entry.unsplash ? " (It is an Unsplash image: the prebuild download may have failed.)" : ""),
    );
  }
  return { id, ...entry, src };
}
