import React, { useState, useEffect } from 'react';
import ImageModal from '../ImageModal.jsx';
import '../../App.css';
import './Gallery.css';

const images = import.meta.glob('../../../public/images/*-full.{png,jpg,jpeg,svg}');
const thumbnails = import.meta.glob('../../../public/images/*-small.{png,jpg,jpeg,svg}');

const Gallery = () => {
    const [imageList, setImageList] = useState([]);
    const [thumbnailList, setThumbnailList] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(null);

    useEffect(() => {
        const loadImages = async () => {
            const importedImages = await Promise.all(
                Object.keys(images).map(async (key) => {
                    const module = await images[key]();
                    return module.default;
                })
            );

            const importedThumbnails = await Promise.all(
                Object.keys(thumbnails).map(async (key) => {
                    const module = await thumbnails[key]();
                    return module.default;
                })
            );

            setImageList(importedImages);
            setThumbnailList(importedThumbnails);
        };

        loadImages();
    }, []);

    const openModal = (index) => {
        setCurrentIndex(index);
    };

    const closeModal = () => {
        setCurrentIndex(null);
    };

    const showNextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imageList.length);
    };

    const showPrevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + imageList.length) % imageList.length);
    };

    return (
        <div className={"gallery-grid"}>
            {thumbnailList.map((thumbnail, index) => (
                <div key={index} className={"gallery-item"} onClick={() => openModal(index)}>
                    <img src={thumbnail} alt={`Gallery image ${index + 1}`} />
                </div>
            ))}
            {currentIndex !== null && (
                <ImageModal
                    image={imageList[currentIndex]}
                    onClose={closeModal}
                    onNext={showNextImage}
                    onPrev={showPrevImage}
                />
            )}
        </div>
    );
};

export default Gallery;
