import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { ContentCard } from "@/components/content-card";
import { getCollectionSummaries } from "@/lib/content";

export default async function ProjectsPage() {
  const projects = await getCollectionSummaries("projects");

  return (
    <div className="mx-auto max-w-[1440px] w-full">
      {/* Hero Section */}
      
      <section className="px-4 xl:px-0 py-8 md:py-16 w-full relative">
      <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/duan/anvi_home.png')` }}
        />
        <div className="max-w-[1170px] mx-auto w-full">
          <PageHero
            kicker="Dự án"
            title="Không gian được may đo cho từng gia chủ"
            description="Danh mục dự án nghỉ dưỡng, nhà ở và studio sáng tạo mà chúng tôi đang thực hiện."
          />
        </div>
      </section>

      {/* Projects List Section */}
      <section className="max-w-[1170px] mx-auto w-full px-4 xl:px-0 py-8 md:pb-16">
        <SectionHeading
          title="Tất cả dự án"
          description="Cập nhật trạng thái, địa điểm và hình ảnh minh hoạ mới nhất."
        />
        {projects.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 mt-8">
            {projects.map((project) => (
              <ContentCard
                key={project.slug}
                href={`/du-an/${project.slug}`}
                title={project.title}
                summary={project.summary}
                heroImage={project.heroImage}
                meta={[project.location, project.area].filter(Boolean).join(" • ")}
                tag={project.status}
              />
            ))}
          </div>
        ) : (
          <div className="mt-8 text-center py-12">
            <p className="text-stone-600">Chưa có dự án nào. Vui lòng quay lại sau.</p>
          </div>
        )}
      </section>
    </div>
  );
}

