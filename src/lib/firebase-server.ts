// Server-side Firebase operations
// This file should only be used in Server Components or API routes

import { db } from "@/lib/firebase";
import {
  collection,
  getDocs,
  query,
  orderBy,
  limit as firestoreLimit,
  where,
  Timestamp,
} from "firebase/firestore";

export const collections = {
  news: "news",
  projects: "projects",
} as const;

export type Collection = keyof typeof collections;

// Helper to convert Firestore Timestamp to ISO string
export function formatFirestoreDate(date: Timestamp | string | Date): string {
  if (typeof date === "string") {
    return date;
  }
  if (date instanceof Date) {
    return date.toISOString().split("T")[0];
  }
  if (date && typeof date === "object" && "toDate" in date) {
    return date.toDate().toISOString().split("T")[0];
  }
  return new Date().toISOString().split("T")[0];
}

export async function getCollectionSlugs(collectionName: Collection) {
  try {
    const collectionRef = collection(db, collectionName);
    const snapshot = await getDocs(collectionRef);
    return snapshot.docs.map((doc) => doc.data().slug);
  } catch (error) {
    console.error(`Error fetching slugs for ${collectionName}:`, error);
    return [];
  }
}

export async function getCollectionSummaries(
  collectionName: Collection,
  limit?: number,
) {
  try {
    const collectionRef = collection(db, collectionName);
    let q = query(collectionRef, orderBy("date", "desc"));

    if (limit) {
      q = query(q, firestoreLimit(limit));
    }

    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        slug: data.slug,
        title: data.title,
        date: formatFirestoreDate(data.date),
        summary: data.summary || undefined,
        heroImage: data.heroImage || undefined,
        category: data.category || undefined,
        location: data.location || undefined,
        status: data.status || undefined,
        area: data.area || undefined,
        author: data.author || undefined,
        readingTime: data.readingTime || undefined,
      };
    });
  } catch (error) {
    console.error(`Error fetching summaries for ${collectionName}:`, error);
    return [];
  }
}

export async function getEntry(collectionName: Collection, slug: string) {
  try {
    if (!slug) {
      throw new Error("Slug is required");
    }
    
    const collectionRef = collection(db, collectionName);
    const q = query(collectionRef, where("slug", "==", slug));
    const snapshot = await getDocs(q);

    if (snapshot.empty) {
      throw new Error(`Entry not found: ${slug}`);
    }

    const doc = snapshot.docs[0];
    const data = doc.data();

    return {
      id: doc.id,
      slug: data.slug,
      title: data.title,
      date: formatFirestoreDate(data.date),
      summary: data.summary || undefined,
      heroImage: data.heroImage || undefined,
      category: data.category || undefined,
      location: data.location || undefined,
      status: data.status || undefined,
      area: data.area || undefined,
      author: data.author || undefined,
      readingTime: data.readingTime || undefined,
      contentHtml: data.contentHtml || "",
    };
  } catch (error) {
    console.error(`Error fetching entry ${slug} from ${collectionName}:`, error);
    throw error;
  }
}

