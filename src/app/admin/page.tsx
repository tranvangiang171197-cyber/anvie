"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/auth-provider";
import { logout } from "@/lib/auth";
import { db } from "@/lib/firebase";
import { collection, getDocs, deleteDoc, doc, query, orderBy } from "firebase/firestore";
import { useState, useEffect } from "react";
import { formatDate } from "@/lib/formatters";

type Post = {
  id: string;
  slug: string;
  title: string;
  date: string;
  category?: string;
  author?: string;
};

export default function AdminPage() {
  const { user } = useAuth();
  const router = useRouter();
  const [news, setNews] = useState<Post[]>([]);
  const [projects, setProjects] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<string | null>(null);

  const handleLogout = async () => {
    await logout();
    router.push("/login");
  };

  const fetchNews = async () => {
    try {
      const newsRef = collection(db, "news");
      const q = query(newsRef, orderBy("date", "desc"));
      const snapshot = await getDocs(q);
      const newsList = snapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          slug: data.slug,
          title: data.title,
          date: data.date?.toDate?.()?.toISOString() || data.date || new Date().toISOString(),
          category: data.category,
          author: data.author,
        };
      });
      setNews(newsList);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  const fetchProjects = async () => {
    try {
      const projectsRef = collection(db, "projects");
      const q = query(projectsRef, orderBy("date", "desc"));
      const snapshot = await getDocs(q);
      const projectsList = snapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          slug: data.slug,
          title: data.title,
          date: data.date?.toDate?.()?.toISOString() || data.date || new Date().toISOString(),
          category: data.category,
        };
      });
      setProjects(projectsList);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  useEffect(() => {
    if (user) {
      Promise.all([fetchNews(), fetchProjects()]).finally(() => {
        setLoading(false);
      });
    }
  }, [user]);

  const handleDelete = async (collectionName: "news" | "projects", id: string, title: string) => {
    if (!confirm(`Bạn có chắc chắn muốn xóa "${title}"?`)) {
      return;
    }

    setDeleting(id);
    try {
      const docRef = doc(db, collectionName, id);
      await deleteDoc(docRef);
      
      // Refresh lists
      if (collectionName === "news") {
        await fetchNews();
      } else {
        await fetchProjects();
      }
      
      alert("Xóa thành công!");
    } catch (error: any) {
      console.error("Error deleting:", error);
      alert(`Lỗi khi xóa: ${error.message}`);
    } finally {
      setDeleting(null);
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 flex justify-between items-start">
          <div>
            <h1 className="text-4xl font-bold text-stone-900">Admin Dashboard</h1>
            <p className="text-stone-600 mt-2">
              Quản lý nội dung cho website Anvie
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

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Link
            href="/admin/tin-tuc"
            className="block bg-white rounded-lg border border-stone-200 p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-stone-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📰</span>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-stone-900">
                  Tin tức
                </h2>
                <p className="text-stone-600 text-sm mt-1">
                  Tạo và quản lý bài viết tin tức
                </p>
              </div>
            </div>
          </Link>

          <Link
            href="/admin/du-an"
            className="block bg-white rounded-lg border border-stone-200 p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-stone-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🏗️</span>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-stone-900">
                  Dự án
                </h2>
                <p className="text-stone-600 text-sm mt-1">
                  Tạo và quản lý dự án kiến trúc
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* News List */}
        <div className="bg-white rounded-lg border border-stone-200 p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-stone-900">Bài viết Tin tức</h2>
            <Link
              href="/admin/tin-tuc"
              className="text-sm text-stone-600 hover:text-stone-900 underline"
            >
              Tạo mới
            </Link>
          </div>
          {loading ? (
            <p className="text-stone-500 text-sm">Đang tải...</p>
          ) : news.length === 0 ? (
            <p className="text-stone-500 text-sm">Chưa có bài viết nào</p>
          ) : (
            <div className="space-y-3">
              {news.map((article) => (
                <div
                  key={article.id}
                  className="flex items-center justify-between p-4 border border-stone-200 rounded-lg hover:bg-stone-50 transition-colors"
                >
                  <div className="flex-1">
                    <h3 className="font-medium text-stone-900">{article.title}</h3>
                    <div className="flex items-center gap-4 mt-1 text-sm text-stone-500">
                      <span>{formatDate(article.date)}</span>
                      {article.category && (
                        <>
                          <span>•</span>
                          <span>{article.category}</span>
                        </>
                      )}
                      {article.author && (
                        <>
                          <span>•</span>
                          <span>{article.author}</span>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Link
                      href={`/tin-tuc/${article.slug}`}
                      target="_blank"
                      className="px-3 py-1.5 text-sm border border-stone-300 rounded-lg text-stone-700 hover:bg-stone-100 transition-colors"
                    >
                      Xem
                    </Link>
                    <Link
                      href={`/admin/tin-tuc/${article.id}`}
                      className="px-3 py-1.5 text-sm bg-stone-900 text-white rounded-lg hover:bg-stone-800 transition-colors"
                    >
                      Sửa
                    </Link>
                    <button
                      onClick={() => handleDelete("news", article.id, article.title)}
                      disabled={deleting === article.id}
                      className="px-3 py-1.5 text-sm bg-red-50 text-red-700 rounded-lg hover:bg-red-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {deleting === article.id ? "Đang xóa..." : "Xóa"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Projects List */}
        <div className="bg-white rounded-lg border border-stone-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-stone-900">Dự án</h2>
            <Link
              href="/admin/du-an"
              className="text-sm text-stone-600 hover:text-stone-900 underline"
            >
              Tạo mới
            </Link>
          </div>
          {loading ? (
            <p className="text-stone-500 text-sm">Đang tải...</p>
          ) : projects.length === 0 ? (
            <p className="text-stone-500 text-sm">Chưa có dự án nào</p>
          ) : (
            <div className="space-y-3">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="flex items-center justify-between p-4 border border-stone-200 rounded-lg hover:bg-stone-50 transition-colors"
                >
                  <div className="flex-1">
                    <h3 className="font-medium text-stone-900">{project.title}</h3>
                    <div className="flex items-center gap-4 mt-1 text-sm text-stone-500">
                      <span>{formatDate(project.date)}</span>
                      {project.category && (
                        <>
                          <span>•</span>
                          <span>{project.category}</span>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Link
                      href={`/du-an/${project.slug}`}
                      target="_blank"
                      className="px-3 py-1.5 text-sm border border-stone-300 rounded-lg text-stone-700 hover:bg-stone-100 transition-colors"
                    >
                      Xem
                    </Link>
                    <Link
                      href={`/admin/du-an/${project.id}`}
                      className="px-3 py-1.5 text-sm bg-stone-900 text-white rounded-lg hover:bg-stone-800 transition-colors"
                    >
                      Sửa
                    </Link>
                    <button
                      onClick={() => handleDelete("projects", project.id, project.title)}
                      disabled={deleting === project.id}
                      className="px-3 py-1.5 text-sm bg-red-50 text-red-700 rounded-lg hover:bg-red-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {deleting === project.id ? "Đang xóa..." : "Xóa"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

