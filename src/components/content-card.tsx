import Link from "next/link";
import { formatDate } from "@/lib/formatters";

type ContentCardProps = {
  href: string;
  title: string;
  summary?: string;
  heroImage?: string;
  meta?: string;
  tag?: string;
};

export function ContentCard({
  href,
  title,
  summary,
  heroImage,
  meta,
  tag,
}: ContentCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col overflow-hidden rounded-3xl border border-stone-200/80 bg-white shadow-[0_25px_60px_rgba(15,23,42,0.08)] transition hover:-translate-y-1.5"
    >
      <div className="relative h-64 w-full overflow-hidden bg-stone-200">
        {heroImage ? (
          <div
            className="h-full w-full bg-cover bg-center transition group-hover:scale-105"
            style={{ backgroundImage: `url(${heroImage})` }}
            aria-hidden
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-stone-400">
            Hình minh hoạ
          </div>
        )}
        {tag ? (
          <span className="absolute left-5 top-5 rounded-full bg-white/80 px-3 py-1 text-xs font-medium uppercase tracking-widest text-stone-700">
            {tag}
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col gap-3 px-6 py-6">
        {meta ? (
          <p className="text-xs uppercase tracking-[0.3em] text-stone-500">
            {meta}
          </p>
        ) : null}
        <h3 className="font-sans text-2xl text-stone-900">{title}</h3>
        {summary ? <p className="text-sm text-stone-600">{summary}</p> : null}
        <div className="mt-auto text-xs font-medium text-stone-500 group-hover:text-terracotta-600">
          Xem chi tiết →
        </div>
      </div>
    </Link>
  );
}

type StackedCardProps = {
  href: string;
  title: string;
  summary?: string;
  date: string;
  category?: string;
};

export function ArticleCard({
  href,
  title,
  summary,
  date,
  category,
}: StackedCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col gap-3 rounded-2xl border border-stone-200/80 bg-white px-5 py-5 shadow-[0_12px_30px_rgba(15,23,42,0.08)] transition hover:-translate-y-1"
    >
      <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-stone-500">
        {category ? <span>{category}</span> : null}
        <span className="h-1 w-1 rounded-full bg-stone-400" />
        <span>{formatDate(date)}</span>
      </div>
      <h3 className="font-sans text-2xl text-stone-900">{title}</h3>
      {summary ? (
        <p className="text-sm text-stone-600">{summary}</p>
      ) : null}
      <div className="text-xs font-semibold text-terracotta-600">
        Đọc tiếp →
      </div>
    </Link>
  );
}

