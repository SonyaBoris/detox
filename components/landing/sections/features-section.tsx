import SectionBlock from "@/components/landing/section-block";
import LazyImage from "@/components/lazy-image/lazy-image";

export default function FeaturesSection() {
  return (
    <SectionBlock id="features" title="Особенности нашей программы" className="features" hideTitle>
      <div className="section-panel">
        <h2>Особенности нашей программы</h2>
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
            <h3>Сок из листьев лопуха</h3>
            <p>
              Помощь в работе иммунной системы и потенциал в борьбе с опухолевыми заболеваниями.
              Ранозаживляющие способности — повязки с соком листа лопуха оказывают антимикробное и антигрибковое действие.
              Противовоспалительное действие может быть использовано при стоматитах, проблемах с кожей (угревой сыпи, себорее), заболеваниях желудка и кишечника.
              Нейропротекторное действие — защита клеток мозга.
              Мочегонное действие — может пригодиться в борьбе с отеками.
              Детоксикация при проблемах с печенью.
              Сок лопуха несет пользу для организма женщины — он может помочь при нарушениях менструальной функции.
              Свойство, полезное для мужчин, — может помогать при эректильной дисфункции.
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
      </div>
    </SectionBlock>
  );
}
