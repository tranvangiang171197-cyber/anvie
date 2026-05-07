"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useAuth } from "@/components/auth-provider";
import { NewsForm, NewsFormData } from "@/components/admin/news-form";

export default function EditNewsPage() {
  const params = useParams<{ id: string }>();
  const id = params?.id;
  const router = useRouter();
  const { user, loading: authLoading } = useAuth();
  const [data, setData] = useState<NewsFormData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (authLoading) return;
    if (!user) {
      router.push("/login");
      return;
    }
    if (!id) return;

    (async () => {
      try {
        const snap = await getDoc(doc(db, "news", id));
        if (!snap.exists()) {
          setError("Không tìm thấy bài viết");
          return;
        }
        const d = snap.data();
        const dateValue =
          d.date?.toDate?.()?.toISOString().split("T")[0] ||
          (typeof d.date === "string" ? d.date : new Date().toISOString().split("T")[0]);

        setData({
          slug: d.slug || "",
          title: d.title || "",
          date: dateValue,
          summary: d.summary || "",
          heroImage: d.heroImage || "",
          category: d.category || "",
          author: d.author || "",
          readingTime: d.readingTime || "",
          contentHtml: d.contentHtml || "",
        });
      } catch (e: any) {
        console.error("Error loading news:", e);
        setError(e?.message || "Lỗi khi tải bài viết");
      } finally {
        setLoading(false);
      }
    })();
  }, [id, user, authLoading, router]);

  if (loading || authLoading) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center">
        <p className="text-stone-600">Đang tải...</p>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center px-4">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error || "Không tìm thấy bài viết"}</p>
          <button
            onClick={() => router.push("/admin")}
            className="px-4 py-2 border border-stone-300 rounded-lg text-stone-700 hover:bg-stone-50 transition-colors"
          >
            Quay lại
          </button>
        </div>
      </div>
    );
  }

  return <NewsForm initialData={data} docId={id} />;
}
