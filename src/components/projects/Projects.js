import './Projects.css';
import { translations } from '../../i18n';

function Projects({ language }) {
    const content = translations[language].projects;

    return (
        <section id="work" className="projects-section">
            <div className="projects-container">
                <div className="section-header">
                    <h2 className="section-title">{content.title}</h2>
                    <p className="section-subtitle">{content.subtitle}</p>
                </div>

                <div className="projects-grid">
                    {content.items.map((project, index) => (
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
                                            <span className="link-icon">📂</span> {content.viewCode}
                                        </a>
                                    )}
                                    {project.liveUrl && (
                                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                                            <span className="link-icon">🚀</span> {content.liveDemo}
                                        </a>
                                    )}
                                </div>
                            )}
                            
                            <div className="technologies-section">
                                <h4 className="tech-title">{content.technologiesUsed}</h4>
                                <div className="tech-tags">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span key={techIndex} className="tech-tag">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            
                            <div className="achievements-section">
                                <h4 className="achievements-title">{content.achievements}</h4>
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