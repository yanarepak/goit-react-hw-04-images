import { GalleryItem, PhotoGallery } from './ImageGalleryItem.styled';
import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';

export const ImageGalleryItem = ({ webformatURL, tags, largeImageURL }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(showModal  => !showModal);
  };

    return (
      <GalleryItem>
        <PhotoGallery
          src={webformatURL}
          alt={tags}
          width="500"
          height="210"
          loading="lazy"
          onClick={toggleModal}
        />
        {showModal && (
          <Modal
            modalImg={largeImageURL}
            tags={tags}
            closeModal={toggleModal}
          />
        )}
      </GalleryItem>
    );
  
}
