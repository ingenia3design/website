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

const benefits = [
  {
    icon: ShieldCheck,
    title: "Precision manufacturing",
    desc: "Quality-focused workflows and dimensional awareness where it matters.",
  },
  {
    icon: Users,
    title: "Personalized support",
    desc: "Fast, clear communication with practical design guidance.",
  },
  {
    icon: BadgeDollarSign,
    title: "Competitive pricing",
    desc: "Pragmatic recommendations to hit performance goals within budget.",
  },
  {
    icon: Clock,
    title: "Fast turnaround",
    desc: "Short lead times for prototypes and consistent timelines for small runs.",
  },
  {
    icon: Sparkles,
    title: "High-quality materials",
    desc: "Material selection aligned to durability, finish, and use-case needs.",
  },
  {
    icon: Wrench,
    title: "Design expertise",
    desc: "From CAD cleanup to DFM optimization and production-ready handoff.",
  },
];

export default function WhyChooseUs() {
  return (
    <Section id="why">
      <div className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Premium results, without the guesswork."
          description="A high-end engineering and fabrication experience designed to keep you moving forward."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, idx) => (
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
                  <b.icon className="h-5 w-5 text-sand/85" />
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
          ))}
        </div>
      </div>
    </Section>
  );
}

