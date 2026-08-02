const fallbackUrl = "https://paulkingeasyvisa.info";

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || fallbackUrl).replace(/\/$/, "");

export const siteConfig = {
  name: "Paul Kings Easy Visa",
  title: "Paul Kings Easy Visa | Visa & Legal Services in Pattaya",
  description:
    "Personal visa support for the United Kingdom, Europe and Australia, plus passport and legal-document services from Paul Kings Easy Visa in Central Pattaya.",
  email: "paulking@paulkingeasyvisa.info",
  thaiPhone: "+6638425531",
  englishPhone: "+66890922692",
  address: {
    streetAddress: "512/17 Moo. 9, Central Pattaya Road",
    addressLocality: "Nongprue, Banglamung",
    addressRegion: "Chonburi",
    postalCode: "20150",
    addressCountry: "TH",
  },
  googleBusiness: "https://share.google/AjKHjJQVKwNfYMjBx",
} as const;
