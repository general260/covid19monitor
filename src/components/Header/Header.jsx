import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';


function Header() {
    return (
        <header className={styles.headerStyle}>
            <h1>COVID-19 Monitor</h1>
            <Link className={styles.linkStyle} to="/">Home</Link>{" "} 
            <Link className={styles.linkStyle} to="/contributors">Contributors</Link> 
        </header>
    )
}

export default Header;