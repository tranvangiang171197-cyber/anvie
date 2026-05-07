"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useAuth } from "@/components/auth-provider";
import { ProjectForm, ProjectFormData } from "@/components/admin/project-form";

export default function EditProjectPage() {
  const params = useParams<{ id: string }>();
  const id = params?.id;
  const router = useRouter();
  const { user, loading: authLoading } = useAuth();
  const [data, setData] = useState<ProjectFormData | null>(null);
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
        const snap = await getDoc(doc(db, "projects", id));
        if (!snap.exists()) {
          setError("Không tìm thấy dự án");
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
          location: d.location || "",
          status: d.status || "",
          area: d.area || "",
          contentHtml: d.contentHtml || "",
        });
      } catch (e: any) {
        console.error("Error loading project:", e);
        setError(e?.message || "Lỗi khi tải dự án");
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
          <p className="text-red-600 mb-4">{error || "Không tìm thấy dự án"}</p>
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

  return <ProjectForm initialData={data} docId={id} />;
}
