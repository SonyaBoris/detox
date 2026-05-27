import SectionBlock from "@/components/landing/section-block";
import LazyImage from "@/components/lazy-image/lazy-image";

type Master = {
  name: string;
  photo: string;
  alt: string;
  position: string;
  paragraphs: string[];
  skills?: string[];
};

const masters: Master[] = [
  {
    name: "Борисова Юлия",
    photo: "/1.jpg",
    alt: "Борисова Юлия",
    position: "Основатель и ведущий специалист центра",
    paragraphs: [
      "Живу на земле и своим образом жизни хочу показать, что невозможное возможно. Можно жить без болезней в радости и благости.",
      "Каждый день в любую погоду бегаю на зарядку и выращиваю еду своими руками.",
    ],
    skills: [
      "Медицинское образование (реабилитолог)",
      "Специалист по гемосканированию",
      "Тренер по фитнесу (30 лет стажа)",
      "Доктор народной медицины",
      "Натуропат",
      "Диетолог и нутрициолог",
      "Ароматерапевт",
      "Гирудотерапевт",
      "Звукотерапевт",
    ],
  },
  {
    name: "Евгения Арефьева",
    photo: "/master-evg.jpg",
    alt: "Евгения Арефьева",
    position: "Энергопрактик, мастер Тантра-Рейки",
    paragraphs: [
      "Работаю по авторскому методу потокового массажа «Целительные руки океана»: через мягкие суставные техники и плавные движения происходит расслабление, глубокое проникновение в тело и раскрытие человека.",
      "В результате запускаются глубокие внутренние процессы на ментальном, психоэмоциональном, физическом и энергетическом уровнях. Это возможность восстановить гармонию и баланс, ощутить единение тела и души, исцелиться и снова задышать всем телом.",
    ],
  },
  {
    name: "Владимир",
    photo: "/master-vladimir.jpg",
    alt: "Владимир",
    position: "Врач-невролог с 18-летним стажем, реабилитолог, регрессолог",

    paragraphs: [
      "Моя практика объединяет академическую медицину и глубокие телесные практики. С помощью этого метода я мягко снимаю нервно-мышечные зажимы, восстанавливаю связь души и тела, убираю последствия стрессов и травм на глубинном уровне.",
      "Ежедневно работаю с людьми и обучаю жить в гармонии с собой, показывая глубинные корни проблем со здоровьем. Применяю комплексный и индивидуальный подход: мягкие методы реабилитации, нейропсихологию, массаж и кинезиологию.",
      "Я не просто ставлю диагнозы. Я помогаю отпустить то, что застряло в теле и подсознании: родовые сценарии, старые травмы, невыплаканную боль.",
      "Я начинаю с того, что видит МРТ, а заканчиваю там, где работает душа."
    ],
    skills: [
      "Мозг (неврология, кинезиология)",
      "Душа (регрессология, целительство)",
      "Тело (гавайский массаж «Целительные руки океана» по методу Вл. Соколовского)",
    ],
  },
];

export default function MastersSection() {
  return (
    <SectionBlock id="masters" title="Мастера" className="masters" hideTitle>
      <div className="section-panel">
        <h2>Мастера</h2>
        <div className="masters-grid">
          {masters.map((master) => (
            <article key={master.name} className="master-card">
              <div className="master-card__head">
                <LazyImage
                  src={master.photo}
                  alt={master.alt}
                  width={220}
                  height={220}
                  wrapperClassName="master-avatar-wrap"
                  className="master-avatar"
                  sizes="90px"
                />
                <div className="flex flex-col gap-1 justify-center h-full">
                  <h3>{master.name}</h3>
                  <p>{master.position}</p>
                </div>
              </div>
              <div className="master-card__body">
                {master.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {master.skills ? (
                  <ul className="master-skill-list">
                    {master.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionBlock>
  );
}
