export type Testimonial = {
  name: string;
  title: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Alex R.",
    title: "Product Engineer",
    quote:
      "Ingenia3Design turned our rough CAD into a clean, print-ready model and delivered prototypes we could actually test—fast and spot-on dimensionally.",
  },
  {
    name: "Maya L.",
    title: "Founder, Hardware Startup",
    quote:
      "The communication was excellent and the finish quality felt premium. We iterated twice and the final parts were ready for pilot builds.",
  },
  {
    name: "Daniel S.",
    title: "Manufacturing Lead",
    quote:
      "For small batches, consistency matters. We got repeatable results, labeled packaging, and a smooth handoff to our assembly line.",
  },
];

