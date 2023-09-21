import React from 'react';

const ResumeSection = () => {
  const resumeLink = 'https://docs.google.com/document/d/1s2CXKtmmCWyyo8APYaKUB0rXV3qI3Rm73CK8mhZL9Ic/edit?usp=sharing';

  const proficiencies = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];

  return (
    <section style={styles.resumeSection}>
      <h2 style={styles.heading}>Resume</h2>
      <p style={styles.resumeLink}>
        Download my resume: <a href={resumeLink} target="_blank" rel="noopener noreferrer" style={styles.link}>Download</a>
      </p>
      <h3 style={styles.heading}>Proficiencies</h3>
      <ul style={styles.list}>
        {proficiencies.map((proficiency, index) => (
          <li key={index} style={styles.listItem}>{proficiency}</li>
        ))}
      </ul>
    </section>
  );
};

const styles = {
  resumeSection: {
    margin: '20px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '10px',
  },
  resumeLink: {
    marginBottom: '20px',
  },
  link: {
    color: '#007BFF',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  listItem: {
    marginBottom: '5px',
  },
};

export default ResumeSection;