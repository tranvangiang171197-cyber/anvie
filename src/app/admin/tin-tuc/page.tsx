"use client";

import { useState, useEffect } from "react";
import { TipTapEditor } from "@/components/tiptap-editor";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/auth-provider";
import { logout } from "@/lib/auth";
import { db } from "@/lib/firebase";
import { collection, addDoc, getDocs, query, where, Timestamp } from "firebase/firestore";

export default function AdminNewsPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    slug: "",
    title: "",
    date: new Date().toISOString().split("T")[0],
    summary: "",
    heroImage: "",
    category: "",
    author: "",
    readingTime: "",
    contentHtml: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (!user) {
        alert("Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại.");
        router.push("/login");
        return;
      }

      // Check if slug already exists
      const postsRef = collection(db, "news");
      const q = query(postsRef, where("slug", "==", formData.slug));
      const existingPosts = await getDocs(q);

      if (!existingPosts.empty) {
        throw new Error("Bài viết với slug này đã tồn tại. Vui lòng chọn slug khác.");
      }

      // Create new post directly in Firestore
      const postData = {
        slug: formData.slug,
        title: formData.title,
        date: Timestamp.fromDate(new Date(formData.date)),
        summary: formData.summary || null,
        heroImage: formData.heroImage || null,
        category: formData.category || null,
        author: formData.author || null,
        readingTime: formData.readingTime || null,
        contentHtml: formData.contentHtml || "",
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now(),
      };

      const docRef = await addDoc(collection(db, "news"), postData);

      alert("Tạo bài viết thành công!");
      router.push(`/tin-tuc/${formData.slug}`);
    } catch (error: any) {
      console.error("Error creating post:", error);
      let errorMessage = "Lỗi khi tạo bài viết";
      
      if (error?.code === "permission-denied") {
        errorMessage = "Không có quyền tạo bài viết. Vui lòng kiểm tra Firestore security rules.";
      } else if (error?.message) {
        errorMessage = error.message;
      }
      
      alert(`Lỗi: ${errorMessage}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleContentChange = (html: string) => {
    setFormData((prev) => ({ ...prev, contentHtml: html }));
  };

  // Auto-generate slug from title
  useEffect(() => {
    if (formData.title && !formData.slug) {
      const slug = formData.title
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
      setFormData((prev) => ({ ...prev, slug }));
    }
  }, [formData.title, formData.slug]);

  const { user } = useAuth();

  const handleLogout = async () => {
    await logout();
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-stone-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-stone-900">
              Tạo bài viết mới - Tin tức
            </h1>
            <p className="text-stone-600 mt-2">
              Viết và quản lý bài viết cho trang tin tức
            </p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-stone-600">{user?.email}</span>
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-sm border border-stone-300 rounded-lg text-stone-700 hover:bg-stone-50 transition-colors"
            >
              Đăng xuất
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Info */}
          <div className="bg-white rounded-lg border border-stone-200 p-6 space-y-4">
            <h2 className="text-xl font-semibold text-stone-900">
              Thông tin cơ bản
            </h2>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">
                Tiêu đề *
              </label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, title: e.target.value }))
                }
                className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-500 focus:border-transparent"
                placeholder="Nhập tiêu đề bài viết"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">
                Slug (URL) *
              </label>
              <input
                type="text"
                required
                value={formData.slug}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, slug: e.target.value }))
                }
                className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-500 focus:border-transparent"
                placeholder="bai-viet-moi"
              />
              <p className="text-xs text-stone-500 mt-1">
                URL sẽ là: /tin-tuc/{formData.slug || "..."}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">
                  Ngày đăng *
                </label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, date: e.target.value }))
                  }
                  className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">
                  Thời gian đọc (phút)
                </label>
                <input
                  type="text"
                  value={formData.readingTime}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      readingTime: e.target.value,
                    }))
                  }
                  className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-500 focus:border-transparent"
                  placeholder="5"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">
                Tóm tắt
              </label>
              <textarea
                value={formData.summary}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, summary: e.target.value }))
                }
                rows={3}
                className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-500 focus:border-transparent"
                placeholder="Mô tả ngắn gọn về bài viết"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">
                  Danh mục
                </label>
                <input
                  type="text"
                  value={formData.category}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, category: e.target.value }))
                  }
                  className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-500 focus:border-transparent"
                  placeholder="Kiến trúc, Nội thất..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">
                  Tác giả
                </label>
                <input
                  type="text"
                  value={formData.author}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, author: e.target.value }))
                  }
                  className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-500 focus:border-transparent"
                  placeholder="Tên tác giả"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">
                Ảnh đại diện (URL)
              </label>
              <input
                type="url"
                value={formData.heroImage}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, heroImage: e.target.value }))
                }
                className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-500 focus:border-transparent"
                placeholder="https://..."
              />
              <p className="text-xs text-stone-500 mt-1">
                Hoặc upload ảnh trong editor bên dưới và copy URL
              </p>
            </div>
          </div>

          {/* Content Editor */}
          <div className="bg-white rounded-lg border border-stone-200 p-6">
            <h2 className="text-xl font-semibold text-stone-900 mb-4">
              Nội dung bài viết
            </h2>
            <TipTapEditor
              content={formData.contentHtml}
              onChange={handleContentChange}
              uploadFolder="news"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={() => router.back()}
              className="px-6 py-2 border border-stone-300 rounded-lg text-stone-700 hover:bg-stone-50 transition-colors"
            >
              Hủy
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2 bg-stone-900 text-white rounded-lg hover:bg-stone-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Đang tạo..." : "Tạo bài viết"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

