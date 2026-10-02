/**
 * Text for the home page (/).
 * Wrap a phrase in **double asterisks** to make it bold.
 */

export const home = {
  hero: {
    title: "Logistics Consultancy",
    tagline: "Driving business performance through logistics excellence.",
    flow: ["Manufacturers", "Transporters", "Warehouses"],
    flowDescription:
      "Goods moving from manufacturers, through transporters, to warehouses.",
  },

  standsFor: {
    title: "What CNGSYNERGY Stands For",
    body: "CNG Synergy specializes in consultancy services rooted in local logistics practices and real-world scenarios particularly in trucking and warehouse. Combining academic and industry expertise, we provide practical solutions to optimize transportation and warehouse operations, delivering actionable insights to boost business efficiency and performance.",
  },

  /**
   * The route section: the four stops the red consignment travels through as
   * the visitor scrolls. `icon` is a name from src/components/Icon.tsx.
   */
  route: {
    title: "Where CNG Synergy fits in your logistics",
    previous: "Previous stop",
    next: "Next stop",
    more: "Learn more",
    moreHref: "/about-us/",
  },

  pillars: [
    {
      title: "Our Expertise",
      icon: "truck",
      body: "We specialize in two core logistics areas:",
      list: [
        "**Trucking & Goods Distribution:** Optimizing the movement of goods to ensure timely and cost-efficient deliveries.",
        "**Warehouse Operations:** Streamlining operations for improved storage, handling, and dispatch efficiency.",
      ],
    },
    {
      title: "How We Add Value",
      icon: "strategy",
      body: "Through research and hands-on knowledge sharing, we enhance businesses’ understanding of logistics practices. Our consultancy bridges the gap between theory and industry realities, delivering solutions that improve operational effectiveness and efficiency, ensuring businesses remain competitive in a fast-evolving logistics landscape.",
    },
    {
      title: "Who We Support",
      icon: "factory",
      body: "We work with manufacturers, logistics service providers, and organizations seeking to improve logistics efficiency and gain operational advantages.",
    },
    {
      title: "Why Partner with Us",
      icon: "advisory",
      body: "At CNG Synergy, we offer customized consultancy solutions to optimize transportation, distribution, and warehouse operations. With deep local logistics knowledge and extensive industry experience, we identify inefficiencies, streamline processes, and deliver actionable strategies to boost your business performance. Our insights bridge the gap between industry best practices and your unique challenges, ensuring continuous improvement. Partner with us to make your logistics operations more efficient, cost-effective, and primed for long-term success.",
    },
  ],

  whyChooseUs: {
    title: "Why You Should Choose Us",
    reasons: [
      {
        title: "Who We Are",
        body: "At **CNG Synergy**, we transform logistics operations into strategic assets for businesses.",
      },
      {
        title: "Industry Experience",
        body: "Backed by **over 25 years of experience** in the logistics industry.",
      },
      {
        title: "Our Solutions",
        body: "We provide **practical, results-driven solutions** to streamline transport operations, enhance distribution efficiency, and boost business performance.",
      },
      {
        title: "Regional Expertise",
        body: "We specialize in **solving logistics challenges** for businesses across **Malaysia and Southeast Asia**.",
      },
      {
        title: "Efficiency-Focused",
        body: "Our services help companies **move smarter, faster, and more cost-effectively**.",
      },
      {
        title: "Who We Serve",
        body: "Trusted by **manufacturers, distributors, and logistics service providers** seeking expert operational guidance.",
      },
    ],
  },

  consulting: {
    title:
      "Transportation and Warehouse Optimization and Efficiency Consulting",
    body: "We help businesses optimize both their transportation and warehouse operations. By improving fleet management, route efficiency, inventory control, and cost reduction, we ensure your logistics network and warehouse processes are optimized for peak performance. Our approach identifies bottlenecks and offers actionable strategies to enhance operational efficiency and drive growth.",
    points: [
      "Operations: Improve the flow of incoming and outgoing goods to reduce supply chain disruptions and inventory costs.",
      "Enable better management of the interface between manufacturers, transporters, and warehouses to improve operational performance.",
      "Provide alternative perspectives and practices for sustainable growth in a competitive and dynamic transport and logistics environment.",
      "Ensure that best practices are shared across teams, facilitating a seamless transition for new employees, continuous improvement in operations.",
    ],
  },

  /** Short previews near the end of the home page. Each links to its full page. */
  servicesPreview: {
    link: "See all services",
  },
  prohayatPreview: {
    name: "ProHayat 180™",
    link: "See ProHayat 180",
  },
} as const;

/** Shared by the home and about pages. */
export const practicalSolutions = {
  title: "We Deliver Practical Business Solutions",
  body: "At CNG Synergy, we are committed to optimizing your logistics operations and delivering solutions that make a tangible impact on your business performance. Partner with us for strategic, data-driven insights that drive continuous improvement and sustainable growth.",
} as const;
