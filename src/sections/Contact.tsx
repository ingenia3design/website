import { motion } from "framer-motion";
import { FileUp, Mail, MapPin, Phone } from "lucide-react";
import { type FormEvent, useMemo, useState } from "react";
import Button from "../components/Button";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";

type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  description: string;
  file?: File | null;
};

type Errors = Partial<Record<keyof FormState, string>>;

const services = [
  "Custom 3D Printing",
  "Rapid Prototyping",
  "CAD Modeling",
  "Product Design",
  "Functional Parts",
  "Small Batch Production",
];

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
}

export default function Contact() {
  const [state, setState] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    service: services[0] ?? "Custom 3D Printing",
    description: "",
    file: null,
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  const canSubmit = useMemo(() => {
    return (
      state.name.trim().length >= 2 &&
      isEmail(state.email) &&
      state.description.trim().length >= 10
    );
  }, [state]);

  function validate(next: FormState): Errors {
    const e: Errors = {};
    if (next.name.trim().length < 2) e.name = "Please enter your name.";
    if (!isEmail(next.email)) e.email = "Please enter a valid email.";
    if (next.phone.trim().length > 0 && next.phone.trim().length < 7)
      e.phone = "Please enter a valid phone number.";
    if (!next.service) e.service = "Please select a service.";
    if (next.description.trim().length < 10)
      e.description = "Tell us a bit more (at least 10 characters).";
    return e;
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const v = validate(state);
    setErrors(v);
    if (Object.keys(v).length > 0) return;

    setSubmitted(true);
    window.setTimeout(() => setSubmitted(false), 5000);
    setState((s) => ({ ...s, description: "", file: null }));
  }

  return (
    <Section id="contact">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <div className="flex flex-col gap-6">
          <SectionHeading
            eyebrow="Contact"
            title="Request a quote in minutes."
            description="Share your requirements and we’ll reply with an estimate, material recommendation, and timeline."
          />

          <div className="surface p-6">
            <div className="text-sm font-semibold text-white">
              Contact information
            </div>
            <div className="pt-4 grid gap-3 text-sm text-white/70">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                  <Mail className="h-4 w-4 text-sand/85" />
                </span>
                <span>hello@ingenia3design.com</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                  <Phone className="h-4 w-4 text-sand/85" />
                </span>
                <span>+1 (000) 000-0000</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                  <MapPin className="h-4 w-4 text-sand/85" />
                </span>
                <span>Remote-first • Worldwide shipping</span>
              </div>
            </div>

            <div className="pt-5 text-xs text-white/55">
              Social links: LinkedIn • Instagram • X (placeholders)
            </div>
          </div>
        </div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="surface p-6"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm">
              <span className="font-medium text-white/80">Name</span>
              <input
                value={state.name}
                onChange={(e) => setState((s) => ({ ...s, name: e.target.value }))}
                className="h-11 rounded-xl border border-white/10 bg-black/25 px-3 text-white placeholder:text-white/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-sand/50"
                placeholder="Your name"
                aria-invalid={!!errors.name}
              />
              {errors.name ? (
                <span className="text-xs text-sand/90">{errors.name}</span>
              ) : null}
            </label>

            <label className="grid gap-2 text-sm">
              <span className="font-medium text-white/80">Email</span>
              <input
                value={state.email}
                onChange={(e) =>
                  setState((s) => ({ ...s, email: e.target.value }))
                }
                className="h-11 rounded-xl border border-white/10 bg-black/25 px-3 text-white placeholder:text-white/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-sand/50"
                placeholder="you@company.com"
                aria-invalid={!!errors.email}
              />
              {errors.email ? (
                <span className="text-xs text-sand/90">{errors.email}</span>
              ) : null}
            </label>

            <label className="grid gap-2 text-sm">
              <span className="font-medium text-white/80">Phone</span>
              <input
                value={state.phone}
                onChange={(e) =>
                  setState((s) => ({ ...s, phone: e.target.value }))
                }
                className="h-11 rounded-xl border border-white/10 bg-black/25 px-3 text-white placeholder:text-white/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-sand/50"
                placeholder="+1 555 123 4567 (optional)"
                aria-invalid={!!errors.phone}
              />
              {errors.phone ? (
                <span className="text-xs text-sand/90">{errors.phone}</span>
              ) : null}
            </label>

            <label className="grid gap-2 text-sm">
              <span className="font-medium text-white/80">Service needed</span>
              <select
                value={state.service}
                onChange={(e) =>
                  setState((s) => ({ ...s, service: e.target.value }))
                }
                className="h-11 rounded-xl border border-white/10 bg-black/25 px-3 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-sand/50"
                aria-invalid={!!errors.service}
              >
                {services.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              {errors.service ? (
                <span className="text-xs text-sand/90">{errors.service}</span>
              ) : null}
            </label>
          </div>

          <label className="mt-4 grid gap-2 text-sm">
            <span className="font-medium text-white/80">Project description</span>
            <textarea
              value={state.description}
              onChange={(e) =>
                setState((s) => ({ ...s, description: e.target.value }))
              }
              className="min-h-[120px] rounded-xl border border-white/10 bg-black/25 p-3 text-white placeholder:text-white/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-sand/50"
              placeholder="Tell us what you're building, target material, dimensions, and any deadlines."
              aria-invalid={!!errors.description}
            />
            {errors.description ? (
              <span className="text-xs text-sand/90">{errors.description}</span>
            ) : (
              <span className="text-xs text-white/45">
                Tip: include units, tolerances, and intended use-case.
              </span>
            )}
          </label>

          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <label className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 transition hover:bg-white/8 focus-within:ring-2 focus-within:ring-sand/50">
              <FileUp className="h-4 w-4 text-sand/85" />
              <span>Attach file (optional)</span>
              <input
                type="file"
                className="sr-only"
                onChange={(e) =>
                  setState((s) => ({
                    ...s,
                    file: e.target.files?.item(0) ?? null,
                  }))
                }
              />
            </label>

            <div className="flex items-center gap-3">
              <Button type="submit" size="lg" disabled={!canSubmit}>
                Request a Quote
              </Button>
            </div>
          </div>

          <div className="pt-3 text-xs text-white/50">
            No spam. We use your details to respond to this request.
          </div>

          {submitted ? (
            <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80">
              Request received. We’ll get back to you shortly.
            </div>
          ) : null}
        </motion.form>
      </div>
    </Section>
  );
}

