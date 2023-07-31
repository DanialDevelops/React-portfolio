import React
 from 'react';

const Nav = ({ selectedNavTitles, handleNavSelection }) => {
  const allNavTitles = [
    { title: 'About Me', sectionId: 'about' },
    { title: 'Portfolio', sectionId: 'portfolio' },
    { title: 'Contact', sectionId: 'contact' },
    { title: 'Resume', sectionId: 'resume' },
  ];
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        {allNavTitles.map((navItem) => (
          <li key={navItem.title} style={styles.navItem}>
            <button
              onClick={() => handleNavSelection([navItem])} 
              style={
                selectedNavTitles.some((item) => item.title === navItem.title)
                  ? styles.activeLink
                  : styles.link
              }
            >
              {navItem.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

const styles = {
  navbar: {
    backgroundColor: '#333',
    padding: '1rem',
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'space-around',
    margin: 0,
    padding: 0,
  },
  navItem: {
    margin: 0,
  },
  link: {
    color: '#fff',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
  },
  activeLink: {
    color: '#ff4500', 
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
  },
};

export default Nav;