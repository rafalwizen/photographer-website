import { useState, useEffect } from 'react';
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
    const [galleryData, setGalleryData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('config/galleriesConfig.json');
                const data = await response.json();
                setGalleryData(data);
            } catch (error) {
                console.error('Error loading galleries config:', error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        const loadImagesFromGallery = async () => {
            const gallery = galleryData.find(item => item.id === galleryName);
            const numberOfImages = gallery ? gallery.numberOfImages : null;
            if (numberOfImages) {
                const thumbnails = await loadImages(galleryName, numberOfImages);
                setThumbnailList(thumbnails);
            }
        };
        if (galleryData.length > 0) {
            loadImagesFromGallery();
        }
    }, [galleryName, galleryData]);

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
