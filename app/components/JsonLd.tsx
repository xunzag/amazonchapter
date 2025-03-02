export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Amazon Chapter",
          "description": "E-Commerce Training Institute in Karachi",
          "url": "https://amazonchapter.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "98, Block L North Nazimabad Town",
            "addressLocality": "Karachi",
            "addressRegion": "Sindh",
            "addressCountry": "PK"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+92-339-0200999",
            "contactType": "customer service"
          },
          "sameAs": [
            "https://facebook.com/amazonchapter",
            "https://instagram.com/amazonchapter"
          ],
          "offers": {
            "@type": "Offer",
            "price": "20000",
            "priceCurrency": "PKR"
          }
        })
      }}
    />
  )
} 