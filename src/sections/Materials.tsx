import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import { useI18n } from "../i18n/i18n";

export default function Materials() {
  const { c } = useI18n();
  return (
    <Section id="materials">
      <div className="flex flex-col gap-10">
        <SectionHeading
          eyebrow={c.materials.eyebrow}
          title={c.materials.title}
          description={c.materials.description}
        />

        <div className="grid gap-4 lg:grid-cols-2">
          <div className="surface p-6">
            <div className="text-sm font-semibold text-white">
              {c.materials.materialsTitle}
            </div>
            <div className="pt-4 flex flex-wrap gap-2">
              {c.materials.materials.map((m, idx) => (
                <motion.span
                  key={m}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.35, delay: idx * 0.03 }}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80"
                >
                  {m}
                </motion.span>
              ))}
            </div>
          </div>

          <div className="surface p-6">
            <div className="text-sm font-semibold text-white">
              {c.materials.capabilitiesTitle}
            </div>
            <ul className="pt-4 grid gap-3">
              {c.materials.capabilities.map((cap, idx) => (
                <motion.li
                  key={cap}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.35, delay: idx * 0.03 }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                    <Check className="h-4 w-4 text-sand/85" />
                  </span>
                  <span className="text-sm leading-relaxed text-white/70">
                    {cap}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

