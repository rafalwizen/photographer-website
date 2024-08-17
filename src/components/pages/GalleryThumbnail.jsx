import './GalleryThumbnail.css';

const GalleryThumbnail = ({ image, onClick, altText, title }) => {
    return (
        <div className="gallery-thumbnail" onClick={onClick}>
            <img src={image} alt={altText} />
            <div className="thumbnail-title">{title}</div>
        </div>
    );
};

export default GalleryThumbnail;
