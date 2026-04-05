import { motion } from "framer-motion";
import { CheckCircle2, FileUp, Printer, Truck } from "lucide-react";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import { useI18n } from "../i18n/i18n";

const stepIcons = [FileUp, CheckCircle2, Printer, Truck] as const;

export default function Process() {
  const { c } = useI18n();
  return (
    <Section id="process">
      <div className="flex flex-col gap-10">
        <SectionHeading
          eyebrow={c.process.eyebrow}
          title={c.process.title}
          description={c.process.description}
        />

        <div className="grid gap-4 lg:grid-cols-4">
          {c.process.steps.map((s, idx) => {
            const Icon = stepIcons[idx] ?? FileUp;
            return (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: idx * 0.04 }}
              className="surface p-6"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                  <Icon className="h-5 w-5 text-sand/85" />
                </div>
                <div className="text-xs font-semibold text-white/50">
                  {c.process.stepLabel} {idx + 1}
                </div>
              </div>
              <div className="pt-4 text-base font-semibold text-white">
                {s.title}
              </div>
              <div className="pt-2 text-sm leading-relaxed text-white/65">
                {s.desc}
              </div>
            </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
