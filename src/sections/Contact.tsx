import { motion } from "framer-motion";
import { FileUp, Mail, MapPin, Phone } from "lucide-react";
import { type FormEvent, useEffect, useMemo, useState } from "react";
import Button from "../components/Button";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import { useI18n } from "../i18n/i18n";

type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  description: string;
  file?: File | null;
};

type Errors = Partial<Record<keyof FormState, string>>;

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
}

function buildMailtoUrl({
  to,
  subject,
  body,
}: {
  to: string;
  subject: string;
  body: string;
}) {
  const params = new URLSearchParams();
  params.set("subject", subject);
  params.set("body", body);
  return `mailto:${encodeURIComponent(to)}?${params.toString()}`;
}

export default function Contact() {
  const { c } = useI18n();
  const [state, setState] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    service: c.services.cards[0]?.title ?? "",
    description: "",
    file: null,
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  useEffect(() => {
    const titles = new Set(c.services.cards.map((s) => s.title));
    if (titles.has(state.service)) return;
    const next = c.services.cards[0]?.title ?? "";
    if (!next) return;
    setState((s) => ({ ...s, service: next }));
  }, [c.services.cards, state.service]);

  const canSubmit = useMemo(() => {
    return (
      state.name.trim().length >= 2 &&
      isEmail(state.email) &&
      state.description.trim().length >= 10
    );
  }, [state]);

  function validate(next: FormState): Errors {
    const e: Errors = {};
    if (next.name.trim().length < 2) e.name = c.contact.validation.name;
    if (!isEmail(next.email)) e.email = c.contact.validation.email;
    if (next.phone.trim().length > 0 && next.phone.trim().length < 7)
      e.phone = c.contact.validation.phone;
    if (!next.service) e.service = c.contact.validation.service;
    if (next.description.trim().length < 10)
      e.description = c.contact.validation.description;
    return e;
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const v = validate(state);
    setErrors(v);
    if (Object.keys(v).length > 0) return;

    const fileName = state.file?.name ? state.file.name : "—";
    const body = [
      `${c.contact.form.emailSubject}`,
      "",
      `${c.contact.form.nameLabel}: ${state.name}`,
      `${c.contact.form.emailLabel}: ${state.email}`,
      `${c.contact.form.phoneLabel}: ${state.phone || "—"}`,
      `${c.contact.form.serviceLabel}: ${state.service}`,
      `${c.contact.form.descriptionLabel}:`,
      state.description,
      "",
      `File: ${fileName}`,
      "",
      "—",
      "Sent from Ingenia3Design website",
    ].join("\n");

    const subject = `${c.contact.form.emailSubject} — ${state.name}`;
    const mailto = buildMailtoUrl({
      to: c.contact.salesEmail,
      subject,
      body,
    });

    setSubmitted(true);
    window.setTimeout(() => setSubmitted(false), 5000);
    setState((s) => ({ ...s, description: "", file: null }));

    // Opens the user's email client with the quote pre-filled.
    window.location.href = mailto;
  }

  return (
    <Section id="contact">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <div className="flex flex-col gap-6">
          <SectionHeading
            eyebrow={c.contact.eyebrow}
            title={c.contact.title}
            description={c.contact.description}
          />

          <div className="surface p-6">
            <div className="text-sm font-semibold text-white">
              {c.contact.infoTitle}
            </div>
            <div className="pt-4 grid gap-3 text-sm text-white/70">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                  <Mail className="h-4 w-4 text-sand/85" />
                </span>
                <span>{c.contact.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                  <Phone className="h-4 w-4 text-sand/85" />
                </span>
                <span>{c.contact.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                  <MapPin className="h-4 w-4 text-sand/85" />
                </span>
                <span>{c.contact.location}</span>
              </div>
            </div>

            <div className="pt-5 text-xs text-white/55">
              {c.contact.socialLine}
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
              <span className="font-medium text-white/80">
                {c.contact.form.nameLabel}
              </span>
              <input
                value={state.name}
                onChange={(e) => setState((s) => ({ ...s, name: e.target.value }))}
                className="h-11 rounded-xl border border-white/10 bg-black/25 px-3 text-white placeholder:text-white/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-sand/50"
                placeholder={c.contact.form.namePlaceholder}
                aria-invalid={!!errors.name}
              />
              {errors.name ? (
                <span className="text-xs text-sand/90">{errors.name}</span>
              ) : null}
            </label>

            <label className="grid gap-2 text-sm">
              <span className="font-medium text-white/80">
                {c.contact.form.emailLabel}
              </span>
              <input
                value={state.email}
                onChange={(e) =>
                  setState((s) => ({ ...s, email: e.target.value }))
                }
                className="h-11 rounded-xl border border-white/10 bg-black/25 px-3 text-white placeholder:text-white/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-sand/50"
                placeholder={c.contact.form.emailPlaceholder}
                aria-invalid={!!errors.email}
              />
              {errors.email ? (
                <span className="text-xs text-sand/90">{errors.email}</span>
              ) : null}
            </label>

            <label className="grid gap-2 text-sm">
              <span className="font-medium text-white/80">
                {c.contact.form.phoneLabel}
              </span>
              <input
                value={state.phone}
                onChange={(e) =>
                  setState((s) => ({ ...s, phone: e.target.value }))
                }
                className="h-11 rounded-xl border border-white/10 bg-black/25 px-3 text-white placeholder:text-white/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-sand/50"
                placeholder={c.contact.form.phonePlaceholder}
                aria-invalid={!!errors.phone}
              />
              {errors.phone ? (
                <span className="text-xs text-sand/90">{errors.phone}</span>
              ) : null}
            </label>

            <label className="grid gap-2 text-sm">
              <span className="font-medium text-white/80">
                {c.contact.form.serviceLabel}
              </span>
              <select
                value={state.service}
                onChange={(e) =>
                  setState((s) => ({ ...s, service: e.target.value }))
                }
                className="h-11 rounded-xl border border-white/10 bg-black/25 px-3 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-sand/50"
                aria-invalid={!!errors.service}
              >
                {c.services.cards.map((svc) => (
                  <option key={svc.id} value={svc.title}>
                    {svc.title}
                  </option>
                ))}
              </select>
              {errors.service ? (
                <span className="text-xs text-sand/90">{errors.service}</span>
              ) : null}
            </label>
          </div>

          <label className="mt-4 grid gap-2 text-sm">
            <span className="font-medium text-white/80">
              {c.contact.form.descriptionLabel}
            </span>
            <textarea
              value={state.description}
              onChange={(e) =>
                setState((s) => ({ ...s, description: e.target.value }))
              }
              className="min-h-[120px] rounded-xl border border-white/10 bg-black/25 p-3 text-white placeholder:text-white/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-sand/50"
              placeholder={c.contact.form.descriptionPlaceholder}
              aria-invalid={!!errors.description}
            />
            {errors.description ? (
              <span className="text-xs text-sand/90">{errors.description}</span>
            ) : (
              <span className="text-xs text-white/45">
                {c.contact.form.tip}
              </span>
            )}
          </label>

          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <label className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 transition hover:bg-white/8 focus-within:ring-2 focus-within:ring-sand/50">
              <FileUp className="h-4 w-4 text-sand/85" />
              <span>{c.contact.form.attach}</span>
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
                {c.contact.form.submit}
              </Button>
            </div>
          </div>

          <div className="pt-3 text-xs text-white/50">
            {c.contact.form.privacy}
          </div>

          {submitted ? (
            <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80">
              {c.contact.form.success}
            </div>
          ) : null}
        </motion.form>
      </div>
    </Section>
  );
}

