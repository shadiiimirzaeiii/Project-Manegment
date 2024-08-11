import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      
      <nav className={styles.nav}>
        <Link to="/project-list">Project List</Link>
        <Link to="/create-project">Create Project</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
};

export default Header;
