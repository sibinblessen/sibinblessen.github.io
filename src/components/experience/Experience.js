import './Experience.css';

function Experience() {
    const experiences = [
        {
            title: "Technical Lead & Senior Java Developer",
            subtitle: "",
            company: "Tata Consultancy Services",
            location: "Copenhagen, Denmark",
            period: "05/2022 - Present",
            achievements: [
                "Led and mentored a team of 6 developers, boosting productivity by 20% and enhancing collaboration skills within the team",
                "Conducted code reviews and enforced best practices, decreasing production bugs by 25% and improving software reliability",
                "Implemented asynchronous event streaming, reducing response times by over 90% and significantly improving user experience",
                "Optimized database query frequency with caching mechanisms, drastically cutting infrastructure expenses by 90%",
                "Authored comprehensive technical documentation, developer guide and operational runbook, increasing team efficiency by 15%",
                "Led training sessions on new tools and frameworks, enhancing team competency and reducing onboarding time by 30%",
                "Coordinated with stakeholders to align DevOps strategies with business objectives, increasing project delivery success by 100%"
            ]
        },
        {
            title: "Java Developer",
            subtitle: "",
            company: "Tata Consultancy Services",
            location: "Kochi, India",
            period: "08/2021 - 04/2022",
            achievements: [
                "Architected and developed scalable backend services for an insurance claim chat bot, improving customer satisfaction by 60%",
                "Created cloud native Java applications on AKS, improving deployment speed by 50%",
                "Automated build and release processes, enhancing continuous integration and achieving an 80% reduction in manual deployment efforts",
                "Introduced monitoring solutions for cloud services and applications, improving incident response time by 100% using Splunk",
                "Converted non-critical synchronous processes into scheduled batch jobs, improving system responsiveness and reducing peak-time load by 25%"
            ]
        },
        {
            title: "Full Stack Developer & Interim Team Lead",
            subtitle: "",
            company: "Tata Consultancy Services",
            location: "Kochi, India",
            period: "12/2018 - 07/2021",
            achievements: [
                "Optimized existing codebase, reducing load times by 30%, significantly enhancing overall user experience and system efficiency",
                "Led a team of 8 developers using agile methodologies, ensuring timely project delivery and achieving 100% of set goals",
                "Fostered a supportive team environment, encouraging open communication, peer learning, and knowledge sharing",
                "Designed and maintained APIs, improving system integration and reducing data processing time by 40%, streamlining operations",
                "Developed and maintained an Android application, increasing user engagement and satisfaction by 5%, thereby boosting app retention rates",
                "Demonstrated strong willingness to learn, proactively upskilling in frontend frameworks and cloud tooling to bridge team capability gaps",
                "Acted as a customer-facing liaison, gathering requirements directly from stakeholders and ensuring technical alignment with business needs",
                "Utilized JPA and latest database technologies for seamless interactions, achieving a 25% improvement in data retrieval efficiency",
                "Implemented JUnit for unit testing, ensuring code quality increased by 20% and reducing bugs significantly"
            ]
        }
    ];

    return (
        <section id="experience" className="experience-section">
            <div className="experience-container">
                <div className="section-header">
                    <h2 className="section-title">Experience</h2>
                    <p className="section-subtitle">My professional journey and key achievements</p>
                </div>
                
                <div className="experience-timeline">
                    {experiences.map((exp, index) => (
                        <div key={index} className="experience-item">
                            <div className="experience-marker">
                                <div className="marker-dot"></div>
                                {index !== experiences.length - 1 && <div className="marker-line"></div>}
                            </div>
                            
                            <div className="experience-content">
                                <div className="experience-header">
                                    <h3 className="experience-title">{exp.title}</h3>
                                    {exp.subtitle && <h4 className="experience-subtitle">{exp.subtitle}</h4>}
                                    <div className="experience-meta">
                                        <span className="company">{exp.company}</span>
                                        <span className="location">{exp.location}</span>
                                        <span className="period">{exp.period}</span>
                                    </div>
                                </div>
                                
                                <ul className="achievements-list">
                                    {exp.achievements.map((achievement, achievementIndex) => (
                                        <li key={achievementIndex} className="achievement-item">
                                            {achievement}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;