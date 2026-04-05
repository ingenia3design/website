import { motion } from "framer-motion";
import {
  BadgeDollarSign,
  Clock,
  ShieldCheck,
  Sparkles,
  Users,
  Wrench,
} from "lucide-react";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import { useI18n } from "../i18n/i18n";

const benefitIcons = [
  ShieldCheck,
  Users,
  BadgeDollarSign,
  Clock,
  Sparkles,
  Wrench,
] as const;

export default function WhyChooseUs() {
  const { c } = useI18n();
  return (
    <Section id="why">
      <div className="flex flex-col gap-10">
        <SectionHeading
          eyebrow={c.why.eyebrow}
          title={c.why.title}
          description={c.why.description}
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {c.why.benefits.map((b, idx) => {
            const Icon = benefitIcons[idx] ?? ShieldCheck;
            return (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: idx * 0.03 }}
              className="surface p-6"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                  <Icon className="h-5 w-5 text-sand/85" />
                </div>
                <div>
                  <div className="text-base font-semibold text-white">
                    {b.title}
                  </div>
                  <div className="pt-2 text-sm leading-relaxed text-white/65">
                    {b.desc}
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

