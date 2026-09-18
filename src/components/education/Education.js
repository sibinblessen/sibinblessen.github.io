import './Education.css';
import { translations } from '../../i18n';

function Education({ language }) {
    const content = translations[language].education;

    return (
        <section id="education" className="education-section">
            <div className="education-container">
                <div className="section-header">
                    <h2 className="section-title">{content.title}</h2>
                    <p className="section-subtitle">{content.subtitle}</p>
                </div>

                <div className="education-content">
                    <div className="education-item">
                        <div className="education-details">
                            <h3 className="degree-title">{content.degree}</h3>
                            <div className="institution">{content.institution}</div>
                            <div className="education-meta">
                                <span className="location">{content.location}</span>
                                <span className="period">{content.period}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Education;