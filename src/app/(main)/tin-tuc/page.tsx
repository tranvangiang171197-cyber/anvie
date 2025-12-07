import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { ArticleCard } from "@/components/content-card";
import { getCollectionSummaries } from "@/lib/content";

export default async function NewsPage() {
  const news = await getCollectionSummaries("news");

  return (
    <div className="mx-auto max-w-[1440px] w-full">
        
      {/* Hero Section */}
      <section className="px-4 xl:px-0 py-8 md:py-16 w-full relative">
      <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/tintuc/brand.png')` }}
        />
        <div className="max-w-[1170px] mx-auto w-full">
          <PageHero
            kicker="Tin tức"
            title="Góc nhìn về vật liệu, công nghệ và phong cách sống"
            description="Nhật ký nghiên cứu của An Vi Studio dành cho các gia chủ và cộng sự."
          />
        </div>
      </section>

      {/* News List Section */}
      <section className="max-w-[1170px] mx-auto w-full px-4 xl:px-0 py-8 md:pb-16">
        <SectionHeading
          title="Bài viết mới nhất"
          description="Tổng hợp kiến thức, case study và bản tin studio."
        />
        {news.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 mt-8">
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
        ) : (
          <div className="mt-8 text-center py-12">
            <p className="text-stone-600">Chưa có bài viết nào. Vui lòng quay lại sau.</p>
          </div>
        )}
      </section>
    </div>
  );
}

