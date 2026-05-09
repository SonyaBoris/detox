import SectionBlock from "@/components/landing/section-block";
import LazyImage from "@/components/lazy-image/lazy-image";

export default function FeaturesSection() {
  return (
    <SectionBlock id="features" title="Особенности нашей программы">
      <div className="feature-grid">
        <article>
          <LazyImage
            src="/sok.jpg"
            alt="Сок из листьев лопуха"
            width={640}
            height={420}
            wrapperClassName="feature-image-wrap"
            className="feature-image"
            sizes="(max-width: 900px) 100vw, 50vw"
          />
          <h3>Сок из листьев лопуха вместо витграсса</h3>
          <p>
            Используем свежий сок из лопуха, который растет прямо у нас на
            территории.
          </p>
        </article>
        <article>
          <LazyImage
            src="/laboratory.jpg"
            alt="Диагностика и лабораторный анализ"
            width={640}
            height={420}
            wrapperClassName="feature-image-wrap"
            className="feature-image"
            sizes="(max-width: 900px) 100vw, 50vw"
          />
          <h3>Диагностика на входе и выходе</h3>
          <p>
            Проводим анализ крови и гемоскан. Вы увидите свои эритроциты на
            экране и получите персональную расшифровку от доктора.
          </p>
        </article>
      </div>
    </SectionBlock>
  );
}
