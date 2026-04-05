import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import type { NavItem } from "../App";
import Button from "./Button";
import Container from "./Container";
import Logo from "./Logo";

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navbar({ items }: { items: NavItem[] }) {
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
          aria-label="Go to top"
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
          <Button
            onClick={() => scrollToSection("contact")}
            className="ml-2"
            size="md"
          >
            Request a Quote
          </Button>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => scrollToSection("contact")}
          >
            Quote
          </Button>
          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-sand/50"
            aria-label={open ? "Close menu" : "Open menu"}
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

