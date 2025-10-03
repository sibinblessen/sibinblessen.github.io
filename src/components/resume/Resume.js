import React, { useState, useEffect } from 'react';
import './Resume.css';

const Resume = () => {
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
            <h1 className="resume-title">Resume</h1>
            <p className="resume-subtitle">Sibin Blessen - Senior Software Engineer</p>
          </div>
          
          <div className="mobile-resume-actions">
            <button 
              onClick={handleDownload}
              className="download-button"
              aria-label="Download Resume PDF"
            >
              📄 Download Resume
            </button>
            
            <a 
              href="/docs/sibin_blessen_resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="view-button"
              aria-label="Open Resume in new tab"
            >
              🔗 Open in New Tab
            </a>
          </div>

          <div className="mobile-pdf-notice">
            <p>
              For the best viewing experience on mobile devices, 
              please download the PDF or open it in a new tab.
            </p>
          </div>

          <div className="mobile-pdf-container">
            <embed 
              src="/docs/sibin_blessen_resume.pdf" 
              type="application/pdf" 
              className="mobile-pdf-embed"
              title="Sibin Blessen Resume"
              aria-label="Sibin Blessen's Resume PDF"
            />
          </div>
        </div>
      ) : (
        <div className="desktop-resume-content">
          <embed 
            src="/docs/sibin_blessen_resume.pdf" 
            type="application/pdf" 
            className="desktop-pdf-embed"
            title="Sibin Blessen Resume"
            aria-label="Sibin Blessen's Resume PDF"
          />
        </div>
      )}
    </div>
  );
};

export default Resume;