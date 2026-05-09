import SectionBlock from "@/components/landing/section-block";

export default function ContactsSection() {
  return (
    <SectionBlock id="contacts" title="Контакты и соцсети" className="contacts">
      <ul>
        <li>
          Telegram Юлии: <a href="https://t.me/">@yulia</a>
        </li>
        <li>
          Наш Telegram-канал: <a href="https://t.me/">@shavasana_retreat</a>
        </li>
        <li>
          Сайт ретрит-центра: <a href="https://example.com">example.com</a>
        </li>
      </ul>
    </SectionBlock>
  );
}
