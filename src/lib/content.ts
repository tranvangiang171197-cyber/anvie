// Re-export types and functions from firebase-server
export type { Collection } from "./firebase-server";
export {
  getCollectionSlugs,
  getCollectionSummaries,
  getEntry,
} from "./firebase-server";

export const collections = {
  news: "news",
  projects: "projects",
} as const;

export type EntryMeta = {
  slug: string;
  title: string;
  date: string;
  summary?: string;
  heroImage?: string;
  category?: string;
  location?: string;
  status?: string;
  area?: string;
  author?: string;
  readingTime?: string;
};

export type Entry = EntryMeta & {
  contentHtml: string;
};
