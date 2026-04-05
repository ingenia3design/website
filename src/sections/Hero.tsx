import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Button from "../components/Button";
import Container from "../components/Container";

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Hero() {
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
              Premium prototyping & production, fast turnaround
            </div>

            <h1 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Precision 3D Printing for Ideas That Need to Become Real
            </h1>
            <p className="text-pretty text-base leading-relaxed text-white/70 sm:text-lg">
              Ingenia3Design helps teams move from concept to functional parts with
              high-precision 3D printing, CAD modeling, and rapid prototyping—built
              for performance, fit, and repeatability.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button size="lg" onClick={() => scrollToSection("contact")}>
                Request a Quote <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="secondary"
                onClick={() => scrollToSection("services")}
              >
                Explore Services
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-3 pt-2">
              {[
                { label: "Avg. turnaround", value: "3–7 days" },
                { label: "Materials", value: "PLA • ABS • Resin" },
                { label: "Use cases", value: "Fit • Form • Function" },
              ].map((kpi) => (
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
                  Visual placeholder — replace with renders when available
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
                    <div className="text-sm font-semibold text-white">
                      CAD → Print ready
                    </div>
                    <div className="pt-2 text-sm text-white/65">
                      Clean DFM checks and model refinement for reliable prints.
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
                    <div className="text-sm font-semibold text-white">
                      Production finish
                    </div>
                    <div className="pt-2 text-sm text-white/65">
                      Post-processing, surface finishing, and assembly support.
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="text-sm font-semibold text-white">
                        Ready to validate your part?
                      </div>
                      <div className="pt-1 text-sm text-white/65">
                        Share a file or brief — we’ll respond with an estimate.
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      onClick={() => scrollToSection("contact")}
                      className="border border-white/10 bg-white/5"
                    >
                      Start <ArrowRight className="h-4 w-4" />
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

