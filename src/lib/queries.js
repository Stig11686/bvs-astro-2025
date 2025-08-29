// src/lib/queries.ts
export const blogQuery = `
*[_type == "blog" && !(_id in path("drafts.**"))]{
  "id": _id,
  title,
  slug,
  excerpt,
  "image": mainImage.asset->url,
  "date": publishedAt
} | order(publishedAt desc)
`;

export const projectQuery = `
*[_type == "project" && !(_id in path("drafts.**"))]{
  _id,
  title,
  slug,
  description,
  coverImage,
  url
} | order(_createdAt desc)
`;
