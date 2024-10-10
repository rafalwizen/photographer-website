import React from 'react';
import './About.css';
import {useTranslation} from "react-i18next";

const About = () => {
    const { t } = useTranslation();

    return (
        <div className={'about'}>
            <div className="content">
                <p>{t('about.temp_p')}</p>
            </div>
        </div>
    );
};

export default About;
