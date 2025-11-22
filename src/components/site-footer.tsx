const socials = [
  { label: "Facebook", href: "https://facebook.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Pinterest", href: "https://pinterest.com" },
];

const serviceLinks = [
  "Thiết kế kiến trúc",
  "Thiết kế nội thất",
  "Thi công trọn gói",
  "Tư vấn phong thuỷ",
];

const newsroom = [
  "Xu hướng vật liệu 2025",
  "Anvie Story",
  "Chia sẻ kinh nghiệm",
  "Hậu trường thi công",
];

const supportLinks = [
  "Quy trình Anvie",
  "Cam kết bảo hành",
  "Bảng giá tham khảo",
  "Tuyển dụng",
];

export function SiteFooter() {
  return (
    <footer className="mt-20 bg-[#24170f] text-white">
      <div className="bg-[#2e1f16]/95">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <p className="font-sans text-3xl">Anvie Home</p>
            <p className="text-sm text-white/80">
              Chúng tôi kiến tạo những không gian an yên, tôn trọng bản sắc địa phương và
              phong cách sống tinh tế của gia chủ.
            </p>
            <div className="grid gap-5 text-sm text-white/80 sm:grid-cols-2">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/60">Hotline</p>
                <p className="mt-2 text-base text-white">0345 954 988</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/60">Email</p>
                <p className="mt-2 text-base text-white">hello@anvie.vn</p>
              </div>
              <div className="sm:col-span-2">
                <p className="text-xs uppercase tracking-[0.3em] text-white/60">Studio</p>
                <p className="mt-2 text-base text-white">
                  Số 45, LK4 – KĐT Lộc Ninh, Phường Chương Mỹ, Hà Nội
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-white/80">
              {socials.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="grid gap-10 text-sm sm:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                Dịch vụ
              </p>
              <div className="mt-4 flex flex-col gap-3 text-white/80">
                {serviceLinks.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                Tin tức
              </p>
              <div className="mt-4 flex flex-col gap-3 text-white/80">
                {newsroom.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                Hỗ trợ
              </p>
              <div className="mt-4 flex flex-col gap-3 text-white/80">
                {supportLinks.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                Giờ làm việc
              </p>
              <div className="mt-4 flex flex-col gap-2 text-white/80">
                <span>Thứ 2 - Thứ 6: 08:00 - 18:00</span>
                <span>Thứ 7: 08:00 - 16:00</span>
                <span>Chủ nhật: Theo lịch hẹn</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/15 px-6 py-4 text-center text-xs text-white/70">
        © {new Date().getFullYear()} Anvie Home. All rights reserved.
      </div>
    </footer>
  );
}

