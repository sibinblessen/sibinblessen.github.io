import './Education.css';

function Education() {
    return (
        <section id="education" className="education-section">
            <div className="education-container">
                <div className="section-header">
                    <h2 className="section-title">Education</h2>
                    <p className="section-subtitle">Academic background and qualifications</p>
                </div>

                <div className="education-content">
                    <div className="education-item">
                        <div className="education-details">
                            <h3 className="degree-title">Bachelor of Technology - Information Technology</h3>
                            <div className="institution">Adi Shankara Institute of Engineering and Technology</div>
                            <div className="education-meta">
                                <span className="location">Kochi, India</span>
                                <span className="period">2014 - 2018</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Education;