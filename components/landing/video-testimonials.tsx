type VideoTestimonialsProps = {
  items: string[];
};

export default function VideoTestimonials({ items }: VideoTestimonialsProps) {
  return (
    <div className="video-grid">
      {items.map((item) => (
        <article key={item} className="video-card">
          <div className="video-placeholder" aria-hidden="true">
            Видео
          </div>
          <p>{item}</p>
        </article>
      ))}
    </div>
  );
}
