import { useRef } from 'react';
import MainSection from "../MainSection.jsx";
import Cards from "../Cards.jsx";

const NAVBAR_HEIGHT = 80;

export const Home = () => {
    const cardsRef = useRef(null);

    const scrollToCards = () => {
        if (cardsRef.current) {
            const offsetTop = cardsRef.current.offsetTop - NAVBAR_HEIGHT;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div>
            <MainSection scrollToCards={scrollToCards}/>
            <div ref={cardsRef}>
                <Cards/>
            </div>
        </div>
    );
};

export default Home;
