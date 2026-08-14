const fallbackUrl = "https://paulkingeasyvisa.info";

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || fallbackUrl).replace(/\/$/, "");

export const business = {
  name: "Paul Kings Easy Visa",
  title: "Paul Kings Easy Visa | Visa & Legal Services in Pattaya",
  description: "Personal visa support for the United Kingdom, Europe and Australia, plus passport and legal-document services from Paul Kings Easy Visa in Central Pattaya.",
  email: "paulking@paulkingeasyvisa.info",
  thaiPhoneHref: "+6638425531",
  thaiPhoneDisplay: "+66 (0) 38-425-531",
  englishPhoneHref: "+66890922692",
  englishPhoneDisplay: "+66 (0) 89-092-2692",
  faxHref: "+6638425531",
  faxDisplay: "+66 (0) 38-425-531",
  addressLine1: "512/17 Moo. 9, Central Pattaya Road",
  addressLine2: "Nongprue, Banglamung, Chonburi 20150, Thailand",
  address: {
    streetAddress: "512/17 Moo. 9, Central Pattaya Road",
    addressLocality: "Nongprue, Banglamung",
    addressRegion: "Chonburi",
    postalCode: "20150",
    addressCountry: "TH",
  },
  whatsapp: "https://wa.me/66890922692?text=Hello%20Paul%20Kings%20Easy%20Visa%2C%20I%20would%20like%20to%20make%20an%20enquiry.",
  googleBusiness: "https://share.google/AjKHjJQVKwNfYMjBx",
} as const;
