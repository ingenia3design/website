export type ServiceId =
  | "printing"
  | "prototyping"
  | "cad"
  | "product"
  | "functional"
  | "batch";

export type Service = {
  id: ServiceId;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    id: "printing",
    title: "Custom 3D Printing",
    description:
      "Precision prints tuned for dimensional accuracy, fit, and repeatability—ready for testing or production.",
  },
  {
    id: "prototyping",
    title: "Rapid Prototyping",
    description:
      "Fast iterations to validate form and function with a workflow built for speed and predictable quality.",
  },
  {
    id: "cad",
    title: "CAD Modeling",
    description:
      "Clean parametric models, assemblies, and DFM checks to take your idea from sketch to manufacturable file.",
  },
  {
    id: "product",
    title: "Product Design",
    description:
      "Design-to-production support: optimization, part consolidation, and tolerances aligned to real-world use.",
  },
  {
    id: "functional",
    title: "Functional Parts",
    description:
      "Durable components engineered for mechanical performance—fixtures, jigs, enclosures, and end-use parts.",
  },
  {
    id: "batch",
    title: "Small Batch Production",
    description:
      "Consistent output for small runs with finishing options, QA checks, and packing ready for delivery.",
  },
];

