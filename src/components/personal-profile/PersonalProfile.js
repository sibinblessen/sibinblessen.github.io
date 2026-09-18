import './PersonalProfile.css';
import { translations } from '../../i18n';

function PersonalProfile({ language }) {
    const content = translations[language].personal;
    const icons = ['💻', '🏏', '🏃', '⚽', '♛', '🎮', '📺', '🎵', '🏆'];

    return (
        <section id="personal" className="personal-section">
            <div className="personal-container">
                <div className="section-header">
                    <h2 className="section-title">{content.title}</h2>
                    <p className="section-subtitle">{content.subtitle}</p>
                </div>

                <div className="personal-content">
                    <div className="languages-section">
                        <h3 className="subsection-title">{content.languagesTitle}</h3>
                        <div className="languages-grid">
                            {content.languages.map((language, index) => (
                                <div key={index} className="language-item">
                                    <div className="language-name">{language.name}</div>
                                    <div className="proficiency-level">{language.proficiency}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="interests-section">
                        <h3 className="subsection-title">{content.interestsTitle}</h3>
                        <div className="interests-grid">
                            {content.interests.map((interest, index) => (
                                <div key={index} className="interest-item">
                                    <div className="interest-icon">{icons[index]}</div>
                                    <span>{interest}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PersonalProfile;