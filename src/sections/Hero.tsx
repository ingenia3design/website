import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Button from "../components/Button";
import Container from "../components/Container";
import { useI18n } from "../i18n/i18n";

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Hero() {
  const { c } = useI18n();
  return (
    <section className="relative">
      <div className="absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(900px_circle_at_30%_20%,rgba(136,142,127,0.18),transparent_60%)]" />

      <Container className="relative py-14 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">
              <Sparkles className="h-4 w-4 text-sand/80" />
              {c.hero.badge}
            </div>

            <h1 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {c.hero.title}
            </h1>
            <p className="text-pretty text-base leading-relaxed text-white/70 sm:text-lg">
              {c.hero.description}
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button size="lg" onClick={() => scrollToSection("contact")}>
                {c.hero.primaryCta} <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="secondary"
                onClick={() => scrollToSection("services")}
              >
                {c.hero.secondaryCta}
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-3 pt-2">
              {c.hero.kpis.map((kpi) => (
                <div key={kpi.label} className="surface p-4">
                  <div className="text-xs text-white/60">{kpi.label}</div>
                  <div className="pt-1 text-sm font-semibold text-white">
                    {kpi.value}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.08 }}
            className="relative"
          >
            <div className="surface relative overflow-hidden p-6 sm:p-7">
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-ocean/60 blur-3xl" />
              <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-deep/70 blur-3xl" />

              <div className="relative flex flex-col gap-5">
                <div className="text-xs font-medium tracking-wide text-white/60">
                  {c.hero.visualEyebrow}
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
                    <div className="text-sm font-semibold text-white">
                      {c.hero.visualCard1Title}
                    </div>
                    <div className="pt-2 text-sm text-white/65">
                      {c.hero.visualCard1Desc}
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
                    <div className="text-sm font-semibold text-white">
                      {c.hero.visualCard2Title}
                    </div>
                    <div className="pt-2 text-sm text-white/65">
                      {c.hero.visualCard2Desc}
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="text-sm font-semibold text-white">
                        {c.hero.visualCtaTitle}
                      </div>
                      <div className="pt-1 text-sm text-white/65">
                        {c.hero.visualCtaDesc}
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      onClick={() => scrollToSection("contact")}
                      className="border border-white/10 bg-white/5"
                    >
                      {c.hero.visualCtaButton} <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute -bottom-6 -left-6 hidden h-24 w-24 rounded-3xl border border-white/10 bg-white/5 blur-[0.5px] lg:block" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

