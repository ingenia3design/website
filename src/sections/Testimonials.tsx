import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import { testimonials } from "../data/testimonials";

export default function Testimonials() {
  return (
    <Section id="testimonials">
      <div className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by builders."
          description="Realistic placeholder feedback—replace with real client quotes when available."
        />

        <div className="grid gap-4 lg:grid-cols-3">
          {testimonials.map((t, idx) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: idx * 0.04 }}
              className="surface p-6"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                  <Quote className="h-5 w-5 text-sand/85" />
                </div>
                <blockquote className="text-sm leading-relaxed text-white/70">
                  “{t.quote}”
                </blockquote>
              </div>
              <figcaption className="pt-5 text-sm">
                <div className="font-semibold text-white">{t.name}</div>
                <div className="text-white/60">{t.title}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </Section>
  );
}

