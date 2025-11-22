import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const CONTENT_ROOT = path.join(process.cwd(), "content");

export const collections = {
  news: "news",
  projects: "projects",
} as const;

export type Collection = keyof typeof collections;

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

async function readCollectionFiles(collection: Collection) {
  const directory = path.join(CONTENT_ROOT, collections[collection]);
  const files = await fs.readdir(directory);
  return files.filter((file) => file.endsWith(".md"));
}

export async function getCollectionSlugs(collection: Collection) {
  const files = await readCollectionFiles(collection);
  return files.map((file) => file.replace(/\.md$/, ""));
}

export async function getCollectionSummaries(
  collection: Collection,
  limit?: number,
) {
  const files = await readCollectionFiles(collection);

  const entries = await Promise.all(
    files.map(async (file) => {
      const filePath = path.join(
        CONTENT_ROOT,
        collections[collection],
        file,
      );
      const fileContents = await fs.readFile(filePath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug: file.replace(/\.md$/, ""),
        title: data.title as string,
        date: data.date as string,
        summary: data.summary as string | undefined,
        heroImage: data.heroImage as string | undefined,
        category: data.category as string | undefined,
        location: data.location as string | undefined,
        status: data.status as string | undefined,
        area: data.area as string | undefined,
        author: data.author as string | undefined,
        readingTime: data.readingTime as string | undefined,
      } satisfies EntryMeta;
    }),
  );

  const sorted = entries.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return typeof limit === "number" ? sorted.slice(0, limit) : sorted;
}

export async function getEntry(collection: Collection, slug: string) {
  const filePath = path.join(
    CONTENT_ROOT,
    collections[collection],
    `${slug}.md`,
  );

  const fileContents = await fs.readFile(filePath, "utf8");
  const { data, content } = matter(fileContents);

  const processed = await remark().use(html).process(content);
  const contentHtml = processed.toString();

  const entry: Entry = {
    slug,
    title: data.title as string,
    date: data.date as string,
    summary: data.summary as string | undefined,
    heroImage: data.heroImage as string | undefined,
    category: data.category as string | undefined,
    location: data.location as string | undefined,
    status: data.status as string | undefined,
    area: data.area as string | undefined,
    author: data.author as string | undefined,
    readingTime: data.readingTime as string | undefined,
    contentHtml,
  };

  return entry;
}

