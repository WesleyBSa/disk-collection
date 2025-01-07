import React, { useState } from 'react';
import AlbumForm from '../components/AlbumForm';
import { Album } from '../types/album';
import CustomButton from '../components/CustomButton';


const AddAlbum: React.FC = () => {
  const [showMessage, setShowMessage] = useState(false);

  const handleAddAlbum = (album: Album) => {
    const savedAlbums = JSON.parse(localStorage.getItem('albums') || '[]');
    localStorage.setItem('albums', JSON.stringify([...savedAlbums, album]));

    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };

  return (
    <div>
      <h1>Adicione o Álbum</h1>

      {showMessage && <p style={{ color: 'green' }}>Álbum adicionado com sucesso!</p>}

      <AlbumForm onAddAlbum={handleAddAlbum} />
    </div>
  );
};

export default AddAlbum;
