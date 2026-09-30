// Links to other websites in Markdown open in a new tab.
const visit = (node, fn) => {
  fn(node);
  node.children?.forEach((c) => visit(c, fn));
};

export default function rehypeExternalLinks() {
  return (tree) =>
    visit(tree, (node) => {
      const href = node.type === "element" && node.tagName === "a" ? String(node.properties?.href ?? "") : "";
      if (/^https?:\/\//.test(href) && !href.includes("bvswebdesign.co.uk")) {
        node.properties.target = "_blank";
        node.properties.rel = ["noopener"];
      }
    });
}
