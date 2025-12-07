"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import { useState, useCallback } from "react";
import { getIdToken } from "@/lib/auth";
import { storage } from "@/lib/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

interface TipTapEditorProps {
  content: string;
  onChange: (html: string) => void;
  uploadFolder?: string; // "news" or "projects"
}

export function TipTapEditor({
  content,
  onChange,
  uploadFolder = "uploads",
}: TipTapEditorProps) {
  const [isUploading, setIsUploading] = useState(false);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Image.configure({
        inline: true,
        allowBase64: false,
      }),
      Link.configure({
        openOnClick: false,
      }),
    ],
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class:
          "prose prose-lg max-w-none focus:outline-none min-h-[400px] px-4 py-3",
      },
    },
    immediatelyRender: false,
  });

  const handleImageUpload = useCallback(
    async (file: File) => {
      if (!editor) return;

      setIsUploading(true);
      try {
        // Get auth token to ensure user is authenticated
        const token = await getIdToken();
        
        if (!token) {
          throw new Error("Bạn cần đăng nhập để upload ảnh");
        }

        // Generate unique filename
        const timestamp = Date.now();
        const randomString = Math.random().toString(36).substring(2, 15);
        const fileExtension = file.name.split(".").pop();
        const fileName = `${timestamp}-${randomString}.${fileExtension}`;

        // Determine storage path
        const storagePath = `${uploadFolder}/${fileName}`;

        // Upload directly to Firebase Storage from client
        const storageRef = ref(storage, storagePath);
        await uploadBytes(storageRef, file);

        // Get download URL
        const url = await getDownloadURL(storageRef);

        // Insert image at current cursor position
        editor.chain().focus().setImage({ src: url }).run();
      } catch (error: any) {
        console.error("Error uploading image:", error);
        let errorMessage = "Lỗi khi upload ảnh. Vui lòng thử lại.";
        
        if (error?.code === "storage/unauthorized") {
          errorMessage = "Không có quyền upload. Vui lòng kiểm tra Storage security rules.";
        } else if (error?.message) {
          errorMessage = error.message;
        }
        
        alert(errorMessage);
      } finally {
        setIsUploading(false);
      }
    },
    [editor, uploadFolder],
  );

  const handleFileInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        handleImageUpload(file);
      }
      // Reset input
      e.target.value = "";
    },
    [handleImageUpload],
  );

  if (!editor) {
    return <div>Đang tải editor...</div>;
  }

  return (
    <div className="border border-stone-300 rounded-lg overflow-hidden">
      {/* Toolbar */}
      <div className="border-b border-stone-300 bg-stone-50 p-2 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
            editor.isActive("bold")
              ? "bg-stone-700 text-white"
              : "bg-white text-stone-700 hover:bg-stone-100"
          }`}
        >
          <strong>B</strong>
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
            editor.isActive("italic")
              ? "bg-stone-700 text-white"
              : "bg-white text-stone-700 hover:bg-stone-100"
          }`}
        >
          <em>I</em>
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
            editor.isActive("heading", { level: 1 })
              ? "bg-stone-700 text-white"
              : "bg-white text-stone-700 hover:bg-stone-100"
          }`}
        >
          H1
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
            editor.isActive("heading", { level: 2 })
              ? "bg-stone-700 text-white"
              : "bg-white text-stone-700 hover:bg-stone-100"
          }`}
        >
          H2
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
            editor.isActive("bulletList")
              ? "bg-stone-700 text-white"
              : "bg-white text-stone-700 hover:bg-stone-100"
          }`}
        >
          • List
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
            editor.isActive("orderedList")
              ? "bg-stone-700 text-white"
              : "bg-white text-stone-700 hover:bg-stone-100"
          }`}
        >
          1. List
        </button>
        <div className="border-l border-stone-300 mx-1" />
        <label className="px-3 py-1.5 rounded text-sm font-medium bg-white text-stone-700 hover:bg-stone-100 cursor-pointer transition-colors">
          {isUploading ? "Đang upload..." : "📷 Ảnh"}
          <input
            type="file"
            accept="image/*"
            onChange={handleFileInput}
            className="hidden"
            disabled={isUploading}
          />
        </label>
        <button
          type="button"
          onClick={() => {
            const url = window.prompt("Nhập URL:");
            if (url) {
              editor.chain().focus().setLink({ href: url }).run();
            }
          }}
          className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
            editor.isActive("link")
              ? "bg-stone-700 text-white"
              : "bg-white text-stone-700 hover:bg-stone-100"
          }`}
        >
          🔗 Link
        </button>
      </div>

      {/* Editor Content */}
      <EditorContent editor={editor} className="min-h-[400px]" />
    </div>
  );
}

