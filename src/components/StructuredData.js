import React from 'react';

function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Sibin Blessen",
    "jobTitle": "Senior Software Engineer",
    "description": "Senior Java Developer with 6+ years of experience building scalable backend systems using Spring Boot and microservices. I lead cross-functional teams, leverage DevOps and Azure Cloud technologies, and focus on delivering reliable, high-quality solutions.",
    "url": "https://sibinblessen.github.io/",
    "image": "https://sibinblessen.github.io/static/media/sibin_blessen_profile_pic.jpg",
    "email": "sibinblessen@gmail.com",
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Adi Shankara Institute of Engineering and Technology",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kalady",
        "addressRegion": "Kerala",
        "addressCountry": "IN"
      }
    },
    "worksFor": {
      "@type": "Organization",
      "name": "Tata Consultancy Services",
      "url": "https://www.tcs.com"
    },
    "knowsAbout": [
      "Java",
      "Spring Boot",
      "Microservices",
      "Azure Cloud",
      "DevOps",
      "REST APIs",
      "Database Management",
      "System Design",
      "Agile Development",
      "Team Leadership"
    ],
    "sameAs": [
      "https://www.linkedin.com/in/sibin-blessen/",
      "https://github.com/sibinblessen/"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bangalore",
      "addressRegion": "Karnataka",
      "addressCountry": "IN"
    },
    "nationality": "Indian",
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "name": "Bachelor of Technology in Computer Science and Engineering",
      "educationalLevel": "Bachelor's Degree",
      "recognizedBy": {
        "@type": "CollegeOrUniversity",
        "name": "APJ Abdul Kalam Technological University"
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData, null, 2) }}
    />
  );
}

export default StructuredData;