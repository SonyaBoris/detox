import LazyImage from "@/components/lazy-image/lazy-image";
import ActionLink from "@/components/ui/action-link";

export default function HeroSection() {
  return (
    <section id="hero" className="hero">
      <div className="hero-layout">
        <LazyImage
          src="/3.jpg"
          alt="Ретрит-центр Шавасана"
          width={900}
          height={1200}
          wrapperClassName="hero-image-wrap"
          className="hero-image"
          sizes="(max-width: 900px) 100vw, 48vw"
          priority
        />
        <div className="hero-copy">
          <div className="hero-pill-row">
            <p className="hero-kicker hero-pill">Ретрит-центр Шавасана</p>
            {/* <ActionLink
              className="hero-pill hero-pill--cta"
              href="https://t.me/Shavasanaaaa"
              target="_blank"
              rel="noopener noreferrer"
            >
              Записаться
            </ActionLink> */}
          </div>
          <h1>Условное голодание по методике Марвы Оганян</h1>
          <p className="lead">
            Мягкая программа очищения и восстановления на берегу Волги: травяные
            отвары с медом, свежевыжатые соки, ежедневные практики и поддержка
            доктора.
          </p>
          <ActionLink href="https://t.me/Shavasanaaaa" target="_blank" rel="noopener noreferrer">
            Записаться
          </ActionLink>
        </div>
      </div>
    </section>
  );
}
