export type ProjectCategory =
  | "Prototyping"
  | "Functional Parts"
  | "Product Design"
  | "Manufacturing";

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  summary: string;
};

export const projectCategories: ProjectCategory[] = [
  "Prototyping",
  "Functional Parts",
  "Product Design",
  "Manufacturing",
];

export const projects: Project[] = [
  {
    id: "p-01",
    title: "Ergonomic Tool Handle Prototype",
    category: "Prototyping",
    summary:
      "Multi-iteration handle geometry to validate grip comfort and assembly clearances.",
  },
  {
    id: "p-02",
    title: "Custom Sensor Enclosure",
    category: "Functional Parts",
    summary:
      "Weather-resistant enclosure with gasket grooves and cable strain relief features.",
  },
  {
    id: "p-03",
    title: "Snap-Fit Consumer Housing",
    category: "Product Design",
    summary:
      "Optimized snap features and wall thickness for reliable assembly and serviceability.",
  },
  {
    id: "p-04",
    title: "Low-Volume Bracket Set",
    category: "Manufacturing",
    summary:
      "Consistent batch production with finishing and dimensional checks across a small run.",
  },
  {
    id: "p-05",
    title: "Assembly Jig & Fixture",
    category: "Functional Parts",
    summary:
      "Durable fixture designed to improve repeatability and speed up manual assembly steps.",
  },
  {
    id: "p-06",
    title: "Concept Model for Investor Demo",
    category: "Prototyping",
    summary:
      "High-quality visual prototype to communicate the product story with a premium finish.",
  },
  {
    id: "p-07",
    title: "Parametric CAD Cleanup",
    category: "Product Design",
    summary:
      "Rebuilt geometry with robust constraints for easy variant generation and manufacturing handoff.",
  },
  {
    id: "p-08",
    title: "Small-Batch Packaging Insert",
    category: "Manufacturing",
    summary:
      "Custom inserts for safe transport with consistent tolerances and quick lead times.",
  },
];

