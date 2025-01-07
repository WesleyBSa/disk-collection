import React from 'react';
import { Album } from '../types/album';

interface ModalProps {
  album: Album;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ album, onClose }) => {
  return (
    <div className="modal">
      <h2>
        {album.bandName} - {album.albumName}
      </h2>
      <p>Year: {album.releaseYear}</p>
      <p>Country: {album.nationality}</p>
      <p>Price: ${album.price}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default Modal;
