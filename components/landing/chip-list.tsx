import LazyImage from "@/components/lazy-image/lazy-image";

export type ChipListItem =
  | string
  | {
      title: string;
      imageSrc?: string;
    };

type ChipListProps = {
  items: ChipListItem[];
  imageSrc?: string;
};

export default function ChipList({ items, imageSrc = "/1.jpg" }: ChipListProps) {
  return (
    <ul className="chip-list">
      {items.map((item) => (
        <li key={typeof item === "string" ? item : item.title}>
          <LazyImage
            src={typeof item === "string" ? imageSrc : (item.imageSrc ?? imageSrc)}
            alt={typeof item === "string" ? item : item.title}
            width={640}
            height={480}
            className="chip-list__image"
            sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
          <p>{typeof item === "string" ? item : item.title}</p>
        </li>
      ))}
    </ul>
  );
}
