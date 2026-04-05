import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import { capabilities, materials } from "../data/materials";

export default function Materials() {
  return (
    <Section id="materials">
      <div className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="Materials & Capabilities"
          title="Choose the right material for the job."
          description="We support common materials for prototypes and functional parts, plus finishing options depending on your requirements."
        />

        <div className="grid gap-4 lg:grid-cols-2">
          <div className="surface p-6">
            <div className="text-sm font-semibold text-white">Materials</div>
            <div className="pt-4 flex flex-wrap gap-2">
              {materials.map((m, idx) => (
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
            <div className="text-sm font-semibold text-white">Capabilities</div>
            <ul className="pt-4 grid gap-3">
              {capabilities.map((c, idx) => (
                <motion.li
                  key={c}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.35, delay: idx * 0.03 }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                    <Check className="h-4 w-4 text-sand/85" />
                  </span>
                  <span className="text-sm leading-relaxed text-white/70">{c}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

