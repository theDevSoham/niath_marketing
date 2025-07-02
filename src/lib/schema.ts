// lib/schema.ts (optional if you want to separate it)
export const niathJsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Niath Real Estate Advisory",
  image:
    "https://raw.githubusercontent.com/theDevSoham/niath_marketing/refs/heads/main/public/images/logo.webp",
  url: "https://niathadvisory.com",
  telephone: "+91-7875695399",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Niath Advisory Raghuvansh Apartment, Model Colony",
    addressLocality: "Pune",
    addressRegion: "MH",
    postalCode: "411016",
    addressCountry: "IN",
  },
  openingHours: "Mo-Fr 09:00-18:00",
  sameAs: [
    "https://www.facebook.com/niathrealestate",
    "https://www.instagram.com/niathrealestate",
    "https://www.linkedin.com/company/niath-realestate",
  ],
  description:
    "Niath Real Estate Advisory provides end-to-end property solutions including investment consultation, property sourcing, legal due diligence, and leasing services across India.",
};
