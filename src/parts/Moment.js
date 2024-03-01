// Moment.jsx
import React from 'react';
import Gallery from 'react-grid-gallery';
import Lightbox from 'react-images';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Title from '../components/Title';

const Moment = ({ data }) => {
  // Inisialisasi AOS pada komponen mount
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
    });
  }, []);

  const [lightboxIsOpen, setLightboxIsOpen] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState(0);

  const openLightbox = (index) => {
    setLightboxIsOpen(true);
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setLightboxIsOpen(false);
  };

  const goToPrevImage = () => {
    setSelectedImage((prevImage) => (prevImage !== undefined && prevImage > 0 ? prevImage - 1 : images.length - 1));
  };
  
  const goToNextImage = () => {
    setSelectedImage((prevImage) => (prevImage !== undefined && prevImage < images.length - 1 ? prevImage + 1 : 0));
  };

  const images = data.images.map((image, index) => ({
    ...image,
    caption: image.caption, // Sesuaikan dengan struktur data Anda
    customOverlay: (
      <div className="custom-overlay" onClick={() => openLightbox(index)}>
        <div className="overlay-text">Click to view</div>
      </div>
    ),
  }));

  return (
    <div className="moment-container" id="moment" data-aos="fade-up">
      <Title title={'Moment'} />
      <div className="gallery-card">
        <Gallery
          images={images}
          enableImageSelection={false}
          margin={10}
          rowHeight={150}
          backdropClosesModal
          lightboxWidth={1200}
          lightboxHeight={800}
          customControls={[
            <button key="close-button" className="close-button" onClick={closeLightbox}>
              Close
            </button>,
          ]}
          currentImageWillChange={(index) => setSelectedImage(index)}
          onClickThumbnail={(index) => openLightbox(index)}
        />
      </div>

      {/* Lightbox */}
      {lightboxIsOpen && (
        <Lightbox
          images={images}
          isOpen={lightboxIsOpen}
          onClose={closeLightbox}
          currentImage={selectedImage}
          onClickPrev={goToPrevImage}
          onClickNext={goToNextImage}
        />
      )}
    </div>
  );
};

export default Moment;