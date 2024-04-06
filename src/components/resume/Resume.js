import React from 'react';

const Resume = () => {
  return (
    <html>
      <head>
        <title>Sibin Blessen - Resume</title>
      </head>
      <body>
      <embed src="/docs/resume.pdf" type="application/pdf" style={{width: '100%', height: '100vh'}}/>
      </body>
    </html>
  );
};

export default Resume;