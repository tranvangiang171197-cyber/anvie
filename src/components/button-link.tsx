import Link from "next/link";
import Image from "next/image";
import { IoArrowForwardSharp } from "react-icons/io5";

type ButtonVariant = "primary" | "ghost" | "ghostLight";

type ButtonLinkProps = {
  href: string;
  label: string;
  variant?: ButtonVariant;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[#B38147] text-white hover:bg-terracotta-500 shadow-[0_10px_25px_rgba(173,99,69,0.25)]",
  ghost:
    "border border-stone-400/60 text-stone-900 hover:border-stone-800 hover:text-stone-950",
  ghostLight:
    "border border-white/60 text-white hover:border-white hover:bg-white/10",
};

export function ButtonLink({ href, label, variant = "primary" }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center h-10 px-5 py-2 text-base font-medium transition ${variantClasses[variant]}`}
    >
      {label} 
      <IoArrowForwardSharp className="ml-2 w-5 h-5" />
    </Link>
  );
}

