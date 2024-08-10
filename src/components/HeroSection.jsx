import './HeroSection.css'
import '../App.css'
import {Button} from "./Button.jsx";

export const HeroSection = () => {
    const scrollDown = () => {
        window.scrollBy({
            top: 800,
            left: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className={'hero-container'}>
            <h1>LOREM IPSUM</h1>
            <p>Neque porro quisquam est qui dolorem</p>
            <Button
                className={'btns'}
                buttonStyle={'btn--primary'}
                buttonSize={'btn--large'}
                onClick={scrollDown}
            >
                See more
            </Button>

        </div>
    );
};

export default HeroSection;