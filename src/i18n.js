export const LANGUAGE_STORAGE_KEY = 'portfolio-language';

export const languages = {
  en: 'English',
  da: 'Dansk'
};

export const translations = {
  en: {
    metadata: {
      title: 'Sibin Blessen | Senior Software Engineer & Java Developer',
      description: 'Senior software engineer with 8+ years of experience building reliable Java backend systems with Spring Boot, microservices, Azure, and DevOps. I lead cross-functional teams and deliver maintainable solutions.',
      locale: 'en_US'
    },
    navigation: {
      about: 'About',
      experience: 'Experience',
      skills: 'Skills',
      projects: 'Projects',
      resume: 'Resume',
      backToTop: 'Back to top',
      toggleMenu: 'Toggle navigation menu'
    },
    about: {
      ariaLabel: 'About Sibin Blessen',
      socialLinks: 'Social media links',
      socialNavigation: 'Social media navigation',
      mobileSocialLinks: 'Social media links for mobile',
      overline: 'Java backend engineering / systems that last',
      greeting: 'Hey, my name is',
      position: 'Senior Software Engineer',
      description: 'Senior software engineer with 8+ years of experience building reliable Java backend systems with Spring Boot, microservices, Azure, and DevOps. I lead cross-functional teams and deliver maintainable solutions.',
      coreExperience: 'Core experience',
      years: 'years',
      contact: 'Email me about a role',
      contactLabel: 'Send email to Sibin Blessen',
      linkedIn: "Visit Sibin Blessen's LinkedIn profile",
      github: "Visit Sibin Blessen's GitHub profile",
      email: 'Send email to Sibin Blessen',
      linkedInTitle: 'LinkedIn Profile',
      githubTitle: 'GitHub Profile',
      emailTitle: 'Email Contact',
      linkedInNewTab: "Visit Sibin Blessen's LinkedIn profile (opens in new tab)",
      githubNewTab: "Visit Sibin Blessen's GitHub profile (opens in new tab)",
      emailNewTab: 'Send email to Sibin Blessen (opens in new tab)',
      imageAlt: 'Professional headshot of Sibin Blessen, Senior Software Engineer at Tata Consultancy Services, smiling and wearing sunglasses',
      logoAlt: 'Sibin Blessen Portfolio - Senior Software Engineer Logo'
    },
    experience: {
      title: 'Experience',
      subtitle: 'Backend engineering, cloud delivery, and team leadership',
      roles: [
        {
          title: 'Technical Lead & Senior Java Developer',
          company: 'Tata Consultancy Services',
          location: 'Copenhagen, Denmark',
          period: 'May 2022 - Present',
          startDate: '2022-05',
          summary: 'Leads a team delivering Java backend services, event-driven integrations, cloud operations, and technical enablement.',
          achievements: [
            'Led and mentored developers, strengthening collaboration and delivery',
            'Established code review and engineering practices to improve production quality',
            'Implemented asynchronous event streaming to improve response times',
            'Added caching to reduce database query frequency and infrastructure costs',
            'Created technical documentation, developer guides, and operational runbooks to improve team efficiency',
            'Led training on new tools and frameworks to support onboarding',
            'Aligned DevOps strategy with stakeholder and business objectives, improving project delivery success'
          ]
        },
        {
          title: 'Java Developer',
          company: 'Tata Consultancy Services',
          location: 'Kochi, India',
          period: 'Aug 2021 - Apr 2022',
          startDate: '2021-08',
          summary: 'Built cloud-native Java services, deployment automation, monitoring, and scheduled processing for an insurance claims chatbot.',
          achievements: [
            'Architected scalable backend services for an insurance claims chatbot to improve customer experience',
            'Created cloud-native Java applications on AKS to streamline deployments',
            'Automated build and release processes to reduce manual deployment effort',
            'Introduced Splunk monitoring for cloud services and applications, improving incident response time',
            'Converted non-critical synchronous processes into scheduled jobs to reduce peak-time load'
          ]
        },
        {
          title: 'Full Stack Developer & Interim Team Lead',
          company: 'Tata Consultancy Services',
          location: 'Kochi, India',
          period: 'Dec 2018 - Jul 2021',
          startDate: '2018-12',
          summary: 'Delivered full-stack, API, data, testing, and Android work while serving as an interim team lead and customer-facing liaison.',
          achievements: [
            'Optimized the existing codebase to improve load times',
            'Led an agile development team and delivered agreed goals',
            'Designed and maintained APIs to improve integration and data processing',
            'Developed and maintained an Android application to support user engagement',
            'Upskilled in frontend frameworks and cloud tooling to bridge team capability gaps',
            'Gathered requirements from stakeholders and aligned technical delivery with business needs',
            'Used JPA and modern database technologies to improve data retrieval efficiency',
            'Implemented JUnit unit tests, improving code quality and reducing bugs'
          ]
        }
      ]
    },
    skills: {
      title: 'Skills & Technologies',
      subtitle: 'My technical expertise and core competencies',
      categories: [
        { title: 'Programming Languages', skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'Kotlin', 'Go', 'C', 'C++'] },
        { title: 'Frameworks & Libraries', skills: ['Spring Boot', 'Quarkus', 'Hibernate', 'Angular', 'React', 'Microservices'] },
        { title: 'Cloud & DevOps', skills: ['Azure', 'AKS', 'Docker', 'Kubernetes', 'GitLab CI/CD', 'GCP', 'GitHub Actions'] },
        { title: 'Databases', skills: ['MySQL', 'MongoDB', 'PostgreSQL', 'SQLite', 'SQL', 'NoSQL', 'Relational Database'] },
        { title: 'Development Tools & Integration', skills: ['Git', 'Maven', 'npm', 'Splunk', 'Version Control', 'Jest', 'Testing', 'REST API', 'Open API', 'Kafka', 'RabbitMQ'] },
        { title: 'Methodologies & Practices', skills: ['Agile Development', 'SOLID Principles', 'Clean Code', 'Event Driven Architecture', 'Test Driven Development'] }
      ],
      categoryLabel: (category) => `${category} skills`
    },
    projects: {
      title: 'Featured Projects',
      subtitle: 'Key projects that showcase my technical expertise and impact',
      viewCode: 'View Code',
      liveDemo: 'Live Demo',
      technologiesUsed: 'Technologies Used',
      achievements: 'Key Achievements',
      items: [
        {
          title: 'Personal Portfolio Website',
          period: 'September 2025',
          description: 'Modern, responsive portfolio website built with React showcasing professional experience, skills, and projects with glassmorphism design',
          technologies: ['React', 'JavaScript', 'CSS3', 'HTML5', 'GitHub Pages'],
          achievements: [
            'Built from scratch using modern React hooks and functional components',
            'Implemented responsive design with CSS Grid and Flexbox',
            'Created glassmorphism UI effects with backdrop-filter and gradients',
            'Deployed using GitHub Pages with automated CI/CD pipeline'
          ],
          type: 'Web Application',
          githubUrl: 'https://github.com/sibinblessen/sibin-blessen-portfolio',
          liveUrl: 'https://sibinblessen.github.io/'
        },
        {
          title: 'College Bus Tracker',
          period: '2017 - 2018',
          description: 'Real-time mobile application that tracks and notifies students about college bus locations with live GPS tracking',
          technologies: ['Android', 'Java', 'GPS API', 'Firebase', 'Google Maps API'],
          achievements: [
            'Implemented real-time GPS tracking',
            'Created an intuitive mobile interface for student users',
            'Integrated push notifications for bus arrival alerts'
          ],
          type: 'Mobile Application'
        },
        {
          title: 'Libkart',
          period: '2017',
          description: 'Smart library management mobile app that notifies students about book availability and manages digital library resources',
          technologies: ['Android', 'Java', 'SQLite', 'REST API', 'Firebase Cloud Messaging'],
          achievements: [
            'Developed book search and availability notification system',
            'Built offline-first architecture with local database sync',
            'Implemented push notifications for book availability alerts',
            'Created an admin panel for library staff management'
          ],
          type: 'Mobile Application'
        }
      ]
    },
    education: {
      title: 'Education',
      subtitle: 'Academic background and qualifications',
      degree: 'Bachelor of Technology - Information Technology',
      institution: 'Adi Shankara Institute of Engineering and Technology',
      location: 'Kochi, India',
      period: '2014 - 2018'
    },
    personal: {
      title: 'Personal Profile',
      subtitle: 'Languages and personal interests',
      languagesTitle: 'Languages',
      interestsTitle: 'Interests & Hobbies',
      languages: [
        { name: 'English', proficiency: 'Full Professional Proficiency' },
        { name: 'Danish', proficiency: 'Beginner' },
        { name: 'Malayalam', proficiency: 'Native or Bilingual Proficiency' },
        { name: 'Tamil', proficiency: 'Professional Working Proficiency' },
        { name: 'Hindi', proficiency: 'Limited Working Proficiency' }
      ],
      interests: ['Tech', 'Cricket', 'Athletics', 'Football', 'Chess', 'Gaming', 'YouTube', 'Music', 'E-Sports']
    },
    footer: 'Designed & Developed by Sibin Blessen',
    resume: {
      title: 'Resume',
      subtitle: 'Sibin Blessen - Senior Software Engineer',
      download: 'Download Resume',
      downloadLabel: 'Download Resume PDF',
      open: 'Open in New Tab',
      openLabel: 'Open Resume in new tab',
      notice: 'For the best viewing experience on mobile devices, please download the PDF or open it in a new tab.',
      pdfTitle: 'Sibin Blessen Resume',
      pdfLabel: "Sibin Blessen's Resume PDF"
    }
    ,languageSwitcher: {
      label: 'Language',
      useEnglish: 'Use English',
      useDanish: 'Use Danish'
    },
    themeSwitcher: {
      label: 'Color theme',
      useDark: 'Use dark mode',
      useLight: 'Use light mode'
    }
  },
  da: {
    metadata: {
      title: 'Sibin Blessen | Senior softwareingeniør og Java-udvikler',
      description: 'Senior softwareingeniør med mere end 8 års erfaring inden for robuste Java-backendsystemer med Spring Boot, mikrotjenester, Azure og DevOps. Jeg leder tværfaglige teams og leverer løsninger, der er nemme at vedligeholde.',
      locale: 'da_DK'
    },
    navigation: {
      about: 'Om mig',
      experience: 'Erfaring',
      skills: 'Kompetencer',
      projects: 'Projekter',
      resume: 'CV',
      backToTop: 'Til toppen',
      toggleMenu: 'Åbn navigationsmenu'
    },
    about: {
      ariaLabel: 'Om Sibin Blessen',
      socialLinks: 'Links til sociale medier',
      socialNavigation: 'Navigation til sociale medier',
      mobileSocialLinks: 'Links til sociale medier på mobil',
      overline: 'Java-backendudvikling / systemer, der holder',
      greeting: 'Hej, jeg hedder',
      position: 'Senior softwareingeniør',
      description: 'Senior softwareingeniør med mere end 8 års erfaring inden for robuste Java-backendsystemer med Spring Boot, mikrotjenester, Azure og DevOps. Jeg leder tværfaglige teams og leverer løsninger, der er nemme at vedligeholde.',
      coreExperience: 'Kernekompetencer',
      years: 'år',
      contact: 'Skriv til mig om en stilling',
      contactLabel: 'Send en e-mail til Sibin Blessen',
      linkedIn: 'Besøg Sibin Blessens LinkedIn-profil',
      github: 'Besøg Sibin Blessens GitHub-profil',
      email: 'Send en e-mail til Sibin Blessen',
      linkedInTitle: 'LinkedIn-profil',
      githubTitle: 'GitHub-profil',
      emailTitle: 'E-mailkontakt',
      linkedInNewTab: 'Besøg Sibin Blessens LinkedIn-profil (åbner i en ny fane)',
      githubNewTab: 'Besøg Sibin Blessens GitHub-profil (åbner i en ny fane)',
      emailNewTab: 'Send en e-mail til Sibin Blessen (åbner i en ny fane)',
      imageAlt: 'Professionelt portræt af Sibin Blessen, senior softwareingeniør hos Tata Consultancy Services, med et smil og solbriller',
      logoAlt: 'Sibin Blessens portfolio-logo - senior softwareingeniør'
    },
    experience: {
      title: 'Erfaring',
      subtitle: 'Backendudvikling, cloud-leverancer og teamledelse',
      roles: [
        {
          title: 'Technical Lead og Senior Java-udvikler',
          company: 'Tata Consultancy Services',
          location: 'København, Danmark',
          period: 'Maj 2022 - nu',
          startDate: '2022-05',
          summary: 'Leder et team, der leverer Java-backendservices, hændelsesdrevne integrationer, cloud-drift og teknisk kompetenceudvikling.',
          achievements: [
            'Ledede og vejledte udviklere og styrkede samarbejde og leverancer',
            'Etablerede praksis for code reviews og softwareudvikling, som forbedrede produktionskvaliteten',
            'Implementerede asynkron event-streaming for at forbedre svartider',
            'Tilføjede caching for at reducere databaseforespørgsler og infrastrukturudgifter',
            'Udarbejdede teknisk dokumentation, udviklerguides og driftsvejledninger for at effektivisere teamet',
            'Ledede oplæring i nye værktøjer og frameworks for at understøtte onboarding',
            'Afstemte DevOps-strategien med interessenters og forretningens mål og forbedrede projektleverancerne'
          ]
        },
        {
          title: 'Java-udvikler',
          company: 'Tata Consultancy Services',
          location: 'Kochi, Indien',
          period: 'Aug. 2021 - apr. 2022',
          startDate: '2021-08',
          summary: 'Udviklede cloud-native Java-services, deployment-automatisering, overvågning og planlagte processer til en chatbot til forsikringsskader.',
          achievements: [
            'Designede skalerbare backendservices til en chatbot til forsikringsskader og forbedrede kundeoplevelsen',
            'Udviklede cloud-native Java-applikationer på AKS for at effektivisere deployments',
            'Automatiserede build- og releaseprocesser for at reducere manuel deploymentindsats',
            'Indførte Splunk-overvågning af cloudservices og applikationer og forbedrede reaktionstiden ved hændelser',
            'Omlagde ikke-kritiske synkrone processer til planlagte jobs for at reducere belastning i spidsbelastningsperioder'
          ]
        },
        {
          title: 'Full Stack-udvikler og konstitueret teamleder',
          company: 'Tata Consultancy Services',
          location: 'Kochi, Indien',
          period: 'Dec. 2018 - juli 2021',
          startDate: '2018-12',
          summary: 'Leverede full-stack-, API-, data-, test- og Android-arbejde som konstitueret teamleder og kontaktperson over for kunden.',
          achievements: [
            'Optimerede den eksisterende kodebase for at forbedre indlæsningstider',
            'Ledede et agilt udviklingsteam og nåede de aftalte mål',
            'Designede og vedligeholdt APIer for at forbedre integration og databehandling',
            'Udviklede og vedligeholdt en Android-applikation for at understøtte brugerengagement',
            'Opbyggede kompetencer inden for frontend-frameworks og cloudværktøjer for at dække teamets behov',
            'Indsamlede krav fra interessenter og afstemte den tekniske leverance med forretningens behov',
            'Brugte JPA og moderne databaseteknologier for at forbedre effektiviteten i datahentning',
            'Implementerede JUnit-unit tests, som forbedrede kodekvaliteten og reducerede fejl'
          ]
        }
      ]
    },
    skills: {
      title: 'Kompetencer og teknologier',
      subtitle: 'Mine tekniske kompetencer og kerneområder',
      categories: [
        { title: 'Programmeringssprog', skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'Kotlin', 'Go', 'C', 'C++'] },
        { title: 'Frameworks og biblioteker', skills: ['Spring Boot', 'Quarkus', 'Hibernate', 'Angular', 'React', 'Mikrotjenester'] },
        { title: 'Cloud og DevOps', skills: ['Azure', 'AKS', 'Docker', 'Kubernetes', 'GitLab CI/CD', 'GCP', 'GitHub Actions'] },
        { title: 'Databaser', skills: ['MySQL', 'MongoDB', 'PostgreSQL', 'SQLite', 'SQL', 'NoSQL', 'Relationel database'] },
        { title: 'Udviklingsværktøjer og integration', skills: ['Git', 'Maven', 'npm', 'Splunk', 'Versionsstyring', 'Jest', 'Test', 'REST API', 'Open API', 'Kafka', 'RabbitMQ'] },
        { title: 'Metoder og praksis', skills: ['Agil udvikling', 'SOLID-principper', 'Clean Code', 'Hændelsesdrevet arkitektur', 'Testdrevet udvikling'] }
      ],
      categoryLabel: (category) => `${category} - kompetencer`
    },
    projects: {
      title: 'Udvalgte projekter',
      subtitle: 'Projekter, der viser mine tekniske kompetencer og resultater',
      viewCode: 'Se kode',
      liveDemo: 'Live-demo',
      technologiesUsed: 'Anvendte teknologier',
      achievements: 'Vigtige resultater',
      items: [
        {
          title: 'Personlig portfoliohjemmeside',
          period: 'September 2025',
          description: 'Moderne og responsiv portfoliohjemmeside bygget med React, der viser professionel erfaring, kompetencer og projekter med et glassmorphism-design',
          technologies: ['React', 'JavaScript', 'CSS3', 'HTML5', 'GitHub Pages'],
          achievements: [
            'Bygget fra bunden med moderne React-hooks og funktionelle komponenter',
            'Implementerede responsivt design med CSS Grid og Flexbox',
            'Skabte glassmorphism-effekter med backdrop-filter og gradients',
            'Deployet med GitHub Pages via en automatiseret CI/CD-pipeline'
          ],
          type: 'Webapplikation',
          githubUrl: 'https://github.com/sibinblessen/sibin-blessen-portfolio',
          liveUrl: 'https://sibinblessen.github.io/'
        },
        {
          title: 'College Bus Tracker',
          period: '2017 - 2018',
          description: 'Mobilapplikation i realtid, der sporer busser på collegeområdet og giver studerende besked om deres placering med live-GPS',
          technologies: ['Android', 'Java', 'GPS API', 'Firebase', 'Google Maps API'],
          achievements: [
            'Implementerede GPS-sporing i realtid',
            'Skabte en intuitiv mobilgrænseflade til studerende',
            'Integrerede push-notifikationer om bussers ankomst'
          ],
          type: 'Mobilapplikation'
        },
        {
          title: 'Libkart',
          period: '2017',
          description: 'Smart mobilapp til biblioteksstyring, der giver studerende besked om bogtilgængelighed og administrerer digitale biblioteksressourcer',
          technologies: ['Android', 'Java', 'SQLite', 'REST API', 'Firebase Cloud Messaging'],
          achievements: [
            'Udviklede søgning efter bøger og et system til beskeder om tilgængelighed',
            'Byggede en offline-first-arkitektur med synkronisering mod en lokal database',
            'Implementerede push-notifikationer om ledige bøger',
            'Skabte et administrationspanel til bibliotekets medarbejdere'
          ],
          type: 'Mobilapplikation'
        }
      ]
    },
    education: {
      title: 'Uddannelse',
      subtitle: 'Akademisk baggrund og kvalifikationer',
      degree: 'Bachelor of Technology - Information Technology',
      institution: 'Adi Shankara Institute of Engineering and Technology',
      location: 'Kochi, Indien',
      period: '2014 - 2018'
    },
    personal: {
      title: 'Personlig profil',
      subtitle: 'Sprog og personlige interesser',
      languagesTitle: 'Sprog',
      interestsTitle: 'Interesser og hobbyer',
      languages: [
        { name: 'Engelsk', proficiency: 'Fuld professionel kunnen' },
        { name: 'Dansk', proficiency: 'Begynder' },
        { name: 'Malayalam', proficiency: 'Modersmål eller tosproget kunnen' },
        { name: 'Tamil', proficiency: 'Professionel arbejdskunnen' },
        { name: 'Hindi', proficiency: 'Begrænset arbejdskunnen' }
      ],
      interests: ['Tech', 'Cricket', 'Atletik', 'Fodbold', 'Skak', 'Gaming', 'YouTube', 'Musik', 'E-sport']
    },
    footer: 'Designet og udviklet af Sibin Blessen',
    resume: {
      title: 'CV',
      subtitle: 'Sibin Blessen - Senior softwareingeniør',
      download: 'Download CV',
      downloadLabel: 'Download CV som PDF',
      open: 'Åbn i ny fane',
      openLabel: 'Åbn CV i en ny fane',
      notice: 'For den bedste visning på mobile enheder kan du downloade PDF-filen eller åbne den i en ny fane.',
      pdfTitle: 'Sibin Blessens CV',
      pdfLabel: 'Sibin Blessens CV som PDF'
    },
    languageSwitcher: {
      label: 'Sprog',
      useEnglish: 'Brug engelsk',
      useDanish: 'Brug dansk'
    },
    themeSwitcher: {
      label: 'Farvetema',
      useDark: 'Brug mørk tilstand',
      useLight: 'Brug lys tilstand'
    }
  }
};

export const getInitialLanguage = () => {
  try {
    const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (storedLanguage === 'en' || storedLanguage === 'da') {
      return storedLanguage;
    }
  } catch (error) {
  }

  return 'en';
};