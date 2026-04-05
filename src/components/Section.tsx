import type { PropsWithChildren } from "react";
import Container from "./Container";

export default function Section({
  id,
  children,
  className = "",
}: PropsWithChildren<{ id: string; className?: string }>) {
  return (
    <section id={id} className={`scroll-mt-24 py-14 sm:py-20 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

