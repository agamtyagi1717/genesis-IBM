import React from 'react';
import LinksList from '../links-list/LinksList';
import links from './links';
import styles from './Footer.module.css';
import {Link} from 'react-router-dom';

function Footer() {
    return (
        <>
            <footer
                id='page-footer'
                className={styles.footer}
            >
                <div className={styles.linksContainer}>
                    <div>
                        <p>Agam Tyagi</p>
                        <p>01796402721</p>
                        <p>agamtyagi1717@gmail.com</p>
                    </div>
                    <div>
                        <p>Pawam Sahu</p>
                        <p>02196402721</p>
                        <p>pawansahu2060@gmail.com</p>
                    </div>
                    <div>
                        <p>Mudit Jain</p>
                        <p>0196402721</p>
                        <p>muditjain817@gmail.com</p>
                    </div>
                    <div>
                        <p>Kk Gupta</p>
                        <p>03714802721</p>
                        <p>kartikaygupta2808@gmail.com</p>
                    </div>
                    <div>
                        <p>Sidhhant</p>
                        <p>00714802721</p>
                        <p>sidvaidwal73@gmail.com</p>
                    </div>
                    <div>
                        <p>Ansh Jindal</p>
                        <p>36614802721</p>
                        <p>jindalansh16@gmail.com</p>
                    </div>
                    
                </div>
                <div className={styles.logoCopyRights}>
                    <Link to='/'>
                        <img
                            src={require('../../materials/logo-udemy.png')}
                            alt='logo'
                            style={{width: '200px', marginTop: '10px'}}
                        />
                    </Link>
                    <div className={styles.copyRights}>© 2024 Genesis</div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
