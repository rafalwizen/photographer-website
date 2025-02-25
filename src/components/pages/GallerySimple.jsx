import { useState, useEffect } from "react";
import "../../../../photographer-website/src/components/pages/GallerySimple.css";

import img1 from "../../../../photographer-website/src/assets/images/1-1.jpg";
import img2 from "../../../../photographer-website/src/assets/images/1-3.jpg";
import img3 from "../../../../photographer-website/src/assets/images/1-4.jpg";
import img4 from "../../../../photographer-website/src/assets/images/1-4a.jpg";
import img5 from "../../../../photographer-website/src/assets/images/1-6.jpg";
import img6 from "../../../../photographer-website/src/assets/images/3-1.jpg";
import img7 from "../../../../photographer-website/src/assets/images/3-4.png";
import img8 from "../../../../photographer-website/src/assets/images/4-0.jpg";
import img9 from "../../../../photographer-website/src/assets/images/4-1.jpg";
import img10 from "../../../../photographer-website/src/assets/images/4-2.jpg";
import img11 from "../../../../photographer-website/src/assets/images/4-3.jpg";
import img12 from "../../../../photographer-website/src/assets/images/4-4.jpg";
import img13 from "../../../../photographer-website/src/assets/images/4-7.jpg";
import img14 from "../../../../photographer-website/src/assets/images/5-1.jpg";
import img15 from "../../../../photographer-website/src/assets/images/5-2.jpg";
import img16 from "../../../../photographer-website/src/assets/images/6-1.jpg";
import img17 from "../../../../photographer-website/src/assets/images/6-2.jpg";
import img18 from "../../../../photographer-website/src/assets/images/6-3.jpg";
import img19 from "../../../../photographer-website/src/assets/images/6-4.jpg";
import img20 from "../../../../photographer-website/src/assets/images/6-5.jpg";
import img21 from "../../../../photographer-website/src/assets/images/7-1.jpg";
import img22 from "../../../../photographer-website/src/assets/images/7-2.jpg";
import img23 from "../../../../photographer-website/src/assets/images/7-3.jpg";
import img24 from "../../../../photographer-website/src/assets/images/7-4.jpg";
import img25 from "../../../../photographer-website/src/assets/images/7-5.jpg";
import img26 from "../../../../photographer-website/src/assets/images/8-1.jpg";
import img27 from "../../../../photographer-website/src/assets/images/8-2.jpg";
import img28 from "../../../../photographer-website/src/assets/images/9-1.jpg";
import img29 from "../../../../photographer-website/src/assets/images/9-2.jpg";
import img30 from "../../../../photographer-website/src/assets/images/9-3.jpg";
import img31 from "../../../../photographer-website/src/assets/images/9-4.jpg";
import img32 from "../../../../photographer-website/src/assets/images/9-6.jpg";
import img33 from "../../../../photographer-website/src/assets/images/9-7.jpg";
import img34 from "../../../../photographer-website/src/assets/images/9-8.jpg";
import img35 from "../../../../photographer-website/src/assets/images/9-9.jpg";
import img36 from "../../../../photographer-website/src/assets/images/9-10.jpg";
import img37 from "../../../../photographer-website/src/assets/images/9-10a.jpg";
import img38 from "../../../../photographer-website/src/assets/images/9-11.jpg";
import img39 from "../../../../photographer-website/src/assets/images/9-12.jpg";
import img40 from "../../../../photographer-website/src/assets/images/9-13.jpg";
import img41 from "../../../../photographer-website/src/assets/images/9-14.jpg";
import img42 from "../../../../photographer-website/src/assets/images/9-15.jpg";
import img43 from "../../../../photographer-website/src/assets/images/9-15a.jpg";
import img44 from "../../../../photographer-website/src/assets/images/10-1.jpg";
import img45 from "../../../../photographer-website/src/assets/images/10-3.jpg";
import img46 from "../../../../photographer-website/src/assets/images/10-4.jpg";
import img47 from "../../../../photographer-website/src/assets/images/10-5.jpg";
import img48 from "../../../../photographer-website/src/assets/images/10-5a.jpg";
import img49 from "../../../../photographer-website/src/assets/images/10-6.jpg";
import img50 from "../../../../photographer-website/src/assets/images/10-7.jpg";
import img51 from "../../../../photographer-website/src/assets/images/10-10.jpg";

const GallerySimple = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        if (selectedImage) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [selectedImage]);

    const images = [
        img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
        img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
        img21, img22, img23, img24, img25, img26, img27, img28, img29, img30,
        img31, img32, img33, img34, img35, img36, img37, img38, img39, img40,
        img41, img42, img43, img44, img45, img46, img47, img48, img49, img50, img51
    ];

    return (
        <>
            <div className="gallery-container">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="gallery-item"
                        onClick={() => setSelectedImage(image)}
                    >
                        <img
                            src={image}
                            alt={`Img ${index + 1}`}
                            className="gallery-image"
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
                    <div className="modal-content">
                        <img src={selectedImage} alt="Selected cake" className="modal-image" />
                    </div>
                </div>
            )}
        </>
    );
};

export default GallerySimple;
