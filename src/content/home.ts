/**
 * Text for the home page (/).
 * Wrap a phrase in **double asterisks** to make it bold.
 *
 * The page has five sections, in this order:
 * hero, what we do, ProHayat 180, why CNG Synergy, contact.
 */

export const home = {
  hero: {
    eyebrow: "Logistics Solutions & Innovation",
    title: "Turning Logistics Complexity into Competitive Advantage",
    tagline:
      "Practical expertise for trucking and warehouse operations, and our own driver app, ProHayat™ 180.",
    primary: { label: "Our Solutions", href: "/our-service/" },
    secondary: { label: "Get the App", href: "/prohayat-180/" },
    flow: ["Manufacturers", "Transporters", "Warehouses"],
    flowDescription:
      "Goods moving from manufacturers, through transporters, to warehouses.",
  },

  /** Three cards. Each links to the full details on /our-service/. */
  whatWeDo: {
    title: "What We Do",
    intro: "We help logistics businesses run faster, safer and at lower cost.",
    link: "See all services",
    items: [
      {
        icon: "truck",
        title: "Transportation & Distribution",
        body: "Fleet use, route planning and delivery reliability, so your trucks do more with less.",
      },
      {
        icon: "warehouse",
        title: "Warehousing & Operations",
        body: "Layouts, workflows and inventory handling that save space and cut lead times.",
      },
      {
        icon: "strategy",
        title: "Strategic Advisory",
        body: "Logistics consultancy and hands-on guidance, from planning to daily operations.",
      },
    ],
  },

  /** The ProHayat 180 feature. The store links come from src/content/prohayat.ts. */
  innovation: {
    eyebrow: "Our Innovation",
    name: "ProHayat™ 180",
    title: "Better drivers, every day.",
    body: "Our own app for commercial drivers. A few minutes a day builds safer habits and better compliance, and managers see each driver’s performance in one place.",
    live: "Now live on Google Play and the App Store.",
    link: "Explore ProHayat™ 180",
  },

  whyUs: {
    title: "Why CNG Synergy",
    reasons: [
      {
        icon: "truck",
        title: "Industry Depth",
        body: "Decades of **hands-on experience** in Malaysian trucking and warehousing. We know how the work is really done.",
      },
      {
        icon: "strategy",
        title: "Strategic Clarity",
        body: "Clear, **practical plans** your team can act on, not reports that sit on a shelf.",
      },
      {
        icon: "advisory",
        title: "Purposeful Innovation",
        body: "We build tools for real problems on the ground, starting with **ProHayat™ 180**.",
      },
    ],
  },
} as const;

/** The closing contact block on the home page. */
export const practicalSolutions = {
  title: "Let’s Talk Logistics",
  body: "Tell us what is slowing your operations down. We’ll help you turn it into stronger performance.",
} as const;
