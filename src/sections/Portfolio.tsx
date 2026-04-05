import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import {
  projectCategories,
  projects,
  type ProjectCategory,
} from "../data/projects";

const allLabel = "All" as const;
type Filter = ProjectCategory | typeof allLabel;

function swatchFor(category: string) {
  switch (category) {
    case "Prototyping":
      return "from-ocean/60 to-deep/60";
    case "Functional Parts":
      return "from-deep/60 to-pine/60";
    case "Product Design":
      return "from-ocean/55 to-pine/55";
    case "Manufacturing":
      return "from-pine/60 to-deep/60";
    default:
      return "from-ocean/60 to-deep/60";
  }
}

export default function Portfolio() {
  const [filter, setFilter] = useState<Filter>(allLabel);

  const filtered = useMemo(() => {
    if (filter === allLabel) return projects;
    return projects.filter((p) => p.category === filter);
  }, [filter]);

  const filterOptions = useMemo<Filter[]>(
    () => [allLabel, ...projectCategories],
    [],
  );

  return (
    <Section id="portfolio">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Portfolio"
            title="Sample projects & outcomes."
            description="Placeholder examples showing the kinds of work we deliver—swap with real case studies anytime."
          />

          <div className="flex flex-wrap gap-2">
            {filterOptions.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`rounded-full border px-3 py-1.5 text-xs font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-sand/50 ${
                  filter === c
                    ? "border-white/20 bg-white/10 text-white"
                    : "border-white/10 bg-white/5 text-white/70 hover:bg-white/8 hover:text-white"
                }`}
              >
                {c}
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
                  className={`h-36 bg-gradient-to-br ${swatchFor(
                    p.category,
                  )}`}
                />
                <div className="absolute inset-0 bg-[radial-gradient(500px_circle_at_20%_20%,rgba(255,255,255,0.12),transparent_55%)]" />
                <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
                  {p.category}
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

