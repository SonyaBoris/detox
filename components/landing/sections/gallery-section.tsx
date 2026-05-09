import GalleryGrid from "@/components/landing/gallery-grid";
import SectionBlock from "@/components/landing/section-block";

const galleryCaptions = [
  "Практики у воды",
  "Банные ритуалы",
  "Вечер у костра",
  "Мастер-класс по полезной еде",
  "Утренние зарядки",
  "Спокойствие ретрит-центра",
];

export default function GallerySection() {
  return (
    <SectionBlock id="gallery" title="Фотогалерея">
      <GalleryGrid captions={galleryCaptions} />
    </SectionBlock>
  );
}
