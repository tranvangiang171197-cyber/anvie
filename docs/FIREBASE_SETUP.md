# Firebase Setup Guide

Hướng dẫn thiết lập Firebase cho hệ thống quản lý nội dung (CMS) của Anvie.

## 1. Tạo Firebase Project

1. Truy cập [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" hoặc chọn project có sẵn
3. Điền tên project và làm theo hướng dẫn

## 2. Cấu hình Firebase

### 2.1. Tạo Web App

1. Trong Firebase Console, click vào biểu tượng Web (`</>`)
2. Đăng ký app với nickname (ví dụ: "anvie-web")
3. Copy các thông tin cấu hình:
   - API Key
   - Auth Domain
   - Project ID
   - Storage Bucket
   - Messaging Sender ID
   - App ID

### 2.2. Thiết lập Firestore Database

1. Vào **Firestore Database** trong Firebase Console
2. Click "Create database"
3. Chọn chế độ:
   - **Production mode** (khuyến nghị cho production)
   - **Test mode** (chỉ dùng cho development, sẽ tự động cho phép read/write trong 30 ngày)
4. Chọn location (ví dụ: `asia-southeast1` cho Việt Nam)
5. Click "Enable"

### 2.3. Thiết lập Storage

1. Vào **Storage** trong Firebase Console
2. Click "Get started"
3. Chọn chế độ bảo mật (giống Firestore)
4. Chọn location (nên giống Firestore)
5. Click "Done"

### 2.4. Thiết lập Authentication

1. Vào **Authentication** trong Firebase Console
2. Click "Get started"
3. Chọn **Email/Password** trong "Sign-in method"
4. Click "Enable" và "Save"
5. Tạo user admin:
   - Vào tab **Users**
   - Click "Add user"
   - Nhập email và password cho admin
   - Click "Add user"

**Lưu ý**: Lưu lại email và password này để đăng nhập vào admin panel.

### 2.5. Cấu hình Security Rules

#### Firestore Rules

Vào **Firestore Database > Rules**, cập nhật rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Cho phép đọc công khai (cho trang tin tức và dự án)
    match /news/{document} {
      allow read: if true;
      // Chỉ cho phép ghi khi đã đăng nhập
      allow write: if request.auth != null;
    }
    
    match /projects/{document} {
      allow read: if true;
      // Chỉ cho phép ghi khi đã đăng nhập
      allow write: if request.auth != null;
    }
  }
}
```

#### Storage Rules

Vào **Storage > Rules**, cập nhật rules:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    // Cho phép đọc công khai (để hiển thị ảnh)
    match /{allPaths=**} {
      allow read: if true;
    }
    
    // Chỉ cho phép upload khi đã đăng nhập
    match /{folder}/{fileName} {
      allow write: if request.auth != null 
        && request.resource.size < 10 * 1024 * 1024 // Max 10MB
        && request.resource.contentType.matches('image/.*');
    }
  }
}
```

## 3. Cấu hình Environment Variables

Tạo file `.env.local` trong root của project:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

**Lưu ý**: 
- Thay thế các giá trị bằng thông tin từ Firebase Console
- File `.env.local` không nên commit vào Git (đã có trong `.gitignore`)

## 4. Cấu trúc dữ liệu

### Collection: `news`

Mỗi document trong collection `news` có cấu trúc:

```typescript
{
  slug: string;              // URL slug (unique)
  title: string;             // Tiêu đề
  date: Timestamp;           // Ngày đăng
  summary?: string;          // Tóm tắt
  heroImage?: string;        // URL ảnh đại diện
  category?: string;         // Danh mục
  author?: string;          // Tác giả
  readingTime?: string;      // Thời gian đọc
  contentHtml: string;      // Nội dung HTML
  createdAt: Timestamp;     // Ngày tạo
  updatedAt: Timestamp;     // Ngày cập nhật
}
```

### Collection: `projects`

Mỗi document trong collection `projects` có cấu trúc:

