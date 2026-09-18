import './Skills.css';
import { translations } from '../../i18n';

function Skills({ language }) {
    const content = translations[language].skills;

    return (
        <section id="skills" className="skills-section">
            <div className="skills-container">
                <div className="section-header">
                    <h2 className="section-title">{content.title}</h2>
                    <p className="section-subtitle">{content.subtitle}</p>
                </div>

                <div className="skills-grid">
                    {content.categories.map((category, index) => (
                        <article key={index} className="skill-category">
                            <h3 className="category-title" itemProp="skillCategory">{category.title}</h3>
                            <ul className="skills-list" aria-label={content.categoryLabel(category.title)}>
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