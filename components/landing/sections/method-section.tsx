import LazyImage from "@/components/lazy-image/lazy-image";
import ActionLink from "@/components/ui/action-link";

export default function MethodSection() {
  return (
    <section id="method" className="hero">
      <div className="method-layout">
        <div className="method-copy">
          <h2 className="text-4xl">О методе</h2>
          <div className="flex flex-col gap-2">
            <p>
              Согласно подходу методики,
              когда организм перестает тратить большую часть ресурса на
              переваривание пищи, запускаются процессы очищения и восстановления.
            </p>
            <p>
              В отличие от жесткого голодания, в программе используются травяные
              отвары с медом и свежевыжатые соки, поэтому голод переносится
              значительно легче.
            </p>
            <p>
              Через метод прошли десятки тысяч людей: уходят хронические
              недомогания, снижается лишний вес, появляется больше энергии и
              ясности.
            </p>
          </div>
          <ActionLink href="#program">
            Смотреть программу
          </ActionLink>

        </div>
        <LazyImage
          src="/2.jpg"
          alt="Практики по методике Марвы Оганян"
          width={440}
          height={600}
          wrapperClassName="hero-image-wrap"
          className="hero-image"
          sizes="(max-width: 900px) 100vw, 38vw"
        />

      </div>
    </section>
  );
}
