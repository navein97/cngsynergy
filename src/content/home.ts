/**
 * Text for the home page (/).
 * Wrap a phrase in **double asterisks** to make it bold.
 *
 * The page has five sections, in this order:
 * hero, our services, why CNG Synergy, about, contact.
 */

export const home = {
  hero: {
    title: "Logistics Performance Solutions",
    tagline:
      "Practical expertise in transportation, distribution and warehousing to improve operational efficiency, cost effectiveness and business performance.",
    primary: { label: "Explore Our Services", href: "/our-service/" },
    secondary: { label: "Contact Us", href: "/contact-us/" },
    flow: ["Manufacturers", "Transporters", "Warehouses"],
    flowDescription:
      "Goods moving from manufacturers, through transporters, to warehouses.",
  },

  /** Four equal cards. Keep each description about the same length. */
  services: {
    title: "Our Services",
    intro: "Four ways we help logistics businesses perform better.",
    items: [
      {
        icon: "truck",
        title: "Transportation & Distribution",
        body: "Better fleet use, route planning and delivery reliability, at lower cost.",
        link: { label: "Learn more", href: "/our-service/" },
      },
      {
        icon: "warehouse",
        title: "Warehousing & Operations",
        body: "Layouts, workflows and inventory handling that save space and cut lead times.",
        link: { label: "Learn more", href: "/our-service/" },
      },
      {
        icon: "strategy",
        title: "Logistics Advisory & Capability Development",
        body: "Hands-on guidance and team development, from planning to daily operations.",
        link: { label: "Learn more", href: "/our-service/" },
      },
      {
        icon: "advisory",
        title: "ProHayat™ 180",
        body: "A digital solution that builds safer habits and discipline in commercial drivers.",
        link: { label: "Learn more", href: "/prohayat-180/" },
      },
    ],
  },

  whyUs: {
    title: "Why CNG Synergy",
    reasons: [
      {
        icon: "truck",
        title: "Operational Experience",
        body: "We have run and improved **real trucking and warehouse operations**, so our advice works on the ground.",
      },
      {
        icon: "strategy",
        title: "Practical Problem-Solving",
        body: "We find what is slowing you down and give you **clear steps your team can act on**.",
      },
      {
        icon: "factory",
        title: "Performance Focus",
        body: "Everything we do is measured by one thing: **better results for your operations**.",
      },
    ],
  },

  about: {
    title: "About CNG Synergy",
    body: "Based in Klang, our team brings over 25 years of hands-on experience in Malaysian logistics. We work alongside manufacturers, transporters and warehouse operators to cut costs, improve reliability and raise performance.",
    link: { label: "More about us", href: "/about-us/" },
  },
} as const;

/** The closing contact block on the home page. */
export const practicalSolutions = {
  title: "Let’s Talk Logistics",
  body: "Tell us what is slowing your operations down. We’ll help you turn it into stronger performance.",
} as const;
