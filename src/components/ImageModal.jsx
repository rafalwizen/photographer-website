import React, { useEffect } from 'react';
import '../App.css';
import './ImageModal.css';

const ImageModal = ({ image, onClose, onNext, onPrev }) => {
    const handleKeyDown = (e) => {
        if (e.key === 'ArrowRight') {
            onNext();
        } else if (e.key === 'ArrowLeft') {
            onPrev();
        } else if (e.key === 'Escape') {
            onClose();
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div className={"modal-overlay"} onClick={onClose}>
            <div className={"modal-content"} onClick={(e) => e.stopPropagation()}>
                <button className={"modal-close"} onClick={onClose}>X</button>
                <button className={"modal-prev"} onClick={onPrev}>&larr;</button>
                <img src={image} alt={"Modal content"} className={"modal-image"} />
                <button className={"modal-next"} onClick={onNext}>&rarr;</button>
            </div>
        </div>
    );
};

export default ImageModal;
