import type { PropsWithChildren } from "react";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  children,
}: PropsWithChildren<{
  eyebrow: string;
  title: string;
  description?: string;
}>) {
  return (
    <div className="flex max-w-2xl flex-col gap-3">
      <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide text-white/80">
        <span className="h-1.5 w-1.5 rounded-full bg-sand/80" />
        {eyebrow}
      </div>
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="text-pretty text-base leading-relaxed text-white/70 sm:text-lg">
          {description}
        </p>
      ) : null}
      {children}
    </div>
  );
}

