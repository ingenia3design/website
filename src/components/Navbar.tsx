import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import type { NavItem } from "../App";
import { useI18n } from "../i18n/i18n";
import Button from "./Button";
import Container from "./Container";
import Logo from "./Logo";

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navbar({ items }: { items: NavItem[] }) {
  const { locale, setLocale, c } = useI18n();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const links = useMemo(
    () => items.filter((i) => i.id !== "contact"),
    [items],
  );

  return (
    <header
      className={`sticky top-0 z-50 border-b transition ${
        scrolled
          ? "border-white/10 bg-ink/70 backdrop-blur"
          : "border-transparent bg-transparent"
      }`}
    >
      <Container className="flex h-16 items-center justify-between">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            setOpen(false);
          }}
          className="rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-sand/50"
          aria-label={c.nav.goToTopAria}
        >
          <Logo />
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((i) => (
            <button
              key={i.id}
              onClick={() => scrollToSection(i.id)}
              className="text-sm font-medium text-white/75 transition hover:text-white"
            >
              {i.label}
            </button>
          ))}
          <div
            className="ml-1 inline-flex items-center rounded-xl border border-white/10 bg-white/5 p-1"
            aria-label={c.nav.languageLabel}
          >
            <button
              onClick={() => setLocale("es")}
              className={`h-9 rounded-lg px-3 text-xs font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-sand/50 ${
                locale === "es"
                  ? "bg-white/10 text-white"
                  : "text-white/70 hover:text-white"
              }`}
              type="button"
            >
              ES
            </button>
            <button
              onClick={() => setLocale("en")}
              className={`h-9 rounded-lg px-3 text-xs font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-sand/50 ${
                locale === "en"
                  ? "bg-white/10 text-white"
                  : "text-white/70 hover:text-white"
              }`}
              type="button"
            >
              EN
            </button>
          </div>
          <Button
            onClick={() => scrollToSection("contact")}
            className="ml-2"
            size="md"
          >
            {c.nav.cta}
          </Button>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <div
            className="inline-flex items-center rounded-xl border border-white/10 bg-white/5 p-1"
            aria-label={c.nav.languageLabel}
          >
            <button
              onClick={() => setLocale("es")}
              className={`h-9 rounded-lg px-2.5 text-xs font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-sand/50 ${
                locale === "es"
                  ? "bg-white/10 text-white"
                  : "text-white/70 hover:text-white"
              }`}
              type="button"
            >
              ES
            </button>
            <button
              onClick={() => setLocale("en")}
              className={`h-9 rounded-lg px-2.5 text-xs font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-sand/50 ${
                locale === "en"
                  ? "bg-white/10 text-white"
                  : "text-white/70 hover:text-white"
              }`}
              type="button"
            >
              EN
            </button>
          </div>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => scrollToSection("contact")}
          >
            {c.nav.ctaShort}
          </Button>
          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-sand/50"
            aria-label={open ? c.nav.closeMenuAria : c.nav.openMenuAria}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden"
          >
            <Container className="pb-4">
              <div className="surface overflow-hidden">
                <div className="flex flex-col p-2">
                  {items.map((i) => (
                    <button
                      key={i.id}
                      onClick={() => {
                        scrollToSection(i.id);
                        setOpen(false);
                      }}
                      className="rounded-xl px-4 py-3 text-left text-sm font-medium text-white/80 transition hover:bg-white/5 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-sand/50"
                    >
                      {i.label}
                    </button>
                  ))}
                </div>
              </div>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

