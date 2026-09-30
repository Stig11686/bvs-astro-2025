// Markdown images written as ![alt](/images/blog/photo.jpg) point at
// src/assets/images/blog/photo.jpg. This rewrites them to a relative path so
// Astro optimises them (resized, compressed, responsive srcset).
// A missing image fails the build with a message saying which file to add.
import fs from "node:fs";
import path from "node:path";

const IMAGES_DIR = path.resolve("src/assets/images");

function visit(node, fn) {
  fn(node);
  if (node.children) node.children.forEach((child) => visit(child, fn));
}

export default function remarkSiteImages() {
  return (tree, file) => {
    visit(tree, (node) => {
      if (node.type !== "image" || !node.url?.startsWith("/images/")) return;
      const target = path.join(IMAGES_DIR, node.url.slice("/images/".length));
      if (!fs.existsSync(target)) {
        throw new Error(
          `Image not found: ${node.url} in ${path.relative(process.cwd(), file.path)}. ` +
            `Add the file at src/assets/images/${node.url.slice("/images/".length)}`,
        );
      }
      let rel = path.relative(path.dirname(file.path), target).split(path.sep).join("/");
      node.url = rel.startsWith(".") ? rel : `./${rel}`;
    });
  };
}
