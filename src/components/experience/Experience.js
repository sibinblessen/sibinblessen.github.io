import './Experience.css';
import { translations } from '../../i18n';

function Experience({ language }) {
    const content = translations[language].experience;
    const experiences = content.roles;

    return (
        <section id="experience" className="experience-section">
            <div className="experience-container">
                <div className="section-header">
                    <h2 className="section-title">{content.title}</h2>
                    <p className="section-subtitle">{content.subtitle}</p>
                </div>
                
                <div className="experience-timeline">
                    {experiences.map((exp, index) => (
                        <article key={index} className="experience-item">
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
                                        <time className="period" dateTime={exp.startDate}>{exp.period}</time>
                                    </div>
                                </div>

                                <p className="experience-summary">{exp.summary}</p>
                                
                                <ul className="achievements-list">
                                    {exp.achievements.map((achievement, achievementIndex) => (
                                        <li key={achievementIndex} className="achievement-item">
                                            {achievement}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;