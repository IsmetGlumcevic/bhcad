export const enCopy = {
  navigation: [
    { label: "Home", href: "/" },
    { label: "About us", href: "/about" },
    { label: "Our services", href: "/services" },
    { label: "Our team", href: "/our-team" },
    { label: "Contact", href: "/contact" },
  ],
  layout: {
    htmlLang: "en",
    title: "bhCAD — Technical Consultancy Bureau",
    description:
      "bhCAD offers CAD/CAM technical support, engineering consultancy, and business administration services tailored to your needs.",
  },
  header: {
    openMenuLabel: "Open menu",
    closeMenuLabel: "Close menu",
  },
  footer: {
    copyrightLabel: "Copyright ©",
    companyName: "bhCAD",
  },
  home: {
    description:
      "bhCAD delivers flexible CAD/CAM technical support, engineering consulting, and remote business administration for manufacturers across Europe.",
    heroVideo: {
      badge: "Bosnia and Herzegovina",
      description:
        "Strategically located to serve European manufacturers with agile, cost-effective solutions.",
      videoSrc: "/assets/hero-video.mp4",
      posterSrc: "/assets/hero-background.png",
      videoType: "video/mp4",
      offset: 180,
    },
    heroIntro: {
      backgroundImage: "/assets/hero-background.png",
      eyebrow: "Technical Consultancy Bureau",
      heading: "We go the extra mile!",
      description:
        "Your flexible and reliable partner providing online services and the workforce you struggle to find.",
    },
    servicesSection: {
      eyebrow: "Services",
      heading: "We go the extra mile!",
      description:
        "Our dedicated team of experts is here to streamline your operations, enhance your technological capabilities, and drive your business forward.",
      ctaLabel: "Click here",
      ctaHref: "/services",
    },
    backToTopLabel: "Back to top",
  },
  servicesPage: {
    description:
      "Explore bhCAD's CAD/CAM technical support, quoting, business administration, and mechanical, electrical, architectural, and civil engineering disciplines tailored to streamline manufacturing operations across Europe.",
    hero: {
      heading: "Our services",
      descriptionParts: {
        intro: "Welcome to ",
        companyName: "bhCAD",
        outro: ", your reliable partner for comprehensive technical support and administrative services.",
      },
    },
    intro: {
      heading: "Services",
      description:
        "Our dedicated team of experts is here to streamline your operations, enhance your technological capabilities, and drive your business forward.",
    },
    disciplines: {
      eyebrow: "Engineering disciplines",
      heading: "Built for precision and speed",
      description:
        "Deep, discipline-specific teams that pair engineering rigor with responsive delivery.",
    },
    detailsCta: {
      label: "Plan this with us",
      href: "/contact",
    },
    detailsFallbackDescription:
      "Tailored support to keep your operations moving.",
    expertiseHeading: {
      intro: "Our software ",
      highlight: "expertise",
    },
    partnersHeading: "Our partners",
    offerCatalogName: "CAD/CAM, Quoting, Administration & Engineering Services",
    areaServedName: "Europe",
  },
  contactPage: {
    description:
      "Get in touch with bhCAD for CAD/CAM support, engineering consultancy, and administrative services via email, phone, or social channels.",
    hero: {
      heading: "Contact us",
      description:
        "You can contact us by phone or e-mail to learn more about our services and how we can help improve your business. Our team is ready to answer all your questions and provide you with the necessary information quickly and efficiently.",
      contactInfoHeading: "Contact information",
      emailLabel: "E-mail",
      phoneLabel: "Telephone",
      addressLabel: "Address",
      followUsLabel: "Follow us",
      mapTitle: "bhCAD location",
    },
    details: {
      email: "info@bhcad.ba",
      phone: "+387 32 811 150",
      address: "Školska 10 Zenica 72 000, Bosnia and Herzegovina",
      mapEmbedUrl:
        "https://www.google.com/maps?q=%C5%A0kolska%2010%2C%20Zenica%2072000&z=18&output=embed&hl=en",
    },
  },
  aboutPage: {
    description:
      "Learn about bhCAD's mission, background, and roots in Bosnia & Herzegovina, where our remote team delivers CAD/CAM expertise for European partners.",
    intro: {
      heading: "About us",
      highlight: "global cooperation with professional teams",
      paragraphs: [
        "Today's modern industry is based on global cooperation with professional teams which are specialized in online technical support in many different branches of the economy.",
        "The ideas came to be for this very reason, we're happy to share our knowledge with you and help you with the whole organization process. We're open to any kind of realization of your projects like online support, drawing, processing drawings for production, processing data in ERP packages, administrative work, etc. We support a wide range of industries such as, technical industries (construction, the wood and steel industries, the mechanical industry, etc.)",
      ],
      image: {
        src: "/assets/about-1.png",
        alt: "bhCAD team",
        width: 1600,
        height: 900,
      },
    },
    origin: {
      headingLines: ["Where are", "we from"],
      highlight: "Bosnia & Herzegovina",
      paragraphs: [
        "Bosnia & Herzegovina is a land full of cultural heritage, natural beauty, and tourist attractions and it represents a crossroad of many civilizations and cultures. Thousand years of cultural diversity merged into Bosnia & Herzegovina which makes it one of the most fascinating countries in southern Europe. It's a country where you can find an Ottoman mosque, Jewish synagogue, and catholic and orthodox churches on the same corner of any street.",
      ],
      image: {
        src: "/assets/about-2.jpg",
        alt: "Bosnia and Herzegovina — Mostar Old Bridge",
        width: 1400,
        height: 900,
      },
    },
  },
  teamPage: {
    description:
      "Meet the multidisciplinary bhCAD team of CAD/CAM engineers, consultants, and administrators supporting manufacturing partners across Europe.",
    hero: {
      heading: "Our team",
      descriptionParts: {
        intro:
          "Our team consists of top experts with many years of experience in ",
        highlight: "CAD/CAM technologies",
        outro:
          ", technical consulting, and administrative services, dedicated to providing the highest quality support and solutions tailored to your specific needs.",
      },
    },
    intro: {
      heading: "Why our team stands out",
      descriptionParts: {
        intro:
          "continuously improves and keeps up with the latest trends and technologies to ensure that our clients receive the most efficient and innovative solutions. We are dedicated to building long-term partnerships with our clients, based on trust, professionalism, and excellence in every project.",
      },
      highlightLabel: "Our team",
    },
  },
  services: [
    {
      key: "cadCamSupport",
      title: "CAD/CAM Technical support",
      description:
        "At bhCAD, we pride ourselves on providing top-notch CAD/CAM technical support, which includes 2D and 3D drawing services and machine element programming.",
      image: "/assets/service/images/CAD:CAM-Technical-support.png",
      imageAlt: "Engineer providing CAD/CAM technical support on a workstation",
      paragraphs: [
        "At bhCAD, we pride ourselves on providing top-notch CAD/CAM technical support, which includes 2D and 3D drawing services and machine element programming. Our expert team utilizes the latest technologies to assist you in designing and developing high-quality products. Whether it’s creating detailed technical drawings or programming complex machine parts, we ensure precision and efficiency at every step.",
      ],
      contexts: ["home", "detail"],
    },
    {
      key: "technicalConsulting",
      title: "Technical consulting and support",
      description:
        "Our technical support encompasses essential consulting services to enhance your business operations.",
      image: "/assets/service/images/Technical-consulting-and-support.png",
      imageAlt: "Consultant collaborating with a client over a laptop",
      paragraphs: [
        "Our technical support encompasses essential consulting services to enhance your business operations. We offer comprehensive technical consulting to ensure your equipment and software operate optimally, maximizing efficiency and minimizing downtime.",
      ],
      contexts: ["home", "detail"],
    },
    {
      key: "administrativeServices",
      title: "Administrative Services",
      image: "/assets/service/images/Administrative-Services.png",
      imageAlt: "Administrative professional organizing schedules and documents",
      paragraphs: [
        "Welcome to our Administrative Services Hub! We specialize in streamlining your administrative tasks, allowing you to focus on what truly matters - growing your business. From managing schedules and coordinating meetings to handling correspondence and data entry, our dedicated team ensures seamless operations. Trust us to optimize efficiency and enhance productivity, so you can achieve your goals with ease.",
        "Discover the power of efficient administration with our comprehensive services. From organizing your inbox to orchestrating complex projects, we’re here to lighten your workload and elevate your productivity. With attention to detail and a commitment to excellence, let us be your trusted partner in navigating the demands of modern business.",
      ],
      contexts: ["detail"],
    },
    {
      key: "nestingQuoting",
      title: "Nesting and Quoting in ERP Packages",
      image: "/assets/service/images/Nesting-and-Quoting-in-ERP-Packages.png",
      imageAlt:
        "Technician optimizing nesting and quoting inside an ERP interface",
      paragraphs: [
        "We optimize fabrication processes and reduce waste through advanced nesting techniques. Additionally, we offer quoting services within ERP packages, ensuring your processes are not only efficient but also cost‑effective.",
      ],
      contexts: ["detail"],
    },
    {
      key: "drawingFabrication",
      title: "Drawing and part fabrication",
      image: "/assets/service/images/Drawing-and-part-fabrication.png",
      imageAlt:
        "Detailed technical drawing being reviewed beside fabricated parts",
      paragraphs: [
        "Our team specializes in creating precise technical drawings that meet the highest industry standards. No matter the complexity of your requirements, we are here to provide solutions tailored to your specific needs.",
      ],
      contexts: ["detail"],
    },
    {
      key: "quoting",
      title: "Quoting",
      description:
        "In sheet metal quoting, optimizing price involves minimizing costs through maximal plate usability, ensuring competitive pricing without compromising quality or delivery.",
      featured: false,
      image: "/assets/service/images/Nesting-and-Quoting-in-ERP-Packages.png",
      imageAlt: "Quotation and nesting workflow displayed on a screen",
      contexts: ["home"],
    },
    {
      key: "businessAdministration",
      title: "Business administration",
      description:
        "We specialize in streamlining your administrative tasks, allowing you to focus on what truly matters – growing your business.",
      image: "/assets/service/images/Administrative-Services.png",
      imageAlt: "Administrative tools and dashboards on a desk",
      contexts: ["home"],
    },
    {
      key: "engineering",
      title: "Engineering",
      description:
        "Applied R&D and process optimization to refine parts, assemblies, and production flows across industries.",
      image: "/assets/service/images/Mechanical-Engineering.png",
      imageAlt: "Engineer refining mechanical designs on a laptop",
      contexts: ["home"],
    },
    {
      key: "mechanicalEngineering",
      title: "Mechanical Engineering",
      description:
        "Efficient CAD/CAM design, 3D models, and machine programming that turn concepts into ready-to-make components.",
      image: "/assets/service/images/Mechanical-Engineering.png",
      imageAlt: "Mechanical engineer reviewing a 3D model on screen",
      paragraphs: [
        "Precision in Motion: Engineered for Efficiency. At bhCAD, our mechanical engineering services bring your ideas to life with expert CAD/CAM design, 3D modeling, and machine programming.",
        "We specialize in optimizing components for manufacturing, from automotive parts to industrial machinery, ensuring durability, cost savings, and seamless integration. Whether it is stress analysis, prototyping, or custom tooling, our team minimizes waste and maximizes performance using advanced tools and software. Ideal for the growing industrial sector, we deliver fast turnarounds without compromising quality.",
      ],
      ctaLabel: "Get a Free Consultation",
      ctaHref: "/contact",
      ariaLabel: "Get a free consultation for mechanical engineering",
      contexts: ["home", "discipline"],
    },
    {
      key: "electricalEngineering",
      title: "Electrical Engineering",
      description:
        "Circuit design, wiring schematics, and automation layouts built for safe, energy-efficient systems and smart controls.",
      image: "/assets/service/images/Electrical-Engineering.png",
      imageAlt: "Electrical engineer configuring panels and schematics",
      paragraphs: [
        "Powering Innovation: Safe, Smart, and Sustainable. bhCAD's electrical engineering expertise covers circuit design, wiring schematics, and automation systems, all powered by precise CAD simulations.",
        "We handle everything from renewable energy setups to smart building controls, ensuring compliance with EU standards and energy efficiency. Our services include PCB layouts, power distribution planning, and IoT integrations, reducing risks like overloads while boosting reliability. Perfect for modern renovations or new builds.",
      ],
      ctaLabel: "Contact Us Today",
      ctaHref: "/contact",
      ariaLabel: "Contact bhCAD about electrical engineering services",
      contexts: ["home", "discipline"],
    },
    {
      key: "architecturalEngineering",
      title: "Architectural Engineering",
      description:
        "2D/3D renders, structural checks, and BIM support that balance aesthetics, safety, and sustainability for every build.",
      image: "/assets/service/images/Architectural-Engineering.png",
      imageAlt: "Architectural plans and 3D renderings on a desk",
      paragraphs: [
        "Designing Spaces That Inspire: Form Meets Function. From concept sketches to detailed blueprints, bhCAD's architectural engineering blends creativity with technical precision.",
        "We offer 2D/3D rendering, structural analysis, and BIM (Building Information Modeling) for residential, commercial, and public projects. Our focus on sustainable materials and ergonomic designs ensures buildings that are beautiful, safe, and eco-friendly.",
      ],
      ctaLabel: "Start Your Design",
      ctaHref: "/contact",
      ariaLabel: "Start an architectural engineering design with bhCAD",
      contexts: ["home", "discipline"],
    },
    {
      key: "civilEngineering",
      title: "Civil Engineering",
      description:
        "Site surveys, structural planning, and infrastructure design that keep roads, bridges, and utilities durable and on budget.",
      image: "/assets/service/images/Civil-Engineering.png",
      imageAlt: "Civil engineer inspecting infrastructure plans outdoors",
      paragraphs: [
        "Building Strong Foundations: Infrastructure That Lasts. bhCAD provides comprehensive civil engineering solutions, including site surveys, structural engineering, and infrastructure planning for roads, bridges, and utilities.",
        "Using CAD tools for hydrology modeling, geotechnical analysis, and project quoting, we ensure projects are resilient, budget-friendly, and environmentally sound. Lay the groundwork for success—request a quote and let us plan a durable path forward.",
      ],
      ctaLabel: "Request a Quote",
      ctaHref: "/contact",
      ariaLabel: "Request a civil engineering quote from bhCAD",
      contexts: ["home", "discipline"],
    },
  ],
} as const;
