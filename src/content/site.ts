/**
 * Site-wide details: company contacts and navigation.
 * Change a phone number, email or address here and it updates on every page.
 */

export const site = {
  name: "CNGSYNERGY",
  url: "https://cngsynergy.com",
  tagline: "Driving business performance through logistics excellence",
  titleSuffix: "CNGSYNERGY – Malaysia Transportation and Warehouse",
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
    "https://maps.google.com/maps?q=Pusat%20Perniagaan%20Prima%20Bayu%20Klang%2C%20Jalan%20Kota%202%2FKS1%2C%2041000%20Klang%2C%20Selangor&t=m&z=16&output=embed&iwloc=near",
} as const;

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us/" },
  { label: "Our Services", href: "/our-service/" },
  { label: "ProHayat 180", href: "/prohayat-180/" },
  { label: "Contact Us", href: "/contact-us/" },
] as const;
