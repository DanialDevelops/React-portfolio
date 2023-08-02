import React from 'react';
import GitHubLogo from '../images/GitHub.png';
import LinkedInLogo from '../images/LinkedIn.png';

const style = {
    footer: {
        backgroundColor: '#333',
        color: '#fff',
        padding: '1rem',
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
      },
      container: {
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
      },
      text: {
        fontSize: '14px',
      },
      socialLinks: {
        display: 'flex',
        alignItems: 'center',
      },
      logo: {
        width: '24px',
        height: '24px',
        marginLeft: '8px',
        cursor: 'pointer',
      },
  };

  function Footer() {
    return (
        <footer style={style.footer}>
        <div style={style.container}>
        <p style={style.text}>
          Danial Choudhry &copy; {new Date().getFullYear()}
        </p>
        <div style={style.socialLinks}>
          <a href="https://github.com/DanialDevelops" target="_blank" rel="noopener noreferrer">
            <img src={GitHubLogo} alt="GitHub" style={style.logo} />
          </a>
          <a href="https://www.linkedin.com/in/danial-choudhry-45a598270/" target="_blank" rel="noopener noreferrer">
            <img src={LinkedInLogo} alt="LinkedIn" style={style.logo} />
          </a>
        </div>
      </div>
      </footer>
    );
  }
  
  export default Footer;