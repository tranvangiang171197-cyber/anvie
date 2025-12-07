# Google Analytics Setup Guide

Hướng dẫn thiết lập Google Analytics 4 (GA4) cho website Anvie.

## 1. Tạo Google Analytics Property

1. Truy cập [Google Analytics](https://analytics.google.com/)
2. Đăng nhập bằng tài khoản Google
3. Click "Admin" (biểu tượng bánh răng) ở góc dưới bên trái
4. Trong cột "Property", click "Create Property"
5. Điền thông tin:
   - Property name: "Anvie Home Website"
   - Reporting time zone: "(GMT+07:00) Ho Chi Minh"
   - Currency: "Vietnamese Dong (VND)"
6. Click "Next" và làm theo hướng dẫn
7. Sau khi tạo xong, bạn sẽ nhận được **Measurement ID** (dạng `G-XXXXXXXXXX`)

## 2. Cấu hình Environment Variable

Thêm Google Analytics Measurement ID vào file `.env.local`:

```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

**Lưu ý:**
- Thay `G-XXXXXXXXXX` bằng Measurement ID thực tế của bạn
- File `.env.local` không nên commit vào Git (đã có trong `.gitignore`)
- Restart dev server sau khi thêm biến môi trường

## 3. Kiểm tra

1. Restart dev server:
   ```bash
   npm run dev
   ```

2. Mở website trong browser

3. Mở Developer Tools (F12) > Network tab

4. Tìm request đến `googletagmanager.com` - nếu thấy request này nghĩa là GA đã được load

5. Hoặc vào Google Analytics > Realtime > Overview để xem traffic realtime

## 4. Cấu hình nâng cao (Tùy chọn)

### Track Page Views

Google Analytics sẽ tự động track page views khi sử dụng Next.js App Router. Component `GoogleAnalytics` đã được cấu hình để tự động track.

### Track Custom Events

Nếu muốn track custom events, bạn có thể sử dụng:

```typescript
// Track custom event
if (typeof window !== "undefined" && window.gtag) {
  window.gtag("event", "event_name", {
    event_category: "category",
    event_label: "label",
    value: 1,
  });
}
```

### Track Form Submissions

Để track form submissions, thêm vào handler:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  // Track form submission
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "form_submit", {
      event_category: "engagement",
      event_label: "contact_form",
    });
  }
  
  // ... rest of form submission logic
};
```

## 5. Production Setup

Khi deploy lên production (Vercel, Netlify, etc.):

1. Thêm environment variable `NEXT_PUBLIC_GA_MEASUREMENT_ID` vào platform settings
2. Redeploy application
3. Verify trong Google Analytics Realtime report

## 6. Privacy & GDPR

Nếu website của bạn phục vụ người dùng từ EU, bạn cần:

1. Thêm cookie consent banner
2. Chỉ load GA sau khi user đồng ý
3. Có thể sử dụng thư viện như `react-cookie-consent` hoặc `cookieconsent`

## 7. Troubleshooting

### GA không track được

- Kiểm tra `NEXT_PUBLIC_GA_MEASUREMENT_ID` đã được set đúng chưa
- Kiểm tra browser console có lỗi không
- Kiểm tra Network tab xem có request đến `googletagmanager.com` không
- Đảm bảo không có ad blocker chặn GA

### Không thấy data trong GA

- GA có thể mất vài phút để hiển thị data
- Kiểm tra Realtime report trước (sẽ hiển thị ngay lập tức)
- Standard reports có thể mất 24-48 giờ để có đầy đủ data

## 8. Tài liệu tham khảo

- [Google Analytics 4 Documentation](https://developers.google.com/analytics/devguides/collection/ga4)
- [Next.js Script Component](https://nextjs.org/docs/app/api-reference/components/script)
- [GA4 Event Reference](https://developers.google.com/analytics/devguides/collection/ga4/events)

