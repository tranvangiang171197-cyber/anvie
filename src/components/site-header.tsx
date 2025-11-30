import Link from "next/link";
import { navLinks } from "@/lib/navigation";
import Image from "next/image";
export function SiteHeader() {
  return (
    <header className="pointer-events-none absolute left-1/2 top-6 z-30 w-full -translate-x-1/2 px-4">
      <div className="pointer-events-auto mx-auto flex max-w-[1170px] h-[80px] items-center justify-between  bg-black/20 px-10 py-4 text-white shadow-[0_20px_60px_rgba(19,18,16,0.35)] backdrop-blur-[10px]">
        <Link href="/" className="flex items-center gap-1">
          <Image src="/logo_123.svg" alt="Anvie Home" width={45} height={45} />
          <div className="mt-2">
          <p className="text-[14px] font-normal uppercase">Anvie Home</p>
          <p className="text-[8px] font-normal">Architecture & Interior</p>
          </div>
       
        </Link>
        <nav className="hidden items-center gap-6 text-base font-medium lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white transition hover:text-white/80"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}


