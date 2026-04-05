import { motion } from "framer-motion";
import { Bolt, Gauge, Target } from "lucide-react";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";

const highlights = [
  {
    icon: Target,
    title: "Precision-first",
    desc: "Tolerances, fit, and repeatability baked into every decision.",
  },
  {
    icon: Bolt,
    title: "Fast iteration",
    desc: "Short loops from feedback to improved parts, without losing quality.",
  },
  {
    icon: Gauge,
    title: "Engineering mindset",
    desc: "DFM checks, material guidance, and design-to-production support.",
  },
];

export default function About() {
  return (
    <Section id="about">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <SectionHeading
          eyebrow="About"
          title="Built for teams that ship hardware."
          description="Ingenia3Design specializes in precision 3D printing, rapid prototyping, CAD modeling, and small-batch manufacturing—helping you go from concept to production-ready parts."
        />

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {highlights.map((h, idx) => (
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
                  <h.icon className="h-5 w-5 text-sand/85" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{h.title}</div>
                  <div className="pt-1 text-sm leading-relaxed text-white/65">
                    {h.desc}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

