import React from 'react';
import styles from './Footer.module.css';


function Footer() {
    return (
        <footer className={styles.footerStyle}>
            <p><a href="https://twitter.com/generalobasi" target="_blank" rel="noopener noreferrer">Generalobasi</a> &copy; 2020</p>  
        </footer>
    )
}

export default Footer;