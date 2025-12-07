import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  limit as firestoreLimit,
  Timestamp,
} from "firebase/firestore";

const COLLECTION_NAME = "news";

// GET - Lấy danh sách bài viết hoặc một bài viết cụ thể
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug");
    const limit = searchParams.get("limit");

    if (slug) {
      // Lấy một bài viết cụ thể
      const postsRef = collection(db, COLLECTION_NAME);
      const postsSnapshot = await getDocs(postsRef);
      const postDoc = postsSnapshot.docs.find(
        (doc) => doc.data().slug === slug,
      );

      if (!postDoc) {
        return NextResponse.json({ error: "Post not found" }, { status: 404 });
      }

      return NextResponse.json({
        id: postDoc.id,
        ...postDoc.data(),
      });
    } else {
      // Lấy danh sách bài viết
      const postsRef = collection(db, COLLECTION_NAME);
      let q = query(postsRef, orderBy("date", "desc"));

      if (limit) {
        q = query(q, firestoreLimit(parseInt(limit)));
      }

      const postsSnapshot = await getDocs(q);
      const posts = postsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      return NextResponse.json(posts);
    }
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 },
    );
  }
}

// POST - Tạo bài viết mới
export async function POST(request: NextRequest) {
  try {
    // Check authentication
    const authHeader = request.headers.get("authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json(
        { error: "Unauthorized. Please login." },
        { status: 401 },
      );
    }

    const body = await request.json();
    const {
      slug,
      title,
      date,
      summary,
      heroImage,
      category,
      author,
      readingTime,
      contentHtml,
    } = body;

    // Validate required fields
    if (!slug || !title || !date) {
      return NextResponse.json(
        { error: "Missing required fields: slug, title, date" },
        { status: 400 },
      );
    }

    // Check if slug already exists
    const postsRef = collection(db, COLLECTION_NAME);
    const postsSnapshot = await getDocs(postsRef);
    const existingPost = postsSnapshot.docs.find(
      (doc) => doc.data().slug === slug,
    );

    if (existingPost) {
      return NextResponse.json(
        { error: "Post with this slug already exists" },
        { status: 400 },
      );
    }

    // Create new post
    const postData = {
      slug,
      title,
      date: Timestamp.fromDate(new Date(date)),
      summary: summary || null,
      heroImage: heroImage || null,
      category: category || null,
      author: author || null,
      readingTime: readingTime || null,
      contentHtml: contentHtml || "",
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
    };

    const docRef = await addDoc(collection(db, COLLECTION_NAME), postData);

    return NextResponse.json({
      id: docRef.id,
      ...postData,
    });
  } catch (error) {
    console.error("Error creating post:", error);
    return NextResponse.json(
      { error: "Failed to create post" },
      { status: 500 },
    );
  }
}

// PUT - Cập nhật bài viết
export async function PUT(request: NextRequest) {
  try {
    // Check authentication
    const authHeader = request.headers.get("authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json(
        { error: "Unauthorized. Please login." },
        { status: 401 },
      );
    }

    const body = await request.json();
    const { id, ...updateData } = body;

    if (!id) {
      return NextResponse.json({ error: "Post ID is required" }, { status: 400 });
    }

    const postRef = doc(db, COLLECTION_NAME, id);
    const postDoc = await getDoc(postRef);

    if (!postDoc.exists()) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    // Convert date to Timestamp if provided
    const dataToUpdate: any = {
      ...updateData,
      updatedAt: Timestamp.now(),
    };

    if (updateData.date) {
      dataToUpdate.date = Timestamp.fromDate(new Date(updateData.date));
    }

    await updateDoc(postRef, dataToUpdate);

    return NextResponse.json({ success: true, id });
  } catch (error) {
    console.error("Error updating post:", error);
    return NextResponse.json(
      { error: "Failed to update post" },
      { status: 500 },
    );
  }
}

// DELETE - Xóa bài viết
export async function DELETE(request: NextRequest) {
  try {
    // Check authentication
    const authHeader = request.headers.get("authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json(
        { error: "Unauthorized. Please login." },
        { status: 401 },
      );
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Post ID is required" }, { status: 400 });
    }

    const postRef = doc(db, COLLECTION_NAME, id);
    await deleteDoc(postRef);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting post:", error);
    return NextResponse.json(
      { error: "Failed to delete post" },
      { status: 500 },
    );
  }
}