```typescript
{
  slug: string;              // URL slug (unique)
  title: string;             // Tên dự án
  date: Timestamp;           // Ngày đăng
  summary?: string;          // Tóm tắt
  heroImage?: string;        // URL ảnh đại diện
  category?: string;         // Danh mục
  location?: string;         // Địa điểm
  status?: string;           // Trạng thái
  area?: string;             // Quy mô
  contentHtml: string;       // Nội dung HTML
  createdAt: Timestamp;     // Ngày tạo
  updatedAt: Timestamp;     // Ngày cập nhật
}
```

## 5. Đăng nhập Admin

1. Truy cập `/login` trên website
2. Nhập email và password đã tạo trong Firebase Authentication
3. Click "Đăng nhập"
4. Sau khi đăng nhập thành công, bạn sẽ được chuyển đến `/admin`

**Lưu ý**: 
- Chỉ những user đã được tạo trong Firebase Authentication mới có thể đăng nhập
- Phiên đăng nhập sẽ tự động hết hạn sau một thời gian, bạn cần đăng nhập lại

## 6. Sử dụng Admin Pages

### 6.1. Tạo bài viết tin tức

1. Truy cập `/admin/tin-tuc`
2. Điền thông tin cơ bản (tiêu đề, slug, ngày đăng, v.v.)
3. Viết nội dung trong editor TipTap
4. Upload ảnh bằng cách click nút "📷 Ảnh" trong toolbar
5. Click "Tạo bài viết"

### 6.2. Tạo dự án

1. Truy cập `/admin/du-an`
2. Điền thông tin dự án (tên, địa điểm, trạng thái, quy mô, v.v.)
3. Viết nội dung trong editor TipTap
4. Upload ảnh bằng cách click nút "📷 Ảnh" trong toolbar
5. Click "Tạo dự án"

## 7. Tính năng

### Upload ảnh

- Hỗ trợ upload nhiều ảnh trong editor
- Ảnh được lưu vào Firebase Storage
- Tự động chèn vào editor sau khi upload thành công
- Hỗ trợ các định dạng: JPEG, PNG, WebP, GIF
- Giới hạn kích thước: 10MB/ảnh

### Rich Text Editor

- TipTap editor với các tính năng:
  - Bold, Italic
  - Headings (H1, H2)
  - Bullet lists, Numbered lists
  - Insert images
  - Insert links
  - Và nhiều tính năng khác

## 8. Troubleshooting

### Lỗi: "Firebase: Error (auth/configuration-not-found)"

- Kiểm tra lại các biến môi trường trong `.env.local`
- Đảm bảo tất cả các biến `NEXT_PUBLIC_FIREBASE_*` đã được set đúng

### Lỗi: "Permission denied" khi upload ảnh

- Kiểm tra Storage Rules trong Firebase Console
- Đảm bảo rules cho phép write operations

### Lỗi: "Permission denied" khi tạo bài viết

- Kiểm tra Firestore Rules trong Firebase Console
- Đảm bảo rules cho phép write operations cho collections `news` và `projects`

### Lỗi: "Unauthorized. Please login" khi tạo bài viết

- Đảm bảo bạn đã đăng nhập ở `/login`
- Kiểm tra xem token có còn hợp lệ không (thử đăng nhập lại)
- Kiểm tra Firestore Rules đã cho phép `request.auth != null`

### Lỗi: "Permission denied" khi upload ảnh

- Đảm bảo bạn đã đăng nhập
- Kiểm tra Storage Rules đã cho phép authenticated users upload
- Kiểm tra kích thước file không vượt quá 10MB

## 9. Bảo mật (Production)

Trong môi trường production, bạn nên:

1. **Thêm Authentication**: Sử dụng Firebase Authentication để xác thực người dùng trước khi cho phép tạo/sửa/xóa nội dung
2. **Cập nhật Security Rules**: Chỉ cho phép authenticated users mới có thể write
3. **Sử dụng Firebase Admin SDK**: Thay vì client SDK trong API routes, sử dụng Admin SDK với service account để có quyền kiểm soát tốt hơn

## 10. Tài liệu tham khảo

- [Firebase Documentation](https://firebase.google.com/docs)
- [Firestore Documentation](https://firebase.google.com/docs/firestore)
- [Firebase Storage Documentation](https://firebase.google.com/docs/storage)
- [TipTap Documentation](https://tiptap.dev/)

