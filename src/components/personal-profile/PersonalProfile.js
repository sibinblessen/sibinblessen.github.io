import './PersonalProfile.css';

function PersonalProfile() {
    const languages = [
        { name: "English", proficiency: "Full Professional Proficiency" },
        { name: "Danish", proficiency: "Beginner" },
        { name: "Malayalam", proficiency: "Native or Bilingual Proficiency" },
        { name: "Tamil", proficiency: "Professional Working Proficiency" },
        { name: "Hindi", proficiency: "Limited Working Proficiency" }
    ];

    const interests = [
        { icon: "💻", name: "Tech" },
        { icon: "🏏", name: "Cricket" },
        { icon: "🏃", name: "Athletics" },
        { icon: "⚽", name: "Football" },
        { icon: "♛", name: "Chess" },
        { icon: "🎮", name: "Gaming" },
        { icon: "📺", name: "Youtube" },
        { icon: "🎵", name: "Music" },
        { icon: "🏆", name: "E-Sports" }
    ];

    return (
        <section id="personal" className="personal-section">
            <div className="personal-container">
                <div className="section-header">
                    <h2 className="section-title">Personal Profile</h2>
                    <p className="section-subtitle">Languages and personal interests</p>
                </div>

                <div className="personal-content">
                    <div className="languages-section">
                        <h3 className="subsection-title">Languages</h3>
                        <div className="languages-grid">
                            {languages.map((language, index) => (
                                <div key={index} className="language-item">
                                    <div className="language-name">{language.name}</div>
                                    <div className="proficiency-level">{language.proficiency}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="interests-section">
                        <h3 className="subsection-title">Interests & Hobbies</h3>
                        <div className="interests-grid">
                            {interests.map((interest, index) => (
                                <div key={index} className="interest-item">
                                    <div className="interest-icon">{interest.icon}</div>
                                    <span>{interest.name}</span>
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