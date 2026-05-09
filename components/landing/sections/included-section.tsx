import CheckList from "@/components/landing/check-list";
import SectionBlock from "@/components/landing/section-block";

const includedItems = [
  "Проживание в ретрит-центре Шавасана на берегу Волги",
  "Питание по методике Марвы Оганян и гурмэ блюда",
  "Все процедуры и занятия программы",
  "Диагностика (анализ крови и гемоскан) и консультации доктора",
  "Баня, костер и активности на территории",
];

export default function IncludedSection() {
  return (
    <SectionBlock id="included" title="Что включено">
      <CheckList items={includedItems} />
    </SectionBlock>
  );
}
