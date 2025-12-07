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

const COLLECTION_NAME = "projects";

// GET - Lấy danh sách dự án hoặc một dự án cụ thể
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug");
    const limit = searchParams.get("limit");

    if (slug) {
      // Lấy một dự án cụ thể
      const projectsRef = collection(db, COLLECTION_NAME);
      const projectsSnapshot = await getDocs(projectsRef);
      const projectDoc = projectsSnapshot.docs.find(
        (doc) => doc.data().slug === slug,
      );

      if (!projectDoc) {
        return NextResponse.json(
          { error: "Project not found" },
          { status: 404 },
        );
      }

      return NextResponse.json({
        id: projectDoc.id,
        ...projectDoc.data(),
      });
    } else {
      // Lấy danh sách dự án
      const projectsRef = collection(db, COLLECTION_NAME);
      let q = query(projectsRef, orderBy("date", "desc"));

      if (limit) {
        q = query(q, firestoreLimit(parseInt(limit)));
      }

      const projectsSnapshot = await getDocs(q);
      const projects = projectsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      return NextResponse.json(projects);
    }
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 },
    );
  }
}

// POST - Tạo dự án mới
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
      location,
      status,
      area,
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
    const projectsRef = collection(db, COLLECTION_NAME);
    const projectsSnapshot = await getDocs(projectsRef);
    const existingProject = projectsSnapshot.docs.find(
      (doc) => doc.data().slug === slug,
    );

    if (existingProject) {
      return NextResponse.json(
        { error: "Project with this slug already exists" },
        { status: 400 },
      );
    }

    // Create new project
    const projectData = {
      slug,
      title,
      date: Timestamp.fromDate(new Date(date)),
      summary: summary || null,
      heroImage: heroImage || null,
      category: category || null,
      location: location || null,
      status: status || null,
      area: area || null,
      contentHtml: contentHtml || "",
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
    };

    const docRef = await addDoc(collection(db, COLLECTION_NAME), projectData);

    return NextResponse.json({
      id: docRef.id,
      ...projectData,
    });
  } catch (error) {
    console.error("Error creating project:", error);
    return NextResponse.json(
      { error: "Failed to create project" },
      { status: 500 },
    );
  }
}

// PUT - Cập nhật dự án
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
      return NextResponse.json(
        { error: "Project ID is required" },
        { status: 400 },
      );
    }

    const projectRef = doc(db, COLLECTION_NAME, id);
    const projectDoc = await getDoc(projectRef);

    if (!projectDoc.exists()) {
      return NextResponse.json(
        { error: "Project not found" },
        { status: 404 },
      );
    }

    // Convert date to Timestamp if provided
    const dataToUpdate: any = {
      ...updateData,
      updatedAt: Timestamp.now(),
    };

    if (updateData.date) {
      dataToUpdate.date = Timestamp.fromDate(new Date(updateData.date));
    }

    await updateDoc(projectRef, dataToUpdate);

    return NextResponse.json({ success: true, id });
  } catch (error) {
    console.error("Error updating project:", error);
    return NextResponse.json(
      { error: "Failed to update project" },
      { status: 500 },
    );
  }
}

// DELETE - Xóa dự án
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
      return NextResponse.json(
        { error: "Project ID is required" },
        { status: 400 },
      );
    }

    const projectRef = doc(db, COLLECTION_NAME, id);
    await deleteDoc(projectRef);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting project:", error);
    return NextResponse.json(
      { error: "Failed to delete project" },
      { status: 500 },
    );
  }
}

