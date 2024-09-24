import { useState, useEffect, useRef } from "react";
import "./Opinions.css";

const Opinions = () => {
    const [currentComment, setCurrentComment] = useState(0);
    const [isAnimating, setIsAnimating] = useState(true);
    const [opinionsData, setOpinionsData] = useState([]);
    const wrapperRef = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/config/opinionsConfig.json');
                const data = await response.json();
                setOpinionsData(data);
            } catch (error) {
                console.error('Error loading opinions config:', error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(true);
            setCurrentComment((prevComment) => prevComment + 1);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (opinionsData.length > 0 && currentComment === opinionsData.length) {
            setTimeout(() => {
                setIsAnimating(false);
                setCurrentComment(0);
            }, 1000);
        }
    }, [currentComment, opinionsData]);

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
                {opinionsData.length > 0 && (
                    <div className="opinion">
                        <img src={opinionsData[0].img} alt="comment" />
                        <p>{opinionsData[0].text}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Opinions;
