// src/lib/sanityClient.ts
import { createClient } from "@sanity/client";

export const sanity = createClient({
  projectId: "kgbfdpry",       // replace with your Sanity project ID
  dataset: "production",              // or your dataset name
  apiVersion: "2025-08-28",           // use today’s date for latest schema
  useCdn: import.meta.env.PROD,       // `true` for cached/stable data
});
