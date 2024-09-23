import { useState } from 'react';
import Gallery from './Gallery';
import GalleryThumbnail from './GalleryThumbnail';
import '../../App.css';
import './GalleryContainer.css';
import galleryData from '../../assets/config/galleriesConfig.json';

const GalleryContainer = () => {
    const [selectedGallery, setSelectedGallery] = useState(null);

    const handleGalleryClick = (galleryId) => {
        setSelectedGallery(galleryId);
    };

    const handleBackToThumbnails = () => {
        setSelectedGallery(null);
    };

    return (
        <div className="gallery-container">
            {selectedGallery ? (
                <>
                    <button className="prev-button" onClick={handleBackToThumbnails}>
                        &lt;
                    </button>
                    <Gallery galleryName={selectedGallery}/>
                </>
            ) : (
                <div className="thumbnail-grid">
                    {galleryData.map((gallery) => (
                        <GalleryThumbnail
                            key={gallery.id}
                            image={`/images/${gallery.folder}/${gallery.thumbnail}`}
                            onClick={() => handleGalleryClick(gallery.folder)}
                            altText={`Thumbnail for ${gallery.name}`}
                            title={gallery.name}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default GalleryContainer;
