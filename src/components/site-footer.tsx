import Image from "next/image";
import Link from "next/link";

const serviceLinks = [
  "Nội thất hiện đại",
  "Kiến trúc nhà phố",
  "Kiến trúc biệt thự",
  "Kiến trúc nhà cấp 4",
];

const newsroom = [
  "Cách chọn xưởng gia công uy tín",
  "Xu hướng thiết kế 2025",
  "Phong cách nội thất hiện đại",
  "Thiết kế nội thất biệt thự Vinhomes Greenbay",
];

const supportLinks = [
  "Quy trình thiết kế & thi công",
  "Chính sách bảo hành",
];

export function SiteFooter() {
  return (
    <footer className="mt-20 bg-[#B38147] h-[540px] flex items-center justify-center flex-col w-full">
      <div className="mx-auto max-w-[1170px] px-6 py-12">
      <div  className="flex items-center gap-1 text-white mb-6">
              <Link href="/" >
              <Image src="/logo_123.svg" alt="Anvie Home" width={62} height={62} />
              </Link>
              <div className="mt-2">
                <p className="text-[14px] font-normal uppercase">Anvie Home</p>
                <p className="text-[8px] font-normal">Architecture & Interior</p>
              </div>  
          </div>
        <div className="grid gap-10 md:grid-cols-12">
          {/* Column 1: Logo & Contact */}
          <div className="space-y-6 text-white col-span-5">
          
            <div className="space-y-4 text-base text-white">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>Số điện thoại: 0345.954.988</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>Email: anviehome68@gmail.com</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>Địa chỉ: Số 45, LK4 - KĐT Lộc Ninh, Phường <br /> Chương Mỹ, Hà Nội</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-white hover:text-white/80 transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-white hover:text-white/80 transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-white hover:text-white/80 transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
      <div className="col-span-7 grid gap-16 md:grid-cols-12">

          {/* Column 2: Dịch vụ nổi bật */}
          <div className="col-span-4">
            <p className="font-[400] text-[16px] font-normal text-white mb-4">Dịch vụ nổi bật</p>
            <div className="flex flex-col gap-3 text-base font-semibold text-white">
              {serviceLinks.map((item) => (
                <Link key={item} href="#" className="hover:text-white/80 transition">
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Tin tức nổi bật */}
          <div className="col-span-4">
            <p className="font-[400] text-[16px] font-normal text-white mb-4">Tin tức nổi bật</p>
            <div className="flex flex-col gap-3 text-base font-semibold text-white">
              {newsroom.map((item) => (
                <Link key={item} href="#" className="hover:text-white/80 transition">
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 4: Hỗ trợ khách hàng */}
          <div className="col-span-4">
            <p className="font-[400] text-[16px] font-normal text-white mb-4">Hỗ trợ khách hàng</p>
            <div className="flex flex-col gap-3 text-base font-semibold text-white">
              {supportLinks.map((item) => (
                <Link key={item} href="#" className="hover:text-white/80 transition">
                  {item}
                </Link>
              ))}
            </div>
          </div>
          </div>
        </div>
      </div>
      <div className=" px-6 py-4 text-center text-sm text-white/70 w-full">
        © 2025 Anvie. All Rights Reserved
      </div>
    </footer>
  );
}

