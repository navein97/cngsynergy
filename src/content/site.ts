/**
 * Site-wide details: company contacts and navigation.
 * Change a phone number, email or address here and it updates on every page.
 */

export const site = {
  name: "CNGSYNERGY",
  url: "https://cngsynergy.com",
  tagline: "Driving business performance through logistics excellence",
  titleSuffix: "CNGSYNERGY – Malaysia Transportation and Warehouse",
  phone: {
    display: "+6019-997 0695",
    href: "tel:+60199970695",
  },
  email: "chandra@cngsynergy.com",
  whatsappUrl: "https://wa.link/out5ma",
  address: [
    "B-5-7A/1, Block B,",
    "Pusat Perniagaan Prima Klang,",
    "Jalan Kota 2/KS 1,",
    "41000 Klang,",
    "Selangor D.E.",
  ],
  mapEmbedUrl:
    "https://maps.google.com/maps?q=Pusat%20Perniagaan%20Prima%20Klang%2C%20%20Jalan%20Kota%202%2FKS%201%2C%2041000%20Klang%2C%20Selangor&t=m&z=14&output=embed&iwloc=near",
} as const;

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us/" },
  { label: "Our Services", href: "/our-service/" },
  { label: "ProHayat 180", href: "/prohayat-180/" },
  { label: "Contact Us", href: "/contact-us/" },
] as const;
