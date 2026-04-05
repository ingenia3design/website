export type Locale = "es" | "en";

export type SiteContent = {
  brand: { logoAlt: string; strapline: string };
  nav: {
    goToTopAria: string;
    openMenuAria: string;
    closeMenuAria: string;
    items: { id: string; label: string }[];
    cta: string;
    ctaShort: string;
    languageLabel: string;
  };
  hero: {
    badge: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    kpis: { label: string; value: string }[];
    visualEyebrow: string;
    visualCard1Title: string;
    visualCard1Desc: string;
    visualCard2Title: string;
    visualCard2Desc: string;
    visualCtaTitle: string;
    visualCtaDesc: string;
    visualCtaButton: string;
  };
  about: {
    eyebrow: string;
    title: string;
    description: string;
    highlights: { title: string; desc: string }[];
  };
  services: {
    eyebrow: string;
    title: string;
    description: string;
    cards: { id: string; title: string; description: string }[];
  };
  process: {
    eyebrow: string;
    title: string;
    description: string;
    stepLabel: string;
    steps: { title: string; desc: string }[];
  };
  portfolio: {
    eyebrow: string;
    title: string;
    description: string;
    allLabel: string;
    categories: { id: string; label: string }[];
    projects: { id: string; title: string; categoryId: string; summary: string }[];
  };
  materials: {
    eyebrow: string;
    title: string;
    description: string;
    materialsTitle: string;
    capabilitiesTitle: string;
    materials: string[];
    capabilities: string[];
  };
  why: {
    eyebrow: string;
    title: string;
    description: string;
    benefits: { title: string; desc: string }[];
  };
  testimonials: {
    eyebrow: string;
    title: string;
    description: string;
    items: { name: string; title: string; quote: string }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    infoTitle: string;
    email: string;
    phone: string;
    location: string;
    socialLine: string;
    form: {
      nameLabel: string;
      emailLabel: string;
      phoneLabel: string;
      serviceLabel: string;
      descriptionLabel: string;
      namePlaceholder: string;
      emailPlaceholder: string;
      phonePlaceholder: string;
      descriptionPlaceholder: string;
      tip: string;
      attach: string;
      submit: string;
      privacy: string;
      success: string;
    };
    validation: {
      name: string;
      email: string;
      phone: string;
      service: string;
      description: string;
    };
  };
  footer: {
    tagline: string;
    navTitle: string;
    contactTitle: string;
    social: string;
    rights: string;
    buildLine: string;
  };
};

