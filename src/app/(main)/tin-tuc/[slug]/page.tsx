import { notFound } from "next/navigation";
import { getCollectionSlugs, getEntry } from "@/lib/content";
import { formatDate } from "@/lib/formatters";

type NewsPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await getCollectionSlugs("news");
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: NewsPageProps) {
  const { slug } = await params;
  try {
    const article = await getEntry("news", slug);
    return {
      title: `${article.title} | Tin tức`,
      description: article.summary,
    };
  } catch {
    return { title: "Tin tức" };
  }
}

export default async function NewsDetail({ params }: NewsPageProps) {
  const { slug } = await params;

  const article = await getEntry("news", slug).catch(() => null);

  if (!article) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-[1440px] w-full mt-[100px]">
      <article className="max-w-[1170px] mx-auto w-full px-4 xl:px-0 py-8 md:py-16 space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-500">
            {article.category ?? "Tin tức"}
          </p>
          <h1 className="font-sans text-4xl text-stone-900">{article.title}</h1>
          <p className="text-sm text-stone-500">
            {formatDate(article.date)}
            {article.readingTime ? ` • ${article.readingTime}` : null}
          </p>
        </div>

        {/* Hero Image */}
        {article.heroImage && (
          <div
            className="h-80  bg-cover bg-center shadow-[0_40px_100px_rgba(15,23,42,0.15)]"
            style={{
              backgroundImage: `url(${article.heroImage})`,
            }}
          />
        )}

        {/* Content */}
        <div
          className="prose-content  border border-stone-200/80 bg-white px-4 xl:px-8 py-10 shadow-[0_30px_80px_rgba(15,23,42,0.08)]"
          dangerouslySetInnerHTML={{ __html: article.contentHtml }}
        />
      </article>
    </div>
  );
}

