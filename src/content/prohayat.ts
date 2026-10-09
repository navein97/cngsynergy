/** Text for the ProHayat 180 page (/prohayat-180/). */

import { site } from "@/content/site";

export const prohayat = {
  metaTitle: "ProHayat 180™ — Behavioural Learning for Professional Drivers",
  metaDescription:
    "ProHayat 180™ turns driver training into a 2-minute daily habit that builds lasting behaviour. Built for commercial drivers.",

  hero: {
    badge: "Built for Commercial Drivers",
    title: "Behavioural Learning for Professional Drivers",
    sub: "Because safer operations begin with better daily decisions — not just better training.",
    body: "Most driver training is forgotten in 30 days. ProHayat 180™ turns training into a 2-minute daily habit that builds lasting behaviour.",
  },

  /** The two rows of days under the hero. They fill in as the visitor scrolls. */
  habit: {
    days: 30,
    fading: "One-off training, forgotten in 30 days",
    lasting: "ProHayat 180™, 2 minutes every day",
  },

  /**
   * The vehicle buttons and the scenario each one loads into the phone.
   * These four are sample scenarios. Replace them with real ones from the app.
   * Mark exactly one option per scenario as `correct: true`.
   * `scene` picks the drawing: "container", "curtain", "cargo" or "junction".
   */
  vehicles: {
    label: "Pick your vehicle and try a scenario",
    scenarios: [
      {
        vehicle: "Container Haulage",
        scene: "container",
        question:
          "You've just collected a laden 40-foot container. One twist lock is not fully seated. What is your safest action?",
        options: [
          { text: "Drive off slowly and check it at the first stop", correct: false },
          { text: "Stop and lock all four twist locks before moving", correct: true },
          { text: "Carry on, the container's weight will hold it", correct: false },
        ],
        coaching:
          "A container that isn't locked down can shift or tip on the first corner. Check all four twist locks before the wheels turn.",
      },
      {
        vehicle: "Curtain Side / Box Trailers",
        scene: "curtain",
        question:
          "Strong crosswinds on the highway and your curtain-sider is running empty. What is your safest action?",
        options: [
          { text: "Keep your speed up to get through the wind faster", correct: false },
          { text: "Follow close behind another lorry for shelter", correct: false },
          { text: "Slow down, hold the wheel firmly and leave more space", correct: true },
        ],
        coaching:
          "An empty curtain-sider catches the wind like a sail. A lower speed gives you time to correct when a gust hits.",
      },
      {
        vehicle: "General Cargo",
        scene: "cargo",
        question:
          "Your cargo is loaded but one stack is not strapped down, and you are running late. What is your safest action?",
        options: [
          { text: "Strap the stack down before you leave", correct: true },
          { text: "Leave now and drive gently", correct: false },
          { text: "Push it against the other stacks and go", correct: false },
        ],
        coaching:
          "Loads move under braking and cornering. A few minutes of strapping prevents damaged goods and cargo falling onto the road.",
      },
      {
        vehicle: "Urban Deliveries (Vans & B2C)",
        scene: "junction",
        question:
          "You're approaching a blind junction in the rain. What is your safest action?",
        options: [
          { text: "Speed up to clear the junction quickly", correct: false },
          { text: "Slow down, scan both directions, proceed when clear", correct: true },
          { text: "Honk and continue at current speed", correct: false },
        ],
        coaching:
          "Wet roads lengthen your stopping distance and a blind junction hides what's coming. Slowing down buys you time to see and stop.",
      },
    ],
  },

  drivers: {
    badge: "For Drivers",
    title: "From Occasional Training to Daily Behaviour.",
    body: "Conventional training transfers knowledge. ProHayat 180™ reinforces behaviour — every day.",
    phone: {
      stage: "STAGE 2/8",
      day: "DAY 4",
      label: "Live Scenario",
      prompt: "Tap the safest action",
      correct: "Correct.",
      coached: "Not the safest choice.",
      next: "Try the next vehicle",
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
      /** The line that shows the visitor's own answer from the phone. */
      record: {
        title: "Latest record",
        empty: "Answer the scenario on the phone and it is recorded here.",
        who: "You, just now",
        correct: "Correct",
        coached: "Coached",
      },
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
    email: site.email,
    phone: site.phone,
    website: { display: "prohayat180.com", href: "https://prohayat180.com" },
    copyright:
      "© 2026 CNG Synergy | ProHayat 180™ is brand of CNG Synergy. All rights reserved.",
    keywords: "BEHAVIOURAL SAFETY · DAILY HABIT · AUDITABLE PROOF",
  },
} as const;
