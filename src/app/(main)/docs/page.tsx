import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hướng dẫn vận hành | Anvie Home",
  description: "Hướng dẫn chi tiết cho admin về cách setup và vận hành hệ thống CMS",
};

const sections = [
  {
    id: "setup",
    title: "1. Thiết lập Firebase",
    content: [
      {
        type: "heading",
        text: "1.1. Tạo Firebase Project",
      },
      {
        type: "text",
        text: "1. Truy cập Firebase Console: https://console.firebase.google.com/",
      },
      {
        type: "text",
        text: "2. Click 'Add project' hoặc chọn project có sẵn",
      },
      {
        type: "text",
        text: "3. Điền tên project và làm theo hướng dẫn",
      },
      {
        type: "heading",
        text: "1.2. Tạo Web App",
      },
      {
        type: "text",
        text: "1. Trong Firebase Console, click vào biểu tượng Web (`</>`)",
      },
      {
        type: "text",
        text: "2. Đăng ký app với nickname (ví dụ: 'anvie-web')",
      },
      {
        type: "text",
        text: "3. Copy các thông tin cấu hình và thêm vào file `.env.local`:",
      },
      {
        type: "code",
        text: `NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id`,
      },
      {
        type: "heading",
        text: "1.3. Thiết lập Firestore Database",
      },
      {
        type: "text",
        text: "1. Vào Firestore Database trong Firebase Console",
      },
      {
        type: "text",
        text: "2. Click 'Create database'",
      },
      {
        type: "text",
        text: "3. Chọn Production mode",
      },
      {
        type: "text",
        text: "4. Chọn location: asia-southeast1 (cho Việt Nam)",
      },
      {
        type: "heading",
        text: "1.4. Thiết lập Storage",
      },
      {
        type: "text",
        text: "1. Vào Storage trong Firebase Console",
      },
      {
        type: "text",
        text: "2. Click 'Get started'",
      },
      {
        type: "text",
        text: "3. Chọn chế độ bảo mật (giống Firestore)",
      },
      {
        type: "heading",
        text: "1.5. Thiết lập Authentication",
      },
      {
        type: "text",
        text: "1. Vào Authentication trong Firebase Console",
      },
      {
        type: "text",
        text: "2. Click 'Get started'",
      },
      {
        type: "text",
        text: "3. Chọn Email/Password trong 'Sign-in method'",
      },
      {
        type: "text",
        text: "4. Click 'Enable' và 'Save'",
      },
      {
        type: "text",
        text: "5. Tạo user admin: Vào tab Users > Add user > Nhập email và password",
      },
      {
        type: "warning",
        text: "Lưu lại email và password này để đăng nhập vào admin panel!",
      },
      {
        type: "heading",
        text: "1.6. Cấu hình Security Rules",
      },
      {
        type: "text",
        text: "Firestore Rules (Firestore Database > Rules):",
      },
      {
        type: "code",
        text: `rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /news/{document} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    match /projects/{document} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}`,
      },
      {
        type: "text",
        text: "Storage Rules (Storage > Rules):",
      },
      {
        type: "code",
        text: `rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read: if true;
    }
    match /{folder}/{fileName} {
      allow write: if request.auth != null 
        && request.resource.size < 10 * 1024 * 1024
        && request.resource.contentType.matches('image/.*');
    }
  }
}`,
      },
    ],
  },
  {
    id: "login",
    title: "2. Đăng nhập Admin",
    content: [
      {
        type: "text",
        text: "1. Truy cập trang đăng nhập: /login",
      },
      {
        type: "text",
        text: "2. Nhập email và password đã tạo trong Firebase Authentication",
      },
      {
        type: "text",
        text: "3. Click 'Đăng nhập'",
      },
      {
        type: "text",
        text: "4. Sau khi đăng nhập thành công, bạn sẽ được chuyển đến /admin",
      },
      {
        type: "info",
        text: "Chỉ những user đã được tạo trong Firebase Authentication mới có thể đăng nhập.",
      },
    ],
  },
  {
    id: "create-news",
    title: "3. Tạo bài viết Tin tức",
    content: [
      {
        type: "text",
        text: "1. Truy cập /admin/tin-tuc",
      },
      {
        type: "text",
        text: "2. Điền thông tin cơ bản:",
      },
      {
        type: "list",
        items: [
          "Tiêu đề * (bắt buộc)",
          "Slug (URL) * (bắt buộc) - sẽ tự động tạo từ tiêu đề",
          "Ngày đăng * (bắt buộc)",
          "Thời gian đọc (phút) - tùy chọn",
          "Tóm tắt - tùy chọn",
          "Danh mục - tùy chọn",
          "Tác giả - tùy chọn",
        ],
      },
      {
        type: "text",
        text: "3. Ảnh đại diện:",
      },
      {
        type: "list",
        items: [
          "Nhập URL trực tiếp vào ô 'Ảnh đại diện (URL)'",
          "Hoặc click button '📷 Upload' để upload ảnh từ máy tính",
          "Sau khi upload, URL sẽ tự động điền vào ô",
        ],
      },
      {
        type: "text",
        text: "4. Viết nội dung trong editor TipTap:",
      },
      {
        type: "list",
        items: [
          "Sử dụng toolbar để format text (Bold, Italic, Headings, Lists)",
          "Click '📷 Ảnh' để upload và chèn ảnh vào nội dung",
          "Click '🔗 Link' để thêm link",
          "Có thể upload nhiều ảnh trong cùng một bài viết",
        ],
      },
      {
        type: "text",
        text: "5. Click 'Tạo bài viết' để lưu",
      },
      {
        type: "success",
        text: "Bài viết sẽ được lưu vào Firebase và hiển thị trên trang /tin-tuc",
      },
    ],
  },
  {
    id: "create-project",
    title: "4. Tạo Dự án",
    content: [
      {
        type: "text",
        text: "1. Truy cập /admin/du-an",
      },
      {
        type: "text",
        text: "2. Điền thông tin dự án:",
      },
      {
        type: "list",
        items: [
          "Tên dự án * (bắt buộc)",
          "Slug (URL) * (bắt buộc) - sẽ tự động tạo từ tên",
          "Ngày đăng * (bắt buộc)",
          "Tóm tắt - tùy chọn",
          "Danh mục - tùy chọn",
          "Địa điểm - tùy chọn",
          "Trạng thái - tùy chọn (ví dụ: Đang thi công, Hoàn thành)",
          "Quy mô - tùy chọn (ví dụ: 100m², 200m²)",
        ],
      },
      {
        type: "text",
        text: "3. Ảnh đại diện và nội dung: Tương tự như tạo bài viết tin tức",
      },
      {
        type: "text",
        text: "4. Click 'Tạo dự án' để lưu",
      },
    ],
  },
  {
    id: "manage-posts",
    title: "5. Quản lý Bài viết và Dự án",
    content: [
      {
        type: "text",
        text: "1. Truy cập /admin để xem dashboard",
      },
      {
        type: "text",
        text: "2. Trong dashboard, bạn sẽ thấy:",
      },
      {
        type: "list",
        items: [
          "Danh sách tất cả bài viết Tin tức",
          "Danh sách tất cả Dự án",
          "Thông tin: Tiêu đề, Ngày đăng, Danh mục, Tác giả",
        ],
      },
      {
        type: "text",
        text: "3. Các thao tác có thể thực hiện:",
      },
      {
        type: "list",
        items: [
          "Xem: Click button 'Xem' để mở bài viết/dự án trong tab mới",
          "Xóa: Click button 'Xóa' và xác nhận để xóa bài viết/dự án",
          "Tạo mới: Click link 'Tạo mới' hoặc vào /admin/tin-tuc hoặc /admin/du-an",
        ],
      },
      {
        type: "warning",
        text: "Lưu ý: Khi xóa bài viết/dự án, hành động này không thể hoàn tác. Hãy cẩn thận!",
      },
    ],
  },
  {
    id: "upload-images",
    title: "6. Upload Ảnh",
    content: [
      {
        type: "text",
        text: "Có 2 cách để upload ảnh:",
      },
      {
        type: "heading",
        text: "6.1. Upload ảnh đại diện",
      },
      {
        type: "text",
        text: "1. Trong form tạo bài viết/dự án, tìm phần 'Ảnh đại diện (URL)'",
      },
      {
        type: "text",
        text: "2. Click button '📷 Upload'",
      },
      {
        type: "text",
        text: "3. Chọn file ảnh từ máy tính (JPEG, PNG, WebP, GIF)",
      },
      {
        type: "text",
        text: "4. Đợi upload hoàn tất (sẽ hiển thị 'Đang upload...')",
      },
      {
        type: "text",
        text: "5. URL sẽ tự động điền vào ô input",
      },
      {
        type: "heading",
        text: "6.2. Upload ảnh trong nội dung",
      },
      {
        type: "text",
        text: "1. Trong editor TipTap, click button '📷 Ảnh' trên toolbar",
      },
      {
        type: "text",
        text: "2. Chọn file ảnh từ máy tính",
      },
      {
        type: "text",
        text: "3. Ảnh sẽ tự động được upload và chèn vào vị trí con trỏ",
      },
      {
        type: "info",
        text: "Bạn có thể upload nhiều ảnh trong cùng một bài viết. Mỗi ảnh tối đa 10MB.",
      },
    ],
  },
  {
    id: "editor-tips",
    title: "7. Mẹo sử dụng Editor",
    content: [
      {
        type: "text",
        text: "TipTap Editor cung cấp các tính năng:",
      },
      {
        type: "list",
        items: [
          "Bold (B): Làm đậm text",
          "Italic (I): Làm nghiêng text",
          "H1, H2: Tạo tiêu đề",
          "• List: Tạo danh sách dấu đầu dòng",
          "1. List: Tạo danh sách đánh số",
          "📷 Ảnh: Upload và chèn ảnh",
          "🔗 Link: Thêm link vào text",
        ],
      },
      {
        type: "text",
        text: "Cách sử dụng:",
      },
      {
        type: "list",
        items: [
          "Chọn text và click button để format",
          "Hoặc click button trước rồi gõ text",
          "Để thêm link: Chọn text > Click 🔗 Link > Nhập URL",
        ],
      },
    ],
  },
  {
    id: "troubleshooting",
    title: "8. Xử lý Sự cố",
    content: [
      {
        type: "heading",
        text: "Lỗi: 'Firebase: Error (auth/configuration-not-found)'",
      },
      {
        type: "text",
        text: "Giải pháp:",
      },
      {
        type: "list",
        items: [
          "Kiểm tra lại các biến môi trường trong .env.local",
          "Đảm bảo tất cả các biến NEXT_PUBLIC_FIREBASE_* đã được set đúng",
          "Restart dev server sau khi cập nhật .env.local",
        ],
      },
      {
        type: "heading",
        text: "Lỗi: 'Permission denied' khi upload ảnh",
      },
      {
        type: "text",
        text: "Giải pháp:",
      },
      {
        type: "list",
        items: [
          "Đảm bảo bạn đã đăng nhập",
          "Kiểm tra Storage Rules trong Firebase Console",
          "Kiểm tra kích thước file không vượt quá 10MB",
        ],
      },
      {
        type: "heading",
        text: "Lỗi: 'Permission denied' khi tạo bài viết",
      },
      {
        type: "text",
        text: "Giải pháp:",
      },
      {
        type: "list",
        items: [
          "Đảm bảo bạn đã đăng nhập",
          "Kiểm tra Firestore Rules trong Firebase Console",
          "Đảm bảo rules cho phép request.auth != null",
        ],
      },
      {
        type: "heading",
        text: "Lỗi: 'Slug already exists'",
      },
      {
        type: "text",
        text: "Giải pháp:",
      },
      {
        type: "list",
        items: [
          "Slug (URL) phải là duy nhất",
          "Thay đổi slug thành một giá trị khác",
          "Hoặc xóa bài viết/dự án cũ có cùng slug",
        ],
      },
    ],
  },
];

