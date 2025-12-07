import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Anvie Home | Kiến trúc & Nội thất",
    template: "%s | Anvie Home",
  },
  description:
    "Anvie Home đồng hành thiết kế & thi công nội thất trọn gói, kiến tạo không gian sống an yên.",
  metadataBase: new URL("https://anvi.example.com"),
  openGraph: {
    title: "Anvie Home",
    description:
      "Thiết kế kiến trúc chú trọng chất liệu bản địa, công nghệ thông minh và cảm xúc an yên.",
    url: "https://anvi.example.com",
    siteName: "Anvie Home",
    locale: "vi_VN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${sans.variable} bg-[#FFFFFF] w-full`}>
        <div className="min-h-screen flex flex-col gap-0 w-full">
          {children}
        </div>
      </body>
    </html>
  );
}
