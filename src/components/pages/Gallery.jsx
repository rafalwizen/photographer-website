import { useState, useEffect } from 'react';
import galleryData from '../../assets/config/galleriesConfig.json';
import '../../App.css';
import './Gallery.css';

const loadImages = async (galleryName, imagesSize) => {
    const indices = Array.from({ length: imagesSize }, (_, index) => index + 1);

    const thumbnailPromises = indices.map(index =>
        fetch(`/images/${galleryName}/${index}-small.jpg`)
            .then(response => response.ok ? `/images/${galleryName}/${index}-small.jpg` : null)
            .catch(() => null)
    );
    const thumbnails = await Promise.all(thumbnailPromises);
    return thumbnails.filter(img => img !== null);
};

const Gallery = ({ galleryName }) => {
    const [thumbnailList, setThumbnailList] = useState([]);

    useEffect(() => {
        const loadImagesFromGallery = async () => {
            const gallery = galleryData.find(item => item.id === galleryName);
            const numberOfImages = gallery ? gallery.numberOfImages : null;
            const thumbnails = await loadImages(galleryName, numberOfImages);
            setThumbnailList(thumbnails);
        };
        loadImagesFromGallery();
    }, [galleryName]);

    return (
        <div className="gallery-grid">
            {thumbnailList.map((thumbnail, index) => (
                <div key={index} className="gallery-item">
                    <img src={thumbnail} alt={`Gallery image ${index + 1}`} />
                </div>
            ))}
        </div>
    );
};

export default Gallery;
