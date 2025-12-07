import { NextRequest, NextResponse } from "next/server";
import { storage } from "@/lib/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

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

    // Validate Firebase Storage configuration
    const storageBucket = process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET;
    if (!storageBucket) {
      console.error("Firebase Storage bucket not configured");
      return NextResponse.json(
        { error: "Storage bucket not configured. Please check your Firebase configuration." },
        { status: 500 },
      );
    }
    
    // Log storage bucket for debugging (only in development)
    if (process.env.NODE_ENV === "development") {
      console.log("Storage bucket:", storageBucket);
    }

    const formData = await request.formData();
    const file = formData.get("file") as File;
    const folder = formData.get("folder") as string | null; // "news" or "projects"

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    // Validate file type
    const validTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp", "image/gif"];
    if (!validTypes.includes(file.type)) {
      return NextResponse.json(
        { error: "Invalid file type. Only images are allowed." },
        { status: 400 },
      );
    }

    // Validate file size (max 10MB)
    const maxSize = 10 * 1024 * 1024; // 10MB
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: "File size exceeds 10MB limit" },
        { status: 400 },
      );
    }

    // Generate unique filename
    const timestamp = Date.now();
    const randomString = Math.random().toString(36).substring(2, 15);
    const fileExtension = file.name.split(".").pop();
    const fileName = `${timestamp}-${randomString}.${fileExtension}`;

    // Determine storage path
    const storagePath = folder
      ? `${folder}/${fileName}`
      : `uploads/${fileName}`;

    // Convert File to ArrayBuffer
    const arrayBuffer = await file.arrayBuffer();
    const uint8Array = new Uint8Array(arrayBuffer);

    // Upload to Firebase Storage
    const storageRef = ref(storage, storagePath);
    
    if (process.env.NODE_ENV === "development") {
      console.log("Uploading to path:", storagePath);
      console.log("File size:", file.size, "bytes");
      console.log("File type:", file.type);
    }
    
    await uploadBytes(storageRef, uint8Array);

    // Get download URL
    const downloadURL = await getDownloadURL(storageRef);

    return NextResponse.json({
      success: true,
      url: downloadURL,
      path: storagePath,
    });
  } catch (error: any) {
    console.error("Error uploading file:", error);
    
    // Provide more detailed error message
    let errorMessage = "Failed to upload file";
    if (error?.code === "storage/unknown" || error?.status_ === 404) {
      errorMessage = "Firebase Storage bucket not found. Please check your Firebase configuration and ensure Storage is enabled.";
    } else if (error?.code === "storage/unauthorized") {
      errorMessage = "Unauthorized. Please check Storage security rules.";
    } else if (error?.message) {
      errorMessage = error.message;
    }
    
    return NextResponse.json(
      { 
        error: errorMessage,
        code: error?.code,
        details: process.env.NODE_ENV === "development" ? error?.stack : undefined,
      },
      { status: 500 },
    );
  }
}

