import ChipList, { type ChipListItem } from "@/components/landing/chip-list";
import SectionBlock from "@/components/landing/section-block";

const programItems: ChipListItem[] = [
  { title: "Оздоровительные зарядки", imageSrc: "/ozdorov.jpg" },
  { title: "Дыхательные практики", imageSrc: "/dihatelnie.jpg" },
  { title: "Медитации", imageSrc: "/meditation.jpg" },
  { title: "Лекции о ЗОЖ", imageSrc: "/lekcii.jpg" },
  {
    title: "Мастер-классы по приготовлению полезной еды",
    imageSrc: "/mk-eda.jpg",
  },
  { title: "Вечерние посиделки у костра", imageSrc: "/koster.jpg" },
  { title: "Водные виды спорта", imageSrc: "/vodnie.jpg" },
  { title: "Ежедневные банные процедуры", imageSrc: "/banya.jpg" },
];

export default function ProgramSection() {
  return (
    <SectionBlock id="program" title="Программа ретрита">
      <ChipList items={programItems} imageSrc="/1.jpg" />
    </SectionBlock>
  );
}
