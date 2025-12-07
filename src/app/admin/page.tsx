"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/auth-provider";
import { logout } from "@/lib/auth";

export default function AdminPage() {
  const { user } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push("/login");
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

        <div className="grid md:grid-cols-2 gap-6">
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
      </div>
    </div>
  );
}

