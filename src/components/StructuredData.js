import React from 'react';
import { translations } from '../i18n';

function StructuredData({ language = 'en' }) {
  const content = translations[language];
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://sibinblessen.github.io/#person",
    "name": "Sibin Blessen",
    "jobTitle": content.about.position,
    "description": content.metadata.description,
    "inLanguage": language,
    "url": "https://sibinblessen.github.io/",
    "image": "https://sibinblessen.github.io/static/media/sibin_blessen_profile_pic.1b4ce095374e0a2310d0.jpg",
    "email": "sibinblessen@gmail.com",
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Adi Shankara Institute of Engineering and Technology"
    },
    "worksFor": {
      "@type": "Organization",
      "name": "Tata Consultancy Services",
      "url": "https://www.tcs.com"
    },
    "workLocation": {
      "@type": "Place",
      "name": "Copenhagen, Denmark"
    },
    "knowsAbout": [
      "Java",
      "Spring Boot",
      "Microservices",
      "Azure",
      "DevOps",
      "AKS",
      "Docker",
      "Kubernetes",
      "REST APIs",
      "System Design",
      "Agile Development",
      "Team Leadership"
    ],
    "sameAs": [
      "https://www.linkedin.com/in/sibin-blessen/",
      "https://github.com/sibinblessen/"
    ],
    "mainEntityOfPage": "https://sibinblessen.github.io/"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData, null, 2) }}
    />
  );
}

export default StructuredData;