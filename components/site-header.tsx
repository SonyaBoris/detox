"use client";

import Image from "next/image";
import { useState } from "react";
import ActionLink from "@/components/ui/action-link";

const navItems = [
  { href: "#method", label: "О методе" },
  { href: "#program", label: "Программа" },
  { href: "#masters", label: "Мастера" },
  { href: "#dates", label: "Даты" },
  { href: "#testimonials", label: "Отзывы" },
  { href: "#contacts", label: "Контакты" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="site-header__brand" href="#hero" onClick={() => setOpen(false)}>
          <span className="site-header__logo-wrap" aria-hidden="true">
            <Image
              src="/logo.jpg"
              alt=""
              width={44}
              height={44}
              className="site-header__logo"
              priority
            />
          </span>
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
            href="https://t.me/Shavasanaaaa"
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
