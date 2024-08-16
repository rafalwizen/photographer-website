import React, { useEffect, useRef } from 'react';
import './MainSection.css';
import '../App.css';
import { Button } from "./Button.jsx";

export const MainSection = ({ scrollToCards }) => {
    const mainSectionRef = useRef(null);

    useEffect(() => {
        const navbarHeight = 80;
        if (mainSectionRef.current) {
            mainSectionRef.current.style.height = `calc(100vh - ${navbarHeight}px)`;
        }
    }, []);

    return (
        <div className="main-container" ref={mainSectionRef}>
            <div className="text-content">
                <h1>IPSUM LOREM</h1>
                <p>Neque porro est zmyślonym tekstorem</p>
            </div>
            <div className="main-btns">
                <Button
                    className={'btns'}
                    buttonStyle={'btn--primary'}
                    buttonSize={'btn--large'}
                    onClick={scrollToCards}
                >
                    See more
                </Button>
            </div>
        </div>
    );
};

export default MainSection;
