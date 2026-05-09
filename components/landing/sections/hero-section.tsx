import LazyImage from "@/components/lazy-image/lazy-image";
import ActionLink from "@/components/ui/action-link";

export default function HeroSection() {
  return (
    <section id="hero" className="hero section-wrap">
      <div className="hero-layout">
        <div className="hero-copy">
          <p className="hero-kicker">Ретрит-центр Шавасана · Самарская область</p>
          <h1>Условное голодание по методике Марвы Оганян</h1>
          <p className="lead">
            Мягкая программа очищения и восстановления на берегу Волги: травяные
            отвары с медом, свежевыжатые соки, ежедневные практики и поддержка
            доктора.
          </p>
          <ActionLink href="https://t.me/" target="_blank" rel="noopener noreferrer">
            Записаться к Юлии в Telegram
          </ActionLink>
        </div>
        <LazyImage
          src="/1.jpg"
          alt="Условное голодание в ретрит-центре Шавасана"
          width={640}
          height={800}
          className="block-photo"
          sizes="(max-width: 900px) 100vw, 40vw"
          priority
        />
      </div>
    </section>
  );
}
