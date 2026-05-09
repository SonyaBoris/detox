import type { ReactNode } from "react";

type SectionBlockProps = {
  id: string;
  title: string;
  className?: string;
  children: ReactNode;
};

export default function SectionBlock({
  id,
  title,
  className,
  children,
}: SectionBlockProps) {
  return (
    <section id={id} className={`section-wrap ${className ?? ""}`.trim()}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
