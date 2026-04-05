import { motion } from "framer-motion";
import {
  Boxes,
  Cog,
  Layers,
  Package,
  PencilRuler,
  Printer,
} from "lucide-react";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import { services } from "../data/services";

const iconById = {
  printing: Printer,
  prototyping: Layers,
  cad: PencilRuler,
  product: Boxes,
  functional: Cog,
  batch: Package,
} as const;

export default function Services() {
  return (
    <Section id="services" className="relative">
      <div className="absolute inset-x-0 -top-10 h-40 bg-gradient-to-b from-black/25 to-transparent" />

      <div className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="Services"
          title="Everything you need for prototype-to-production."
          description="From clean CAD to high-precision parts and small runs—choose a service or combine them for an end-to-end workflow."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, idx) => {
            const Icon = iconById[s.id];
            return (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: idx * 0.04 }}
                whileHover={{ y: -4 }}
                className="surface p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                    <Icon className="h-5 w-5 text-sand/85" />
                  </div>
                  <div className="flex-1">
                    <div className="text-base font-semibold text-white">
                      {s.title}
                    </div>
                    <div className="pt-2 text-sm leading-relaxed text-white/65">
                      {s.description}
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

