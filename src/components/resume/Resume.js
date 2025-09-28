const Resume = () => {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <embed 
        src="/docs/sibin_blessen_resume.pdf" 
        type="application/pdf" 
        style={{ width: '100%', height: '100%' }}
        title="Sibin Blessen Resume"
        aria-label="Sibin Blessen's Resume PDF"
      />
    </div>
  );
};

export default Resume;