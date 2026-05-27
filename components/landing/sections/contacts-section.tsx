import SectionBlock from "@/components/landing/section-block";

export default function ContactsSection() {
  return (
    <SectionBlock id="contacts" title="Контакты и соцсети" className="contacts" hideTitle>
      <div className="section-panel">
        <h2>Контакты и соцсети</h2>
        <ul>
          <li>
            Telegram Юлии: <a href="https://t.me/Shavasanaaaa">@Shavasanaaaa</a>
          </li>
          <li>
            Наш Telegram-канал: <a href="https://t.me/Shavasana_centre">@Shavasana_centre</a>
          </li>
          <li>
            Сайт ретрит-центра: <a href="https://шавасана.рф">шавасана.рф</a>
          </li>
        </ul>
      </div>
    </SectionBlock>
  );
}
