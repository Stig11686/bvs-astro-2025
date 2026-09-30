import type { ImageMetadata } from "astro";

// Every image lives in src/assets/images/. Content refers to them as
// "/images/<folder>/<file>", e.g. "/images/blog/domain.jpg".
const images = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/images/**/*.{jpg,jpeg,png,webp,avif,gif,svg}",
  { eager: true },
);

export function getImage(path: string): ImageMetadata {
  const key = "/src/assets" + (path.startsWith("/") ? path : `/${path}`);
  const found = images[key];
  if (!found) {
    throw new Error(
      `Image not found: "${path}". Add the file to src/assets${path.startsWith("/") ? "" : "/"}${path}`,
    );
  }
  return found.default;
}
