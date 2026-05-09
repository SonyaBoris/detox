"use client";

import { useState } from "react";
import ActionLink from "@/components/ui/action-link";

const navItems = [
  { href: "#method", label: "О методе" },
  { href: "#program", label: "Программа" },
  { href: "#features", label: "Особенности" },
  { href: "#included", label: "Что включено" },
  { href: "#who", label: "Кому подходит" },
  { href: "#dates", label: "Даты" },
  { href: "#gallery", label: "Галерея" },
  { href: "#testimonials", label: "Отзывы" },
  { href: "#contacts", label: "Контакты" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="site-header__brand" href="#hero">
          Шавасана · Волга
        </a>

        <button
          className={`burger ${open ? "is-open" : ""}`}
          type="button"
          aria-label="Открыть меню"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav id="site-nav" className={`site-nav ${open ? "is-open" : ""}`}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <ActionLink
            variant="nav"
            href="https://t.me/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            Записаться
          </ActionLink>
        </nav>
      </div>
    </header>
  );
}
