import CheckList from "@/components/landing/check-list";
import SectionBlock from "@/components/landing/section-block";

const whoFits = [
  "Тем, кто хочет улучшить здоровье без лекарств",
  "Тем, кто ищет экологичный подход к восстановлению организма",
  "Тем, кто хочет снизить вес и вернуть энергию",
  "Тем, кто давно откладывал перезагрузку тела и режима",
];

export default function WhoSection() {
  return (
    <SectionBlock id="who" title="Кому подходит" hideTitle>
      <div className="section-panel">
        <h2>Кому подходит</h2>
        <CheckList items={whoFits} />
        <p className="note">
          Голод чувствовать будет некогда: день заполнен практиками и
          активностями.
        </p>
      </div>
    </SectionBlock>
  );
}
