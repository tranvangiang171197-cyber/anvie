import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { ArticleCard } from "@/components/content-card";
import { getCollectionSummaries } from "@/lib/content";

export default async function NewsPage() {
  const news = await getCollectionSummaries("news");

  if (!news.length) {
    notFound();
  }

  return (
    <>
      <PageHero
        kicker="Tin tức"
        title="Góc nhìn về vật liệu, công nghệ và phong cách sống"
        description="Nhật ký nghiên cứu của An Vi Studio dành cho các gia chủ và cộng sự."
      />

      <section className="space-y-8">
        <SectionHeading
          title="Bài viết mới nhất"
          description="Tổng hợp kiến thức, case study và bản tin studio."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {news.map((article) => (
            <ArticleCard
              key={article.slug}
              href={`/tin-tuc/${article.slug}`}
              title={article.title}
              summary={article.summary}
              date={article.date}
              category={article.category}
            />
          ))}
        </div>
      </section>
    </>
  );
}

