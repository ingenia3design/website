import { motion } from "framer-motion";
import { CheckCircle2, FileUp, Printer, Truck } from "lucide-react";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";

const steps = [
  {
    title: "Share your idea or 3D file",
    desc: "Send a brief, sketch, or STL/STEP. We’ll confirm goals and constraints.",
    icon: FileUp,
  },
  {
    title: "Review design & requirements",
    desc: "DFM checks, tolerances, material options, and timeline—aligned up front.",
    icon: CheckCircle2,
  },
  {
    title: "Print & finish production",
    desc: "We manufacture, post-process, and verify critical dimensions when needed.",
    icon: Printer,
  },
  {
    title: "Deliver the final part",
    desc: "Packed and shipped with clear labeling—ready for assembly or testing.",
    icon: Truck,
  },
];

export default function Process() {
  return (
    <Section id="process">
      <div className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="Process"
          title="A simple workflow. Reliable outcomes."
          description="A clear, mobile-friendly 4-step process designed to reduce surprises and accelerate iteration."
        />

        <div className="grid gap-4 lg:grid-cols-4">
          {steps.map((s, idx) => (
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
                  <s.icon className="h-5 w-5 text-sand/85" />
                </div>
                <div className="text-xs font-semibold text-white/50">
                  Step {idx + 1}
                </div>
              </div>
              <div className="pt-4 text-base font-semibold text-white">
                {s.title}
              </div>
              <div className="pt-2 text-sm leading-relaxed text-white/65">
                {s.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
