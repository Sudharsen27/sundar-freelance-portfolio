type SectionHeaderProps = {
  badge?: string;
  title: string;
  subtitle: string;
  align?: "center" | "left";
  headingId?: string;
};

export default function SectionHeader({
  badge,
  title,
  subtitle,
  align = "center",
  headingId,
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`mb-12 sm:mb-16 ${alignClass}`}>
      {badge ? <span className="badge mb-4 inline-flex">{badge}</span> : null}
      <h2 id={headingId} className="section-heading">
        {title}
      </h2>
      <p className={`section-subheading ${align === "left" ? "mx-0" : ""}`}>
        {subtitle}
      </p>
    </div>
  );
}
