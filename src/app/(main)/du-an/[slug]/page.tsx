import { notFound } from "next/navigation";
import { getCollectionSlugs, getEntry } from "@/lib/content";
import { formatDate } from "@/lib/formatters";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await getCollectionSlugs("projects");
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;

  try {
    const project = await getEntry("projects", slug);
    return {
      title: `${project.title} | Dự án`,
      description: project.summary,
    };
  } catch {
    return {
      title: "Dự án",
    };
  }
}

export default async function ProjectDetail({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project = await getEntry("projects", slug).catch(() => null);

  if (!project) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-[1440px] w-full mt-[100px]">
      <article className="max-w-[1170px] mx-auto w-full px-4 xl:px-0 py-8 md:py-16 space-y-10">
        {/* Hero Image */}
        {project.heroImage && (
          <div
            className="h-96 w-full  bg-cover bg-center shadow-[0_40px_120px_rgba(15,23,42,0.2)]"
            style={{
              backgroundImage: `url(${project.heroImage})`,
            }}
          />
        )}

        {/* Header and Info */}
        <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-500">
              {project.category ?? "Dự án"}
            </p>
            <h1 className="font-sans text-4xl text-stone-900">{project.title}</h1>
            <p className="text-sm text-stone-500">{formatDate(project.date)}</p>
            {project.summary ? (
              <p className="text-base text-stone-600">{project.summary}</p>
            ) : null}
          </div>
          <div className=" border border-stone-200/80 bg-white px-6 py-6 text-sm text-stone-600 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
            <ul className="space-y-2">
              {project.location ? (
                <li className="flex justify-between">
                  <span className="text-stone-500">Địa điểm</span>
                  <span className="text-stone-900">{project.location}</span>
                </li>
              ) : null}
              {project.status ? (
                <li className="flex justify-between">
                  <span className="text-stone-500">Trạng thái</span>
                  <span className="text-stone-900">{project.status}</span>
                </li>
              ) : null}
              {project.area ? (
                <li className="flex justify-between">
                  <span className="text-stone-500">Quy mô</span>
                  <span className="text-stone-900">{project.area}</span>
                </li>
              ) : null}
            </ul>
          </div>
        </div>

        {/* Content */}
        <div
          className="prose-content  border border-stone-200/80 bg-white px-4 xl:px-8 py-10 shadow-[0_35px_90px_rgba(15,23,42,0.08)]"
          dangerouslySetInnerHTML={{ __html: project.contentHtml }}
        />
      </article>
    </div>
  );
}

