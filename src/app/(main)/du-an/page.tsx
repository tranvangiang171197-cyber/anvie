import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { ContentCard } from "@/components/content-card";
import { getCollectionSummaries } from "@/lib/content";

export default async function ProjectsPage() {
  const projects = await getCollectionSummaries("projects");

  if (!projects.length) {
    notFound();
  }

  return (
    <>
      <PageHero
        kicker="Dự án"
        title="Không gian được may đo cho từng gia chủ"
        description="Danh mục dự án nghỉ dưỡng, nhà ở và studio sáng tạo mà chúng tôi đang thực hiện."
      />

      <section className="space-y-8">
        <SectionHeading
          title="Tất cả dự án"
          description="Cập nhật trạng thái, địa điểm và hình ảnh minh hoạ mới nhất."
        />
        <div className="grid gap-8 md:grid-cols-2">
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
      </section>
    </>
  );
}

