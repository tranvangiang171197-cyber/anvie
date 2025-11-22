import Link from "next/link";
import { navLinks } from "@/lib/navigation";
import Image from "next/image";
export function SiteHeader() {
  return (
    <header className="pointer-events-none absolute left-1/2 top-6 z-30 w-full -translate-x-1/2 px-4">
      <div className="pointer-events-auto mx-auto flex max-w-[1170px] h-[80px] items-center justify-between  bg-[rgba(0, 0, 0, 0.2)] px-10 py-4 text-white shadow-[0_20px_60px_rgba(19,18,16,0.35)] backdrop-blur-[10px]">
        <Link href="/" className="">
          <Image src="/logo.svg" alt="Anvie Home" width={115} height={48} />
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


