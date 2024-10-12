import React from 'react';
import './About.css';
import { useTranslation } from "react-i18next";

const About = () => {
    const { t } = useTranslation();

    return (
        <div className="about">
            <div className="content">
                <p>{t('about.temp_p')}</p>
                <div className="social-icons">
                    <a href="https://www.instagram.com/p_rozbicki/" target="_blank" rel="noopener noreferrer">
                        <img src="/images/Instagram_logo.png" alt="Facebook" />
                    </a>
                    <a href="https://www.rozbicki.mywed.com" target="_blank" rel="noopener noreferrer">
                        <img src="/images/MyWed_logo.png" alt="Instagram" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;
