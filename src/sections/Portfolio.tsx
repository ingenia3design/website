import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import { useI18n } from "../i18n/i18n";

const allId = "all" as const;
type Filter = string | typeof allId;

function swatchFor(categoryId: string) {
  switch (categoryId) {
    case "prototyping":
      return "from-ocean/60 to-deep/60";
    case "functional":
      return "from-deep/60 to-pine/60";
    case "product":
      return "from-ocean/55 to-pine/55";
    case "manufacturing":
      return "from-pine/60 to-deep/60";
    default:
      return "from-ocean/60 to-deep/60";
  }
}

export default function Portfolio() {
  const { c } = useI18n();
  const [filter, setFilter] = useState<Filter>(allId);

  const filtered = useMemo(() => {
    if (filter === allId) return c.portfolio.projects;
    return c.portfolio.projects.filter((p) => p.categoryId === filter);
  }, [filter, c.portfolio.projects]);

  const filterOptions = useMemo(() => {
    return [
      { id: allId, label: c.portfolio.allLabel },
      ...c.portfolio.categories,
    ];
  }, [c.portfolio.allLabel, c.portfolio.categories]);

  return (
    <Section id="portfolio">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow={c.portfolio.eyebrow}
            title={c.portfolio.title}
            description={c.portfolio.description}
          />

          <div className="flex flex-wrap gap-2">
            {filterOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setFilter(opt.id)}
                className={`rounded-full border px-3 py-1.5 text-xs font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-sand/50 ${
                  filter === opt.id
                    ? "border-white/20 bg-white/10 text-white"
                    : "border-white/10 bg-white/5 text-white/70 hover:bg-white/8 hover:text-white"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, idx) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: idx * 0.03 }}
              className="surface overflow-hidden"
            >
              <div className="relative">
                <div
                  className={`h-36 bg-gradient-to-br ${swatchFor(p.categoryId)}`}
                />
                <div className="absolute inset-0 bg-[radial-gradient(500px_circle_at_20%_20%,rgba(255,255,255,0.12),transparent_55%)]" />
                <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
                  {
                    c.portfolio.categories.find((x) => x.id === p.categoryId)
                      ?.label
                  }
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-base font-semibold text-white">{p.title}</h3>
                <p className="pt-2 text-sm leading-relaxed text-white/65">
                  {p.summary}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  );
}

