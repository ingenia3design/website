import { motion } from "framer-motion";
import { Bolt, Gauge, Target } from "lucide-react";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import { useI18n } from "../i18n/i18n";

const highlightIcons = [Target, Bolt, Gauge] as const;

export default function About() {
  const { c } = useI18n();
  return (
    <Section id="about">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <SectionHeading
          eyebrow={c.about.eyebrow}
          title={c.about.title}
          description={c.about.description}
        />

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {c.about.highlights.map((h, idx) => {
            const Icon = highlightIcons[idx] ?? Target;
            return (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="surface p-5"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                  <Icon className="h-5 w-5 text-sand/85" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{h.title}</div>
                  <div className="pt-1 text-sm leading-relaxed text-white/65">
                    {h.desc}
                  </div>
                </div>
              </div>
            </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

