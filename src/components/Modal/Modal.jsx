import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalPhoto } from './Modal.styled';

const modalRoot = document.getElementById('modal');

export const Modal = ({ closeModal, tags, modalImg }) => {
  useEffect(() => {
    const closeModalEsc = event => {
      if (event.code === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', closeModalEsc());

    return () => {
      window.removeEventListener('keydown', closeModalEsc());
    };
  }, [closeModal]);

  const handleClick = event => {
    if (event.currentTarget === event.target) {
      closeModal();
    }
  };

  return createPortal(
    <Overlay onClick={handleClick}>
      <ModalPhoto>
        <img src={modalImg} alt={tags} />
      </ModalPhoto>
    </Overlay>,
    modalRoot
  );
};
