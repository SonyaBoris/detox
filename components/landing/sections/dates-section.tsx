import SectionBlock from "@/components/landing/section-block";

export default function DatesSection() {
  return (
    <SectionBlock id="dates" title="Ближайшие даты">
      <div className="dates-grid">
        <article>
          <p className="date">8–14 июля</p>
          <p>7 дней восстановления и практик</p>
        </article>
        <article>
          <p className="date">9–16 сентября</p>
          <p>8 дней глубокой перезагрузки</p>
        </article>
      </div>
    </SectionBlock>
  );
}
