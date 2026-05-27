import SectionBlock from "@/components/landing/section-block";

type LocalTestimonial = {
  id: string;
  title: string;
  src: string;
  name?: string;
};

const testimonials: LocalTestimonial[] = [
  { id: "elena", title: "Отзыв Елены", src: "/Елена.mp4" },
  { id: "maria", title: "Отзыв Марии", src: "/Мария.mp4" },
  { id: "oleg", title: "Отзыв Олега", src: "/Олег.mp4" },
];

export default function TestimonialsSection() {
  return (
    <SectionBlock id="testimonials" title="Отзывы участников">
      <div className="video-grid video-grid--static">
        {testimonials.map((item) => (
          <article key={item.id} className="video-card">
            <video className="video-player" controls preload="metadata" playsInline>
              <source src={encodeURI(item.src)} type="video/mp4" />
              Ваш браузер не поддерживает воспроизведение видео.
            </video>
            <p>{item.title}</p>
          </article>
        ))}
      </div>
    </SectionBlock>
  );
}
