type SectionHeadingProps = {
  kicker?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  kicker,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={`space-y-3 ${align === "center" ? "text-center" : "text-left"}`}
    >
      {kicker ? (
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-stone-500">
          {kicker}
        </p>
      ) : null}
      <h2 className="font-sans text-3xl leading-snug text-stone-900 md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="text-base text-stone-600 md:text-lg">{description}</p>
      ) : null}
    </div>
  );
}

