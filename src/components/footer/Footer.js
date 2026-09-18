import './Footer.css';

function Footer({ content }) {
  return (
    <footer className="footer-container">
      <a href="https://github.com/sibinblessen" target="_blank" rel="noopener noreferrer" className="footer">{content}</a>
    </footer>
  );
}

export default Footer;