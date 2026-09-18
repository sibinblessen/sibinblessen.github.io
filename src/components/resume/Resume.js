import React, { useState, useEffect } from 'react';
import './Resume.css';
import { translations } from '../../i18n';

const Resume = ({ language = 'en' }) => {
  const content = translations[language].resume;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/docs/sibin_blessen_resume.pdf';
    link.download = 'sibin_blessen_resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="resume-container">
      {isMobile ? (
        <div className="mobile-resume-content">
          <div className="mobile-resume-header">
            <h1 className="resume-title">{content.title}</h1>
            <p className="resume-subtitle">{content.subtitle}</p>
          </div>
          
          <div className="mobile-resume-actions">
            <button 
              onClick={handleDownload}
              className="download-button"
              aria-label={content.downloadLabel}
            >
              📄 {content.download}
            </button>
            
            <a 
              href="/docs/sibin_blessen_resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="view-button"
              aria-label={content.openLabel}
            >
              🔗 {content.open}
            </a>
          </div>

          <div className="mobile-pdf-notice">
            <p>
              {content.notice}
            </p>
          </div>

          <div className="mobile-pdf-container">
            <embed 
              src="/docs/sibin_blessen_resume.pdf" 
              type="application/pdf" 
              className="mobile-pdf-embed"
              title={content.pdfTitle}
              aria-label={content.pdfLabel}
            />
          </div>
        </div>
      ) : (
        <div className="desktop-resume-content">
          <embed 
            src="/docs/sibin_blessen_resume.pdf" 
            type="application/pdf" 
            className="desktop-pdf-embed"
            title={content.pdfTitle}
            aria-label={content.pdfLabel}
          />
        </div>
      )}
    </div>
  );
};

export default Resume;