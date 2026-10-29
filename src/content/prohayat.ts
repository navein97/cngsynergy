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
   * The vehicle buttons and the question each one loads into the phone.
   * These are real questions from the app (batch 1), one per vehicle type.
   * Mark exactly one option per scenario as `correct: true`.
   */
  vehicles: {
    label: "Pick your vehicle and try a real question",
    scenarios: [
      {
        vehicle: "Container Haulage",
        question:
          "You are inside a terminal yard. A marshal signals you to hold while equipment moves in your path.",
        options: [
          { text: "Ease forward slightly to improve visibility", correct: false },
          { text: "Remain stationary until the marshal signals to proceed", correct: true },
          { text: "Hold briefly, then advance once equipment clears", correct: false },
          { text: "Follow the vehicle ahead if it begins moving", correct: false },
        ],
        coaching:
          "Follow marshal instructions and keep distance from operating equipment.",
      },
      {
        vehicle: "Curtain Side / Box Trailers",
        question: "While loading, you notice several cartons marked “DO NOT STACK.”",
        options: [
          { text: "Stack only one lightweight carton above them", correct: false },
          { text: "Place them on top of stronger cartons for stability", correct: false },
          { text: "Keep those cartons free from additional loads", correct: true },
          { text: "Double stack them if space is limited", correct: false },
        ],
        coaching:
          "Always follow the stacking instructions printed on the packaging to prevent cargo damage.",
      },
      {
        vehicle: "General Cargo",
        question:
          "You are approaching a busy loading dock where other lorries are waiting to use adjacent bays.",
        options: [
          { text: "Reverse slowly until the bumper contacts the rubber stop", correct: true },
          { text: "Reverse before other lorries can use the bay", correct: false },
          { text: "Wait across the neighbouring bay until unloading starts", correct: false },
          { text: "Stop well short of the dock to avoid touching the rubber stop", correct: false },
        ],
        coaching:
          "Accurate docking protects loading equipment, while securing the vehicle and avoiding obstruction supports safe and efficient dock operations.",
      },
      {
        vehicle: "Urban Deliveries (Vans & B2C)",
        question:
          "At a site checkpoint, you notice a vehicle defect just before being cleared to proceed.",
        options: [
          { text: "Proceed through the checkpoint and report the defect afterwards", correct: false },
          { text: "Move past the checkpoint and assess the defect", correct: false },
          { text: "Request guidance while remaining in the queue", correct: false },
          { text: "Stop at the checkpoint and report the defect immediately", correct: true },
        ],
        coaching:
          "Reporting defects at checkpoints prevents unsafe entry into controlled zones.",
      },
    ],
  },

  drivers: {
    badge: "For Drivers",
    title: "From Occasional Training to Daily Behaviour.",
    body: "Conventional training transfers knowledge. ProHayat™ 180 reinforces behaviour — every day.",
    phone: {
      batch: "Batch 1",
      question: "Question 1/5",
      accuracy: "ACCURACY",
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
