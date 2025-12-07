import { ButtonLink } from "@/components/button-link";

type HeroAction = {
  label: string;
  href: string;
  variant?: "primary" | "ghost";
};

type PageHeroProps = {
  kicker?: string;
  title: string;
  description: string;
  actions?: HeroAction[];
};

export function PageHero({ kicker, title, description, actions = [] }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden rounded-3xl  px-6 py-16 shadow-[0_20px_60px_rgba(15,23,42,0.08)] md:px-16">
      <div className="max-w-3xl space-y-6">
      
        <h1 className="text-4xl font-sans leading-tight text-white md:text-5xl">
          {title}
        </h1>
        <p className="text-base text-white/80 md:text-lg">{description}</p>
        {actions.length ? (
          <div className="flex flex-wrap gap-3">
            {actions.map((action) => (
              <ButtonLink key={action.href} {...action} />
            ))}
          </div>
        ) : null}
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(244,198,164,0.35),_transparent_55%)]" />
      <div className="pointer-events-none absolute inset-y-0 right-6 hidden w-64 rounded-[40%] border border-dashed border-terracotta-300/60 md:block" />
    </section>
  );
}

