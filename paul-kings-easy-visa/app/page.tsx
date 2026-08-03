import HomePage from "@/home-page/HomePage";
import { faqItems } from "@/home-page/faq-data";
import { siteConfig, siteUrl } from "@/home-page/site-config";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${siteUrl}/#business`,
  name: siteConfig.name,
  url: siteUrl,
  logo: `${siteUrl}/images/home-page/paul-kings-logo.png`,
  image: `${siteUrl}/images/home-page/paul-kings-logo.png`,
  email: siteConfig.email,
  telephone: siteConfig.englishPhone,
  additionalProperty: [
    { "@type": "PropertyValue", name: "Thai telephone", value: siteConfig.thaiPhone },
    { "@type": "PropertyValue", name: "English telephone", value: siteConfig.englishPhone },
  ],
  address: {
    "@type": "PostalAddress",
    ...siteConfig.address,
  },
  sameAs: [siteConfig.googleBusiness],
  areaServed: ["Thailand", "United Kingdom", "Europe", "Australia"],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const safeJson = (value: unknown) => JSON.stringify(value).replace(/</g, "\\u003c");

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJson(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJson(faqJsonLd) }}
      />
      <main>
        <HomePage />
      </main>
    </>
  );
}
