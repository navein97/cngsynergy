/**
 * Site-wide details: company contacts and navigation.
 * Change a phone number, email or address here and it updates on every page.
 */

export const site = {
  name: "CNGSYNERGY",
  url: "https://cngsynergy.com",
  tagline: "Optimizing Logistics, Elevating Performance",
  /** Default description for Google and link previews. */
  description:
    "CNG Synergy provides logistics performance solutions in Klang, Malaysia: logistics consultancy for trucking, distribution and warehouse operations, and the ProHayat™ 180 driver app.",
  titleSuffix: "CNGSYNERGY – Malaysia Transportation and Warehouse",
  /** The same contact labels are used on every page. */
  contactLabels: {
    phone: "Office / Fixed Line",
    whatsapp: "Mobile / WhatsApp",
    email: "Email",
    address: "Address",
  },
  /** WhatsApp number as shown on the site (Jenna's mobile). */
  whatsappDisplay: "+60 19-218 2916",
  /** Customer service line, shown on every page. */
  phone: {
    display: "03-8687 8460",
    href: "tel:+60386878460",
  },
  /** Public address shown on every page. */
  email: "enquiry@cngsynergy.com",
  /** Inbox that receives contact form messages. Not shown on the site. */
  formInbox: "chandra@cngsynergy.com",
  /** WhatsApp goes to Jenna's mobile; the office line above cannot take WhatsApp. */
  whatsappUrl: "https://wa.me/60192182916",
  address: [
    "No. B-5-7 A, Block B,",
    "Pusat Perniagaan Prima Bayu Klang,",
    "Jalan Kota 2/KS1, 41000 Klang, Selangor",
  ],
  mapEmbedUrl:
    "https://maps.google.com/maps?q=3.0375615,101.4449014&t=m&z=17&output=embed",
} as const;

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us/" },
  { label: "Our Services", href: "/our-service/" },
  { label: "ProHayat™ 180", href: "/prohayat-180/" },
  { label: "Contact Us", href: "/contact-us/" },
] as const;
