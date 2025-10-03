import './Skills.css';

function Skills() {
    const skillCategories = [
        {
            title: "Programming Languages",
            skills: ["Java", "Python", "JavaScript", "TypeScript", "Kotlin", "Go", "C", "C++"]
        },
        {
            title: "Frameworks & Libraries",
            skills: ["Spring Boot", "Quarkus", "Hibernate", "Angular", "React", "Microservices"]
        },
        {
            title: "Cloud & DevOps",
            skills: ["Azure", "AKS", "Docker", "Kubernetes", "GitLab CI/CD", "GCP", "GitHub Actions"]
        },
        {
            title: "Databases",
            skills: ["MySQL", "MongoDB", "PostgreSQL", "SQLite", "SQL", "NoSQL", "Relational Database"]
        },
        {
            title: "Development Tools & Integration",
            skills: ["Git", "Maven", "npm", "Splunk", "Version Control", "Jest", "Testing", "REST API", "Open API", "Kafka", "RabbitMQ"]
        },
        {
            title: "Methodologies & Practices",
            skills: ["Agile Development", "SOLID Principles", "Clean Code", "Event Driven Architecture", "Test Driven Development"]
        }
    ];

    return (
        <section id="skills" className="skills-section">
            <div className="skills-container">
                <div className="section-header">
                    <h2 className="section-title">Skills & Technologies</h2>
                    <p className="section-subtitle">My technical expertise and core competencies</p>
                </div>

                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <article key={index} className="skill-category">
                            <h3 className="category-title" itemProp="skillCategory">{category.title}</h3>
                            <ul className="skills-list" aria-label={`${category.title} skills`}>
                                {category.skills.map((skill, skillIndex) => (
                                    <li key={skillIndex} className="skill-tag" itemProp="skill">
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;