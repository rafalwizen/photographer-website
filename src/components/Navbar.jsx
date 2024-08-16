import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const { t, i18n } = useTranslation();

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <>
            <nav className={'navbar'}>
                <div className={'navbar-container'}>
                    <Link to='/' className={'navbar-logo'} onClick={closeMobileMenu}>
                        Paweł Rozbicki
                    </Link>
                    <div className={'menu-icon'} onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className={'nav-item'}>
                            <Link to={'/photographer-website/'} className={'nav-links'} onClick={closeMobileMenu}>
                                {t('navbar.home')}
                            </Link>
                        </li>
                        <li className={'nav-item'}>
                            <Link
                                to={'/photographer-website/about-me'}
                                className={'nav-links'}
                                onClick={closeMobileMenu}
                            >
                                {t('navbar.about_me')}
                            </Link>
                        </li>
                        <li className={'nav-item'}>
                            <Link
                                to={'/photographer-website/gallery'}
                                className={'nav-links'}
                                onClick={closeMobileMenu}
                            >
                                {t('navbar.gallery')}
                            </Link>
                        </li>
                        <li className={'nav-item'}>
                            <Link
                                to={'/photographer-website/opinions'}
                                className={'nav-links'}
                                onClick={closeMobileMenu}
                            >
                                {t('navbar.opinions')}
                            </Link>
                        </li>
                        <li className={'nav-item'}>
                            <Link
                                to={'/photographer-website/offer'}
                                className={'nav-links'}
                                onClick={closeMobileMenu}
                            >
                                {t('navbar.offer')}
                            </Link>
                        </li>
                        <li className={'nav-item'}>
                            <Link
                                to={'/photographer-website/contact'}
                                className={'nav-links'}
                                onClick={closeMobileMenu}
                            >
                                {t('navbar.contact')}
                            </Link>
                        </li>
                    </ul>
                    <div className={"language-switcher"}>
                        <button onClick={() => changeLanguage('pl')}>PL</button>
                        <button onClick={() => changeLanguage('en')}>EN</button>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
