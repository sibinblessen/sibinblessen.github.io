import './Projects.css';

function Projects() {
    const projects = [
        {
            title: "Personal Portfolio Website",
            period: "September 2025",
            description: "Modern, responsive portfolio website built with React showcasing professional experience, skills, and projects with glassmorphism design",
            technologies: ["React", "JavaScript", "CSS3", "HTML5", "GitHub Pages"],
            achievements: [
                "Built from scratch using modern React hooks and functional components",
                "Implemented responsive design with CSS Grid and Flexbox",
                "Created glassmorphism UI effects with backdrop-filter and gradients",
                "Deployed using GitHub Pages with automated CI/CD pipeline"
            ],
            type: "Web Application",
            githubUrl: "https://github.com/sibinblessen/sibin-blessen-portfolio",
            liveUrl: "https://sibinblessen.github.io/"
        },
        {
            title: "College Bus Tracker",
            period: "2017 - 2018",
            description: "Real-time mobile application that tracks and notifies students about college bus locations with live GPS tracking",
            technologies: ["Android", "Java", "GPS API", "Firebase", "Google Maps API"],
            achievements: [
                "Won 'Best Project Award 2018' at ASIET college",
                "Implemented real-time GPS tracking with 95% accuracy",
                "Created intuitive mobile interface for 500+ daily users",
                "Integrated push notifications for bus arrival alerts"
            ],
            type: "Mobile Application"
        },
        {
            title: "Libkart",
            period: "2017",
            description: "Smart library management mobile app that notifies students about book availability and manages digital library resources",
            technologies: ["Android", "Java", "SQLite", "REST API", "Firebase Cloud Messaging"],
            achievements: [
                "Developed book search and availability notification system",
                "Built offline-first architecture with local database sync",
                "Implemented push notifications for book availability alerts",
                "Created admin panel for library staff management"
            ],
            type: "Mobile Application"
        }
    ];

    return (
        <section id="work" className="projects-section">
            <div className="projects-container">
                <div className="section-header">
                    <h2 className="section-title">Featured Projects</h2>
                    <p className="section-subtitle">Key projects that showcase my technical expertise and impact</p>
                </div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="project-header">
                                <div className="project-type">{project.type}</div>
                                <div className="project-period">{project.period}</div>
                            </div>
                            
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            
                            {(project.githubUrl || project.liveUrl) && (
                                <div className="project-links">
                                    {project.githubUrl && (
                                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                                            <span className="link-icon">📂</span> View Code
                                        </a>
                                    )}
                                    {project.liveUrl && (
                                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                                            <span className="link-icon">🚀</span> Live Demo
                                        </a>
                                    )}
                                </div>
                            )}
                            
                            <div className="technologies-section">
                                <h4 className="tech-title">Technologies Used</h4>
                                <div className="tech-tags">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span key={techIndex} className="tech-tag">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            
                            <div className="achievements-section">
                                <h4 className="achievements-title">Key Achievements</h4>
                                <ul className="achievements-list">
                                    {project.achievements.map((achievement, achievementIndex) => (
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

export default Projects;