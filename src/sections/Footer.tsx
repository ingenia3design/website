import type { NavItem } from "../App";
import Container from "../components/Container";
import Logo from "../components/Logo";
import { useI18n } from "../i18n/i18n";

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Footer({ items }: { items: NavItem[] }) {
  const { c } = useI18n();
  return (
    <footer className="border-t border-white/10 bg-black/15">
      <Container className="py-12">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="max-w-sm text-sm leading-relaxed text-white/65">
              {c.footer.tagline}
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:col-span-2">
            <div>
              <div className="text-sm font-semibold text-white">
                {c.footer.navTitle}
              </div>
              <div className="pt-3 grid gap-2">
                {items.map((i) => (
                  <button
                    key={i.id}
                    onClick={() => scrollToSection(i.id)}
                    className="w-fit text-sm text-white/65 transition hover:text-white"
                  >
                    {i.label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <div className="text-sm font-semibold text-white">
                {c.footer.contactTitle}
              </div>
              <div className="pt-3 grid gap-2 text-sm text-white/65">
                <div>{c.contact.email}</div>
                <div>{c.contact.phone}</div>
                <div>{c.contact.location}</div>
                <div className="pt-2 text-xs text-white/45">
                  {c.footer.social}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <div>
            © {new Date().getFullYear()} Ingenia3Design. {c.footer.rights}
          </div>
          <div>{c.footer.buildLine}</div>
        </div>
      </Container>
    </footer>
  );
}

