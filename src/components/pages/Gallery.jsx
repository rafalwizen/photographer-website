import { useState, useEffect } from 'react';
import ImageModal from '../ImageModal.jsx';
import galleryData from '../../config/galleriesConfig.json';
import '../../App.css';
import './Gallery.css';

const baseUrl = import.meta.env.VITE_PUBLIC_BASE_URL;

const loadImages = async (galleryName, imagesSize) => {
    const indices = Array.from({ length: imagesSize }, (_, index) => index + 1);
    const imagePromises = indices.map(index =>
        fetch(`${baseUrl}/images/${galleryName}/${index}-full.jpg`)
            .then(response => response.ok ? `${baseUrl}/public/images/${galleryName}/${index}-full.jpg` : null)
            .catch(() => null)
    );

    const thumbnailPromises = indices.map(index =>
        fetch(`${baseUrl}/images/${galleryName}/${index}-small.jpg`)
            .then(response => response.ok ? `${baseUrl}/public/images/${galleryName}/${index}-small.jpg` : null)
            .catch(() => null)
    );

    const images = await Promise.all(imagePromises);
    const thumbnails = await Promise.all(thumbnailPromises);

    return { images: images.filter(img => img !== null), thumbnails: thumbnails.filter(img => img !== null) };
};

const Gallery = ({ galleryName }) => {
    const [imageList, setImageList] = useState([]);
    const [thumbnailList, setThumbnailList] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(null);

    useEffect(() => {
        const loadImagesFromGallery = async () => {
            const gallery = galleryData.find(item => item.id === galleryName);
            const numberOfImages = gallery ? gallery.numberOfImages : null;
            const { images, thumbnails } = await loadImages(galleryName, numberOfImages);
            setImageList(images);
            setThumbnailList(thumbnails);
        };
        loadImagesFromGallery();
    }, [galleryName]);

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
        <div className="gallery-grid">
            {thumbnailList.map((thumbnail, index) => (
                <div key={index} className="gallery-item" onClick={() => openModal(index)}>
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
