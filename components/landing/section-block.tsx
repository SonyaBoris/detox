import type { ReactNode } from "react";

type SectionBlockProps = {
  id: string;
  title: string;
  className?: string;
  hideTitle?: boolean;
  children: ReactNode;
};

export default function SectionBlock({
  id,
  title,
  className,
  hideTitle = false,
  children,
}: SectionBlockProps) {
  return (
    <section id={id} className={`section-wrap ${className ?? ""}`.trim()}>
      {!hideTitle ? <h2>{title}</h2> : null}
      {children}
    </section>
  );
}
