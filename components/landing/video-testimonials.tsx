"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export type VideoTestimonialItem = {
  id: string;
  title: string;
  src: string;
  poster?: string;
};

type VideoTestimonialsProps = {
  items: VideoTestimonialItem[];
};

export default function VideoTestimonials({ items }: VideoTestimonialsProps) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(items.length > 1);

  const syncButtons = useCallback(() => {
    const track = trackRef.current;
    if (!track) {
      setCanPrev(false);
      setCanNext(false);
      return;
    }

    const maxScrollLeft = track.scrollWidth - track.clientWidth;
    const threshold = 4;
    setCanPrev(track.scrollLeft > threshold);
    setCanNext(track.scrollLeft < maxScrollLeft - threshold);
  }, []);

  useEffect(() => {
    syncButtons();
  }, [items.length, syncButtons]);

  const scrollByDirection = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) {
      return;
    }

    const firstCard = track.querySelector<HTMLElement>(".video-card");
    const gap = Number.parseFloat(getComputedStyle(track).gap || "0");
    const step = firstCard ? firstCard.offsetWidth + gap : track.clientWidth * 0.9;
    track.scrollBy({
      left: direction * step,
      behavior: "smooth",
    });
  };

  return (
    <div className="video-slider" aria-label="Слайдер видео-отзывов">
      <button
        type="button"
        className="video-slider__button"
        onClick={() => scrollByDirection(-1)}
        disabled={!canPrev}
        aria-label="Показать предыдущие видео-отзывы"
      >
        ←
      </button>
      <div
        ref={trackRef}
        className="video-grid"
        onScroll={syncButtons}
        role="region"
        aria-label="Карусель видео-отзывов"
      >
        {items.map((item) => (
          <article key={item.id} className="video-card">
            <video
              className="video-player"
              controls
              preload="metadata"
              playsInline
              poster={item.poster}
            >
              <source src={item.src} type="video/mp4" />
              Ваш браузер не поддерживает воспроизведение видео.
            </video>
            <p>{item.title}</p>
          </article>
        ))}
      </div>
      <button
        type="button"
        className="video-slider__button"
        onClick={() => scrollByDirection(1)}
        disabled={!canNext}
        aria-label="Показать следующие видео-отзывы"
      >
        →
      </button>
    </div>
  );
}