export default function DocsPage() {
  return (
    <div className="mx-auto max-w-[1440px] w-full">
      <div className="max-w-[1170px] mx-auto w-full px-4 xl:px-0 py-8 md:py-16">
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            Hướng dẫn Vận hành CMS
          </h1>
          <p className="text-lg text-stone-600">
            Hướng dẫn chi tiết cho admin về cách setup và quản lý nội dung website Anvie Home
          </p>
        </div>

        {/* Content */}
        <div className="space-y-12">
          {sections.map((section) => (
            <section key={section.id} className="bg-white rounded-lg border border-stone-200 p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-semibold text-stone-900 mb-6">
                {section.title}
              </h2>
              <div className="space-y-4">
                {section.content.map((item, index) => {
                  if (item.type === "heading") {
                    return (
                      <h3 key={index} className="text-xl font-semibold text-stone-900 mt-6 mb-3">
                        {item.text}
                      </h3>
                    );
                  }
                  if (item.type === "text") {
                    return (
                      <p key={index} className="text-base text-stone-700 leading-relaxed">
                        {item.text}
                      </p>
                    );
                  }
                  if (item.type === "code") {
                    return (
                      <pre
                        key={index}
                        className="bg-stone-50 border border-stone-200 rounded-lg p-4 overflow-x-auto text-sm"
                      >
                        <code className="text-stone-800">{item.text}</code>
                      </pre>
                    );
                  }
                  if (item.type === "list") {
                    return (
                      <ul key={index} className="list-disc list-inside space-y-2 text-base text-stone-700 ml-4">
                        {item.items?.map((listItem, listIndex) => (
                          <li key={listIndex}>{listItem}</li>
                        ))}
                      </ul>
                    );
                  }
                  if (item.type === "warning") {
                    return (
                      <div
                        key={index}
                        className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4"
                      >
                        <p className="text-yellow-800 font-medium">⚠️ {item.text}</p>
                      </div>
                    );
                  }
                  if (item.type === "info") {
                    return (
                      <div
                        key={index}
                        className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4"
                      >
                        <p className="text-blue-800">ℹ️ {item.text}</p>
                      </div>
                    );
                  }
                  if (item.type === "success") {
                    return (
                      <div
                        key={index}
                        className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4"
                      >
                        <p className="text-green-800">✅ {item.text}</p>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </section>
          ))}
        </div>

        {/* Quick Links */}
        <div className="mt-12 bg-stone-50 rounded-lg border border-stone-200 p-6">
          <h3 className="text-xl font-semibold text-stone-900 mb-4">Liên kết nhanh</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <a
              href="/admin"
              className="block p-4 bg-white rounded-lg border border-stone-200 hover:shadow-md transition-shadow"
            >
              <p className="font-medium text-stone-900">Admin Dashboard</p>
              <p className="text-sm text-stone-600 mt-1">Quản lý bài viết và dự án</p>
            </a>
            <a
              href="/admin/tin-tuc"
              className="block p-4 bg-white rounded-lg border border-stone-200 hover:shadow-md transition-shadow"
            >
              <p className="font-medium text-stone-900">Tạo bài viết Tin tức</p>
              <p className="text-sm text-stone-600 mt-1">Viết và đăng bài viết mới</p>
            </a>
            <a
              href="/admin/du-an"
              className="block p-4 bg-white rounded-lg border border-stone-200 hover:shadow-md transition-shadow"
            >
              <p className="font-medium text-stone-900">Tạo Dự án</p>
              <p className="text-sm text-stone-600 mt-1">Thêm dự án kiến trúc mới</p>
            </a>
            <a
              href="/login"
              className="block p-4 bg-white rounded-lg border border-stone-200 hover:shadow-md transition-shadow"
            >
              <p className="font-medium text-stone-900">Đăng nhập</p>
              <p className="text-sm text-stone-600 mt-1">Truy cập admin panel</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

