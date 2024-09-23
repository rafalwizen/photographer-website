import { useState, useEffect, useRef } from "react";
import "./Opinions.css";
import opinionsData from '../assets/config/opinionsConfig.json';

const Opinions = () => {
    const [currentComment, setCurrentComment] = useState(0);
    const [isAnimating, setIsAnimating] = useState(true);
    const wrapperRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(true);
            setCurrentComment((prevComment) => prevComment + 1);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (currentComment === opinionsData.length) {
            setTimeout(() => {
                setIsAnimating(false);
                setCurrentComment(0);
            }, 1000);
        }
    }, [currentComment]);

    return (
        <div className="opinions-container">
            <div
                ref={wrapperRef}
                className="opinions-wrapper"
                style={{
                    transform: `translateX(-${currentComment * 100}%)`,
                    transition: isAnimating ? "transform 1s ease-in-out" : "none",
                }}
                onTransitionEnd={() => {
                    if (!isAnimating && currentComment === 0) {
                        setIsAnimating(true);
                    }
                }}
            >
                {opinionsData.map((comment, index) => (
                    <div className="opinion" key={index}>
                        <img src={comment.img} alt="comment" />
                        <p>{comment.text}</p>
                    </div>
                ))}
                <div className="opinion">
                    <img src={opinionsData[0].img} alt="comment" />
                    <p>{opinionsData[0].text}</p>
                </div>
            </div>
        </div>
    );
};

export default Opinions;