export const contentByLocale = {
  es: {
    brand: {
      logoAlt: "Logo de Ingenia3Design",
      strapline: "Impresión 3D • CAD • Prototipado",
    },
    nav: {
      goToTopAria: "Ir al inicio",
      openMenuAria: "Abrir menú",
      closeMenuAria: "Cerrar menú",
      items: [
        { id: "about", label: "Acerca de" },
        { id: "services", label: "Servicios" },
        { id: "process", label: "Proceso" },
        { id: "portfolio", label: "Proyectos" },
        { id: "materials", label: "Materiales" },
        { id: "why", label: "Por qué nosotros" },
        { id: "testimonials", label: "Testimonios" },
        { id: "contact", label: "Solicitar cotización" },
      ],
      cta: "Solicitar cotización",
      ctaShort: "Cotizar",
      languageLabel: "Idioma",
    },
    hero: {
      badge: "Prototipado y producción premium, entrega rápida",
      title: "Impresión 3D de precisión para ideas que deben volverse reales",
      description:
        "Ingenia3Design ayuda a equipos a pasar de concepto a piezas funcionales con impresión 3D de alta precisión, modelado CAD y prototipado rápido—diseñado para desempeño, ajuste y repetibilidad.",
      primaryCta: "Solicitar cotización",
      secondaryCta: "Ver servicios",
      kpis: [
        { label: "Tiempo promedio", value: "3–7 días" },
        { label: "Materiales", value: "PLA • ABS • Resina" },
        { label: "Casos de uso", value: "Ajuste • Forma • Función" },
      ],
      visualEyebrow: "Placeholder visual — reemplazar con renders cuando estén listos",
      visualCard1Title: "CAD → listo para imprimir",
      visualCard1Desc:
        "Revisión DFM y refinamiento del modelo para impresiones confiables.",
      visualCard2Title: "Acabado de producción",
      visualCard2Desc:
        "Post-proceso, acabado superficial y soporte de ensamble.",
      visualCtaTitle: "¿Listo para validar tu pieza?",
      visualCtaDesc:
        "Comparte un archivo o brief — responderemos con una estimación.",
      visualCtaButton: "Empezar",
    },
    about: {
      eyebrow: "Acerca de",
      title: "Hecho para equipos que construyen hardware.",
      description:
        "Ingenia3Design se especializa en impresión 3D de precisión, prototipado rápido, modelado CAD y manufactura en lotes pequeños—ayudándote a pasar de concepto a piezas listas para producción.",
      highlights: [
        {
          title: "Precisión primero",
          desc: "Tolerancias, ajuste y repetibilidad integrados en cada decisión.",
        },
        {
          title: "Iteración rápida",
          desc: "Ciclos cortos de feedback a mejoras, sin sacrificar calidad.",
        },
        {
          title: "Mentalidad de ingeniería",
          desc: "Revisión DFM, guía de materiales y soporte de diseño a producción.",
        },
      ],
    },
    services: {
      eyebrow: "Servicios",
      title: "Todo lo que necesitas, de prototipo a producción.",
      description:
        "Desde CAD limpio hasta piezas de alta precisión y lotes pequeños—elige un servicio o combínalos para un flujo end-to-end.",
      cards: [
        {
          id: "printing",
          title: "Impresión 3D personalizada",
          description:
            "Impresiones de precisión optimizadas para exactitud dimensional, ajuste y repetibilidad—listas para prueba o producción.",
        },
        {
          id: "prototyping",
          title: "Prototipado rápido",
          description:
            "Iteraciones veloces para validar forma y función con un flujo diseñado para velocidad y calidad consistente.",
        },
        {
          id: "cad",
          title: "Modelado CAD",
          description:
            "Modelos paramétricos, ensambles y revisiones DFM para llevar tu idea de boceto a un archivo manufacturable.",
        },
        {
          id: "product",
          title: "Diseño de producto",
          description:
            "Soporte de diseño a producción: optimización, consolidación de piezas y tolerancias alineadas al uso real.",
        },
        {
          id: "functional",
          title: "Piezas funcionales",
          description:
            "Componentes durables pensados para desempeño mecánico—jigs, fixtures, carcasas y piezas end-use.",
        },
        {
          id: "batch",
          title: "Producción en lotes pequeños",
          description:
            "Salida consistente para corridas pequeñas con opciones de acabado, QA y empaque listo para entrega.",
        },
      ],
    },
    process: {
      eyebrow: "Proceso",
      title: "Un flujo simple. Resultados confiables.",
      description:
        "Un proceso claro de 4 pasos, fácil de seguir en móvil, diseñado para reducir sorpresas y acelerar iteraciones.",
      stepLabel: "Paso",
      steps: [
        {
          title: "Comparte tu idea o archivo 3D",
          desc: "Envía un brief, boceto o STL/STEP. Confirmamos objetivos y restricciones.",
        },
        {
          title: "Revisamos diseño y requisitos",
          desc: "DFM, tolerancias, materiales y timeline—alineado desde el inicio.",
        },
        {
          title: "Imprimimos y finalizamos",
          desc: "Fabricamos, post-procesamos y verificamos dimensiones críticas cuando aplica.",
        },
        {
          title: "Entregamos la pieza final",
          desc: "Empacado y enviado con etiquetado claro—listo para ensamble o pruebas.",
        },
      ],
    },
    portfolio: {
      eyebrow: "Portafolio",
      title: "Proyectos de ejemplo y resultados.",
      description:
        "Ejemplos placeholder del tipo de trabajo que entregamos—cámbialos por casos reales cuando quieras.",
      allLabel: "Todos",
      categories: [
        { id: "prototyping", label: "Prototipado" },
        { id: "functional", label: "Piezas funcionales" },
        { id: "product", label: "Diseño de producto" },
        { id: "manufacturing", label: "Manufactura" },
      ],
      projects: [
        {
          id: "p-01",
          title: "Prototipo de mango ergonómico",
          categoryId: "prototyping",
          summary:
            "Iteraciones de geometría para validar comodidad de agarre y holguras de ensamble.",
        },
        {
          id: "p-02",
          title: "Carcasa personalizada para sensor",
          categoryId: "functional",
          summary:
            "Carcasa resistente al clima con ranuras para empaque y alivio de tensión para cableado.",
        },
        {
          id: "p-03",
          title: "Housing snap-fit de consumo",
          categoryId: "product",
          summary:
            "Optimización de snaps y espesores para ensamble confiable y mantenibilidad.",
        },
        {
          id: "p-04",
          title: "Set de brackets de bajo volumen",
          categoryId: "manufacturing",
          summary:
            "Producción consistente con acabados y checks dimensionales en una corrida pequeña.",
        },
        {
          id: "p-05",
          title: "Jig y fixture de ensamble",
          categoryId: "functional",
          summary:
            "Fixture durable para mejorar repetibilidad y acelerar pasos de ensamble manual.",
        },
        {
          id: "p-06",
          title: "Modelo conceptual para demo",
          categoryId: "prototyping",
          summary:
            "Prototipo visual de alta calidad para comunicar el producto con un acabado premium.",
        },
        {
          id: "p-07",
          title: "Limpieza CAD paramétrica",
          categoryId: "product",
          summary:
            "Reconstrucción de geometría con restricciones robustas para variantes y handoff a manufactura.",
        },
        {
          id: "p-08",
          title: "Inserto de empaque en lote pequeño",
          categoryId: "manufacturing",
          summary:
            "Insertos personalizados para transporte seguro con tolerancias consistentes y lead times cortos.",
        },
      ],
    },
    materials: {
      eyebrow: "Materiales y capacidades",
      title: "Elige el material correcto para el trabajo.",
      description:
        "Soportamos materiales comunes para prototipos y piezas funcionales, además de opciones de acabado según tus requisitos.",
      materialsTitle: "Materiales",
      capabilitiesTitle: "Capacidades",
      materials: ["PLA", "ABS", "PETG", "Resina", "TPU"],
      capabilities: [
        "Alta precisión y tolerancias ajustadas",
        "Piezas durables para pruebas en el mundo real",
        "Acabados personalizados y post-proceso",
        "Flujos de prototipado funcional",
        "Optimización de diseño para manufacturabilidad",
      ],
    },
    why: {
      eyebrow: "Por qué elegirnos",
      title: "Resultados premium, sin adivinar.",
      description:
        "Una experiencia de ingeniería y fabricación de alto nivel, diseñada para mantenerte avanzando.",
      benefits: [
        {
          title: "Manufactura de precisión",
          desc: "Flujos enfocados en calidad y conciencia dimensional donde importa.",
        },
        {
          title: "Soporte personalizado",
          desc: "Comunicación clara y rápida con guía práctica de diseño.",
        },
        {
          title: "Precio competitivo",
          desc: "Recomendaciones pragmáticas para cumplir metas de desempeño dentro de presupuesto.",
        },
        {
          title: "Entrega rápida",
          desc: "Lead times cortos para prototipos y timelines consistentes para lotes pequeños.",
        },
        {
          title: "Materiales de alta calidad",
          desc: "Selección alineada a durabilidad, acabado y necesidades del caso de uso.",
        },
        {
          title: "Experiencia en diseño",
          desc: "De limpieza CAD a optimización DFM y handoff listo para producción.",
        },
      ],
    },
    testimonials: {
      eyebrow: "Testimonios",
      title: "Confiado por quienes construyen.",
      description:
        "Feedback placeholder realista—reemplázalo con quotes reales cuando estén disponibles.",
      items: [
        {
          name: "Alex R.",
          title: "Ingeniero/a de producto",
          quote:
            "Ingenia3Design tomó nuestro CAD inicial, lo dejó listo para impresión y entregó prototipos que pudimos probar de verdad—rápidos y con dimensiones muy precisas.",
        },
        {
          name: "Maya L.",
          title: "Founder, startup de hardware",
          quote:
            "La comunicación fue excelente y el acabado se sintió premium. Iteramos dos veces y las piezas finales quedaron listas para builds piloto.",
        },
        {
          name: "Daniel S.",
          title: "Líder de manufactura",
          quote:
            "En lotes pequeños la consistencia importa. Obtuvimos resultados repetibles, empaque etiquetado y una transición fluida hacia nuestra línea de ensamble.",
        },
      ],
    },
    contact: {
      eyebrow: "Contacto",
      title: "Solicita una cotización en minutos.",
      description:
        "Comparte tus requisitos y te responderemos con una estimación, recomendación de material y timeline.",
      infoTitle: "Información de contacto",
      email: "hello@ingenia3design.com",
      salesEmail: "ventas@ingenia3design.com",
      phone: "+1 (000) 000-0000",
      location: "Remoto • Envíos internacionales",
      socialLine: "Redes: LinkedIn • Instagram • X (placeholders)",
      form: {
        nameLabel: "Nombre",
        emailLabel: "Email",
        phoneLabel: "Teléfono",
        serviceLabel: "Servicio requerido",
        descriptionLabel: "Descripción del proyecto",
        namePlaceholder: "Tu nombre",
        emailPlaceholder: "tu@empresa.com",
        phonePlaceholder: "+1 555 123 4567 (opcional)",
        descriptionPlaceholder:
          "Cuéntanos qué estás construyendo, material objetivo, dimensiones y cualquier fecha límite.",
        tip: "Tip: incluye unidades, tolerancias y el caso de uso.",
        attach: "Adjuntar archivo (opcional)",
        submit: "Solicitar cotización",
        emailSubject: "Solicitud de cotización",
        privacy:
          "Sin spam. Usamos tus datos solo para responder a esta solicitud.",
        success: "Solicitud recibida. Te contactaremos en breve.",
      },
      validation: {
        name: "Por favor ingresa tu nombre.",
        email: "Por favor ingresa un email válido.",
        phone: "Por favor ingresa un teléfono válido.",
        service: "Por favor selecciona un servicio.",
        description: "Cuéntanos un poco más (mínimo 10 caracteres).",
      },
    },
    footer: {
      tagline:
        "Impresión 3D premium, prototipado rápido, modelado CAD y manufactura en lotes pequeños para equipos que construyen productos reales.",
      navTitle: "Navegación",
      contactTitle: "Contacto",
      social: "Redes: LinkedIn • Instagram • X (placeholders)",
      rights: "Todos los derechos reservados.",
      buildLine: "Rendimiento • Mobile-first • UI accesible",
    },
  },
  en: {
    brand: {
      logoAlt: "Ingenia3Design logo",
      strapline: "3D Printing • CAD • Prototyping",
    },
    nav: {
      goToTopAria: "Go to top",
      openMenuAria: "Open menu",
      closeMenuAria: "Close menu",
      items: [
        { id: "about", label: "About" },
        { id: "services", label: "Services" },
        { id: "process", label: "Process" },
        { id: "portfolio", label: "Projects" },
        { id: "materials", label: "Materials" },
        { id: "why", label: "Why Us" },
        { id: "testimonials", label: "Testimonials" },
        { id: "contact", label: "Request a Quote" },
      ],
      cta: "Request a Quote",
      ctaShort: "Quote",
      languageLabel: "Language",
    },
    hero: {
      badge: "Premium prototyping & production, fast turnaround",
      title: "Precision 3D Printing for Ideas That Need to Become Real",
      description:
        "Ingenia3Design helps teams move from concept to functional parts with high-precision 3D printing, CAD modeling, and rapid prototyping—built for performance, fit, and repeatability.",
      primaryCta: "Request a Quote",
      secondaryCta: "Explore Services",
      kpis: [
        { label: "Avg. turnaround", value: "3–7 days" },
        { label: "Materials", value: "PLA • ABS • Resin" },
        { label: "Use cases", value: "Fit • Form • Function" },
      ],
      visualEyebrow: "Visual placeholder — replace with renders when available",
      visualCard1Title: "CAD → Print ready",
      visualCard1Desc:
        "Clean DFM checks and model refinement for reliable prints.",
      visualCard2Title: "Production finish",
      visualCard2Desc:
        "Post-processing, surface finishing, and assembly support.",
      visualCtaTitle: "Ready to validate your part?",
      visualCtaDesc: "Share a file or brief — we’ll respond with an estimate.",
      visualCtaButton: "Start",
    },
    about: {
      eyebrow: "About",
      title: "Built for teams that ship hardware.",
      description:
        "Ingenia3Design specializes in precision 3D printing, rapid prototyping, CAD modeling, and small-batch manufacturing—helping you go from concept to production-ready parts.",
      highlights: [
        {
          title: "Precision-first",
          desc: "Tolerances, fit, and repeatability baked into every decision.",
        },
        {
          title: "Fast iteration",
          desc: "Short loops from feedback to improved parts, without losing quality.",
        },
        {
          title: "Engineering mindset",
          desc: "DFM checks, material guidance, and design-to-production support.",
        },
      ],
    },
    services: {
      eyebrow: "Services",
      title: "Everything you need for prototype-to-production.",
      description:
        "From clean CAD to high-precision parts and small runs—choose a service or combine them for an end-to-end workflow.",
      cards: [
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
      ],
    },
    process: {
      eyebrow: "Process",
      title: "A simple workflow. Reliable outcomes.",
      description:
        "A clear, mobile-friendly 4-step process designed to reduce surprises and accelerate iteration.",
      stepLabel: "Step",
      steps: [
        {
          title: "Share your idea or 3D file",
          desc: "Send a brief, sketch, or STL/STEP. We’ll confirm goals and constraints.",
        },
        {
          title: "Review design & requirements",
          desc: "DFM checks, tolerances, material options, and timeline—aligned up front.",
        },
        {
          title: "Print & finish production",
          desc: "We manufacture, post-process, and verify critical dimensions when needed.",
        },
        {
          title: "Deliver the final part",
          desc: "Packed and shipped with clear labeling—ready for assembly or testing.",
        },
      ],
    },
    portfolio: {
      eyebrow: "Portfolio",
      title: "Sample projects & outcomes.",
      description:
        "Placeholder examples showing the kinds of work we deliver—swap with real case studies anytime.",
      allLabel: "All",
      categories: [
        { id: "prototyping", label: "Prototyping" },
        { id: "functional", label: "Functional Parts" },
        { id: "product", label: "Product Design" },
        { id: "manufacturing", label: "Manufacturing" },
      ],
      projects: [
        {
          id: "p-01",
          title: "Ergonomic Tool Handle Prototype",
          categoryId: "prototyping",
          summary:
            "Multi-iteration handle geometry to validate grip comfort and assembly clearances.",
        },
        {
          id: "p-02",
          title: "Custom Sensor Enclosure",
          categoryId: "functional",
          summary:
            "Weather-resistant enclosure with gasket grooves and cable strain relief features.",
        },
        {
          id: "p-03",
          title: "Snap-Fit Consumer Housing",
          categoryId: "product",
          summary:
            "Optimized snap features and wall thickness for reliable assembly and serviceability.",
        },
        {
          id: "p-04",
          title: "Low-Volume Bracket Set",
          categoryId: "manufacturing",
          summary:
            "Consistent batch production with finishing and dimensional checks across a small run.",
        },
        {
          id: "p-05",
          title: "Assembly Jig & Fixture",
          categoryId: "functional",
          summary:
            "Durable fixture designed to improve repeatability and speed up manual assembly steps.",
        },
        {
          id: "p-06",
          title: "Concept Model for Investor Demo",
          categoryId: "prototyping",
          summary:
            "High-quality visual prototype to communicate the product story with a premium finish.",
        },
        {
          id: "p-07",
          title: "Parametric CAD Cleanup",
          categoryId: "product",
          summary:
            "Rebuilt geometry with robust constraints for easy variant generation and manufacturing handoff.",
        },
        {
          id: "p-08",
          title: "Small-Batch Packaging Insert",
          categoryId: "manufacturing",
          summary:
            "Custom inserts for safe transport with consistent tolerances and quick lead times.",
        },
      ],
    },
    materials: {
      eyebrow: "Materials & Capabilities",
      title: "Choose the right material for the job.",
      description:
        "We support common materials for prototypes and functional parts, plus finishing options depending on your requirements.",
      materialsTitle: "Materials",
      capabilitiesTitle: "Capabilities",
      materials: ["PLA", "ABS", "PETG", "Resin", "TPU"],
      capabilities: [
        "High precision and tight tolerances",
        "Durable parts for real-world testing",
        "Custom finishes and post-processing",
        "Functional prototyping workflows",
        "Design optimization for manufacturability",
      ],
    },
    why: {
      eyebrow: "Why Choose Us",
      title: "Premium results, without the guesswork.",
      description:
        "A high-end engineering and fabrication experience designed to keep you moving forward.",
      benefits: [
        {
          title: "Precision manufacturing",
          desc: "Quality-focused workflows and dimensional awareness where it matters.",
        },
        {
          title: "Personalized support",
          desc: "Fast, clear communication with practical design guidance.",
        },
        {
          title: "Competitive pricing",
          desc: "Pragmatic recommendations to hit performance goals within budget.",
        },
        {
          title: "Fast turnaround",
          desc: "Short lead times for prototypes and consistent timelines for small runs.",
        },
        {
          title: "High-quality materials",
          desc: "Material selection aligned to durability, finish, and use-case needs.",
        },
        {
          title: "Design expertise",
          desc: "From CAD cleanup to DFM optimization and production-ready handoff.",
        },
      ],
    },
    testimonials: {
      eyebrow: "Testimonials",
      title: "Trusted by builders.",
      description:
        "Realistic placeholder feedback—replace with real client quotes when available.",
      items: [
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
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Request a quote in minutes.",
      description:
        "Share your requirements and we’ll reply with an estimate, material recommendation, and timeline.",
      infoTitle: "Contact information",
      email: "hello@ingenia3design.com",
      salesEmail: "ventas@ingenia3design.com",
      phone: "+1 (000) 000-0000",
      location: "Remote-first • Worldwide shipping",
      socialLine: "Social links: LinkedIn • Instagram • X (placeholders)",
      form: {
        nameLabel: "Name",
        emailLabel: "Email",
        phoneLabel: "Phone",
        serviceLabel: "Service needed",
        descriptionLabel: "Project description",
        namePlaceholder: "Your name",
        emailPlaceholder: "you@company.com",
        phonePlaceholder: "+1 555 123 4567 (optional)",
        descriptionPlaceholder:
          "Tell us what you're building, target material, dimensions, and any deadlines.",
        tip: "Tip: include units, tolerances, and intended use-case.",
        attach: "Attach file (optional)",
        submit: "Request a Quote",
        emailSubject: "Quote request",
        privacy: "No spam. We use your details to respond to this request.",
        success: "Request received. We’ll get back to you shortly.",
      },
      validation: {
        name: "Please enter your name.",
        email: "Please enter a valid email.",
        phone: "Please enter a valid phone number.",
        service: "Please select a service.",
        description: "Tell us a bit more (at least 10 characters).",
      },
    },
    footer: {
      tagline:
        "Premium 3D printing, rapid prototyping, CAD modeling, and small-batch manufacturing for teams that build real products.",
      navTitle: "Navigation",
      contactTitle: "Contact",
      social: "Social: LinkedIn • Instagram • X (placeholders)",
      rights: "All rights reserved.",
      buildLine: "Built for performance • Mobile-first • Accessible UI",
    },
  },
} satisfies Record<Locale, SiteContent>;

