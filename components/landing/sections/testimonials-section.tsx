import SectionBlock from "@/components/landing/section-block";
import VideoTestimonials from "@/components/landing/video-testimonials";

const testimonials = [
  "Видео-отзыв: участница о снижении веса и приливе сил",
  "Видео-отзыв: участник о нормализации сна и давления",
  "Видео-отзыв: история восстановления после хронической усталости",
];

export default function TestimonialsSection() {
  return (
    <SectionBlock id="testimonials" title="Отзывы участников">
      <VideoTestimonials items={testimonials} />
    </SectionBlock>
  );
}
