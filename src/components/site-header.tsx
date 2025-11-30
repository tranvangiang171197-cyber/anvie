"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { navLinks } from "@/lib/navigation";

const subMenuItems = [
  { label: "Về Anvie", href: "/an-vi-an-yen" },
  { label: "Quy Trình", href: "/thiet-ke-noi-that" },
  { label: "Xưởng sản xuất", href: "#xuong-san-xuat" },
];

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsSubMenuOpen(false);
      }
    };

    if (isSubMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSubMenuOpen]);

  return (
    <>
      <header className="pointer-events-none absolute left-1/2 top-6 z-30 w-full -translate-x-1/2 px-4">
        <div className="pointer-events-auto mx-auto flex max-w-[1170px] h-[80px] items-center justify-between bg-black/20 px-10 py-4 text-white shadow-[0_20px_60px_rgba(19,18,16,0.35)] backdrop-blur-[10px]">
          <Link href="/" className="flex items-center gap-1">
            <Image src="/logo_123.svg" alt="Anvie Home" width={45} height={45} />
            <div className="mt-2">
              <p className="text-[14px] font-normal uppercase">Anvie Home</p>
              <p className="text-[8px] font-normal">Architecture & Interior</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 text-base font-medium lg:flex">
            {navLinks.map((link) => (
              <div key={link.href} className="relative" ref={link.label === "An Vi & An Yên" ? dropdownRef : null}>
                {link.label === "An Vi & An Yên" ? (
                  <>
                    <button
                      onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
                      className="text-white transition hover:text-white/80 flex items-center gap-1"
                    >
                      {link.label}
                      <svg
                        className={`w-4 h-4 transition-transform ${
                          isSubMenuOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {isSubMenuOpen && (
                      <div className="absolute top-full left-0 mt-2 bg-black/90 backdrop-blur-sm rounded-lg shadow-lg py-2 min-w-[200px] z-50">
                        {subMenuItems.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsSubMenuOpen(false)}
                            className="block px-4 py-2 text-white hover:bg-white/10 transition"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="text-white transition hover:text-white/80"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-2/3 bg-white shadow-xl">
            <div className="flex flex-col h-full">
              {/* Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <Link href="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                  <Image src="/logo_123.svg" alt="Anvie Home" width={40} height={40} />
                  <div>
                    <p className="text-sm font-semibold text-black uppercase">Anvie Home</p>
                    <p className="text-xs text-gray-600">Interior & Design</p>
                  </div>
                </Link>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-black hover:text-gray-600"
                  aria-label="Close menu"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Menu Items */}
              <nav className="flex-1 overflow-y-auto p-6">
                <div className="space-y-1">
                  {navLinks.map((link) => (
                    <div key={link.href}>
                      {link.label === "An Vi & An Yên" ? (
                        <div>
                          <button
                            onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
                            className="w-full flex items-center justify-between px-4 py-3 text-left text-black hover:bg-[#B38147] hover:text-white transition rounded-lg"
                          >
                            <span>{link.label}</span>
                            <svg
                              className={`w-4 h-4 transition-transform ${
                                isSubMenuOpen ? "rotate-180" : ""
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </button>
                          {isSubMenuOpen && (
                            <div className="ml-4 mt-1 space-y-1">
                              {subMenuItems.map((item) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  onClick={() => {
                                    setIsMenuOpen(false);
                                    setIsSubMenuOpen(false);
                                  }}
                                  className="block px-4 py-2 text-gray-700 hover:bg-[#B38147] hover:text-white transition rounded-lg"
                                >
                                  {item.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <Link
                          href={link.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="block px-4 py-3 text-black hover:bg-[#B38147] hover:text-white transition rounded-lg"
                        >
                          {link.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
