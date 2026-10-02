/** Text for the ProHayat 180 page (/prodrive-180/). */

export const prodrive = {
  metaTitle: "ProHayat 180™ — Behavioural Learning for Professional Drivers",
  metaDescription:
    "ProHayat 180™ turns driver training into a 2-minute daily habit that builds lasting behaviour. Built for commercial drivers.",

  hero: {
    badge: "Built for Commercial Drivers",
    title: "Behavioural Learning for Professional Drivers",
    sub: "Because safer operations begin with better daily decisions — not just better training.",
    body: "Most driver training is forgotten in 30 days. ProHayat 180™ turns training into a 2-minute daily habit that builds lasting behaviour.",
  },

  vehicleCategories: [
    "Container Haulage",
    "Curtain Side / Box Trailers",
    "General Cargo",
    "Urban Deliveries (Vans & B2C)",
  ],

  drivers: {
    badge: "For Drivers",
    title: "From Occasional Training to Daily Behaviour.",
    body: "Conventional training transfers knowledge. ProHayat 180™ reinforces behaviour — every day.",
    phone: {
      stage: "STAGE 2/8",
      day: "DAY 4",
      label: "Live Scenario",
      question:
        "You're approaching a blind junction in the rain. What is your safest action?",
      options: [
        { text: "Speed up to clear the junction quickly", selected: false },
        {
          text: "Slow down, scan both directions, proceed when clear",
          selected: true,
        },
        { text: "Honk and continue at current speed", selected: false },
      ],
      feedback: "✓ Correct — you get instant coaching.",
      caption: "REAL DRIVER VIEW · 2-MIN",
    },
    summary:
      "Every day, drivers get 3 real-world scenarios on their phone. They decide, get immediate coaching on WHY it's the right decision, and move on.",
    features: [
      "Bilingual: Bahasa Malaysia & English",
      "Mobile-first, self-paced, 8 progressive stages",
      "250+ scenarios covering Safety, Operations & Compliance",
    ],
  },

  managers: {
    badge: "For Managers & HSE",
    title: "From Daily Reminders to Recorded Proof.",
    body: "Stop repeating the same briefings every morning with no record. ProHayat 180™ automates your daily touchpoint and gives you auditable proof.",
    dashboard: {
      title: "MASTER DASHBOARD",
      live: "LIVE",
      metrics: [
        { label: "Operational Excellence", value: 82, tone: "blue" },
        { label: "Discipline", value: 91, tone: "orange" },
        { label: "Professionalism", value: 74, tone: "sky" },
      ],
      stat: "124 Drivers Active",
      change: "+ 12% this week",
    },
    features: [
      "Zero paperwork. Auto competency records.",
      "Live in 48 hours. No hardware.",
      "Free up supervisors. Strengthen due diligence.",
    ],
  },

  closing: {
    headline: ["Behaviour. Reinforced.", "Every Day."],
    qrLabel: "SCAN FOR GOOGLE PLAY",
    qrAlt: "QR code for ProHayat 180 on Google Play",
    appUrl:
      "https://play.google.com/store/apps/details?id=com.cngsynergy.training&pcampaignid=web_share",
    email: "chandra@cngsynergy.com",
    phone: { display: "+6019-997 0695", href: "tel:+60199970695" },
    website: { display: "prohayat180.com", href: "https://prohayat180.com" },
    copyright:
      "© 2026 CNG Synergy | ProHayat 180™ is brand of CNG Synergy. All rights reserved.",
    keywords: "BEHAVIOURAL SAFETY · DAILY HABIT · AUDITABLE PROOF",
  },
} as const;
