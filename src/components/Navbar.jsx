import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Navbar.css';
import logo from '../../public/images/logo.jpg';

function Navbar() {
    const [click, setClick] = useState(false);
    const { t, i18n } = useTranslation();

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const changeLanguage = () => {
        const newLanguage = i18n.language === 'pl' ? 'en' : 'pl';
        i18n.changeLanguage(newLanguage);
    };

    return (
        <>
            <nav className={'navbar'}>
                <div className={'navbar-container'}>
                    <Link to='/' className={'navbar-logo'} onClick={closeMobileMenu}>
                        <img src={logo} alt="Profile" className="navbar-logo-image" />
                        <span className="navbar-logo-text">Paweł Rozbicki</span>
                    </Link>
                    <div className={'menu-icon'} onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className={'nav-item'}>
                            <Link
                                to={'/'}
                                className={'nav-links'}
                                onClick={closeMobileMenu}
                            >
                                {t('navbar.about_me')}
                            </Link>
                        </li>
                        <li className={'nav-item'}>
                            <Link
                                to={'/gallery'}
                                className={'nav-links'}
                                onClick={closeMobileMenu}
                            >
                                {t('navbar.gallery')}
                            </Link>
                        </li>
                        {/*<li className={'nav-item'}>*/}
                        {/*    <Link*/}
                        {/*        to={'/offer'}*/}
                        {/*        className={'nav-links'}*/}
                        {/*        onClick={closeMobileMenu}*/}
                        {/*    >*/}
                        {/*        {t('navbar.offer')}*/}
                        {/*    </Link>*/}
                        {/*</li>*/}
                        <li className={'nav-item'}>
                            <Link
                                to={'/contact'}
                                className={'nav-links'}
                                onClick={closeMobileMenu}
                            >
                                {t('navbar.contact')}
                            </Link>
                        </li>
                    </ul>
                    <div className={"language-switcher"}>
                        <button onClick={changeLanguage}>
                            {i18n.language === 'pl' ? 'EN' : 'PL'}
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
