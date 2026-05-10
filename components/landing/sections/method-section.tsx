import LazyImage from "@/components/lazy-image/lazy-image";

export default function MethodSection() {
  return (
    <section id="method" className="method section-wrap">
      <div className="method-layout">
        <LazyImage
          src="/2.jpg"
          alt="Практики по методике Марвы Оганян"
          width={440}
          height={600}
          className="block-photo"
          sizes="(max-width: 900px) 100vw, 38vw"
        />
        <div className="method-copy">
          <h2>О методе</h2>
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
    </section>
  );
}
