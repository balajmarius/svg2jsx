import copy from "@/data/copy/en-EN.json";

export const APP_URL = "https://svg2jsx.com";

const person = {
  "@type": "Person",
  "@id": "https://balajmarius.com/#person",
  name: "Marius Bălaj",
  alternateName: "balajmarius",
  url: "https://balajmarius.com",
  sameAs: [
    "https://github.com/balajmarius",
    "https://www.linkedin.com/in/marius-balaj",
    "https://x.com/balajmarius",
    "https://www.goodreads.com/user/show/47935304-marius-balaj",
  ],
} as const;

const owner = { "@id": person["@id"] };

export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    person,
    {
      "@type": "WebSite",
      "@id": `${APP_URL}/#website`,
      url: APP_URL,
      name: "SVG 2 JSX",
      alternateName: "svg2jsx",
      description: copy.META_DESCRIPTION,
      inLanguage: "en",
      creator: owner,
      publisher: owner,
      copyrightHolder: owner,
      mainEntity: { "@id": `${APP_URL}/#application` },
    },
    {
      "@type": "WebApplication",
      "@id": `${APP_URL}/#application`,
      url: APP_URL,
      name: "SVG 2 JSX",
      alternateName: "svg2jsx",
      description: copy.META_DESCRIPTION,
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Any",
      inLanguage: "en",
      isAccessibleForFree: true,
      creator: owner,
      publisher: owner,
      copyrightHolder: owner,
      isPartOf: { "@id": `${APP_URL}/#website` },
      sameAs: "https://github.com/balajmarius/svg2jsx",
    },
  ],
} as const;
