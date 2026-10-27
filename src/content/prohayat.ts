/** Text for the ProHayat 180 page (/prohayat-180/). */

import { site } from "@/content/site";

export const prohayat = {
  metaTitle: "ProHayat™ 180 — Driver Performance, Safety & Compliance App",
  metaDescription:
    "ProHayat™ 180 helps logistics companies build safer, more compliant commercial drivers, a few minutes a day. On Google Play and the App Store.",

  hero: {
    badge: "Built for Commercial Drivers",
    title: "Daily Driver Performance, Safety & Compliance",
    sub: "Because safer operations begin with better daily decisions — not just better training.",
    body: "One-off briefings fade. ProHayat™ 180 is a short daily habit that keeps safety and compliance top of mind, with a record for every driver.",
  },

  /** The "Get started" button for companies (hero and closing). Companies register and pay on the web app. */
  getStarted: {
    label: "Get started for your company",
    href: "https://prohayat180.com/register",
    note: "Register your company, choose your driver seats and invite your team. Up and running in minutes.",
    /**
     * Official store badges for drivers (src/components/StoreBadges.tsx).
     * A store with an empty `href` is hidden.
     * TODO: paste the App Store link into appStore.href and add Apple's
     * official badge as public/images/app-store-badge.svg.
     */
    stores: {
      googlePlay: {
        label: "Get it on Google Play",
        href: "https://play.google.com/store/apps/details?id=com.cngsynergy.training",
        badge: "/images/google-play-badge.svg",
        width: 180,
      },
      appStore: {
        label: "Download on the App Store",
        href: "",
        badge: "/images/app-store-badge.svg",
        width: 159,
      },
    },
  },

  /** The trailer under the page header. It plays muted; the button plays it with sound, full screen. */
  trailer: {
    title: "ProHayat™ 180 – Official Trailer",
    label: "Watch with sound",
    src: "/videos/prohayat-180-trailer.mp4",
    poster: "/images/prohayat-180-trailer.jpg",
  },

  /** The setup guide video and the steps beside it, above the closing section. */
  setupGuide: {
    heading: "Set up in minutes",
    body: "Watch how a company gets started, from registering to drivers answering their first questions.",
    steps: [
      "Register your company and confirm with the SMS code.",
      "Add your drivers in Team and send each one their login.",
      "Drivers log in, pick a batch and answer 5 questions a day.",
    ],
    videoTitle: "How to set up ProHayat™ 180",
    src: "/videos/prohayat-180-setup-guide.mp4",
    poster: "/images/prohayat-180-setup-guide.jpg",
  },

  /** The two rows of days under the hero. They fill in as the visitor scrolls. */
  habit: {
    days: 30,
    fading: "One-off briefing, fading over 30 days",
    lasting: "ProHayat™ 180, a few minutes every day",
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
    body: "Conventional training transfers knowledge. ProHayat™ 180 reinforces behaviour — every day.",
    phone: {
      stage: "SESSION 2/6",
      day: "DAY 4",
      label: "Live Scenario",
      prompt: "Tap the safest action",
      correct: "Correct.",
      coached: "Not the safest choice.",
      next: "Try the next vehicle",
      caption: "REAL DRIVER VIEW · 2-MIN",
    },
    summary:
      "Every day, drivers answer 5 short questions on their phone. They decide, see straight away WHY the safest answer is right, and move on.",
    features: [
      "Bilingual: Bahasa Malaysia & English",
      "Mobile-first and self-paced, on Android and iPhone",
      "Questions for each vehicle type, covering Safety, Operations & Compliance",
    ],
  },

  managers: {
    badge: "For Managers & HSE",
    title: "From Daily Reminders to Recorded Proof.",
    body: "Stop repeating the same briefings every morning with no record. ProHayat™ 180 automates your daily touchpoint and gives you auditable proof.",
    dashboard: {
      title: "MASTER DASHBOARD",
      live: "LIVE",
      metrics: [
        { label: "Operational Excellence", value: 82, tone: "blue" },
        { label: "Discipline", value: 91, tone: "orange" },
        { label: "Professionalism", value: 74, tone: "sky" },
      ],
      stat: "Example dashboard",
      change: "Updates as drivers answer",
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
      "Set up in minutes. No hardware.",
      "Free up supervisors. Strengthen due diligence.",
    ],
  },

  closing: {
    headline: ["Behaviour. Reinforced.", "Every Day."],
    email: site.email,
    phone: site.phone,
    website: { display: "prohayat180.com", href: "https://prohayat180.com" },
    copyright:
      "© 2026 CNG Synergy | ProHayat™ 180 is brand of CNG Synergy. All rights reserved.",
    keywords: "BEHAVIOURAL SAFETY · DAILY HABIT · AUDITABLE PROOF",
  },
} as const;
