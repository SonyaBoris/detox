import LazyImage from "@/components/lazy-image/lazy-image";
import SectionBlock from "@/components/landing/section-block";

export default function MethodSection() {
  return (
    <SectionBlock id="method" title="О методе Марвы Оганян" className="method">
      <div className="method-layout">
        <LazyImage
          src="/2.jpg"
          alt="Практики по методике Марвы Оганян"
          width={640}
          height={800}
          className="block-photo"
          sizes="(max-width: 900px) 100vw, 38vw"
        />
        <div className="method-copy">
          <p>
            Марва Оганян — врач-терапевт и биохимик. Согласно подходу методики,
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
      </div>
    </SectionBlock>
  );
}
