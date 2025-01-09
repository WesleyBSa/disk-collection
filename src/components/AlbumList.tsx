import React, { useState } from 'react';
import Modal from './Modal';
import { Album } from '../types/album';

interface AlbumListProps {
  albums: Album[];
  onEdit: (album: Album) => void;
  onDelete: (id: number) => void;
}

const AlbumList: React.FC<AlbumListProps> = ({ albums, onEdit, onDelete }) => {
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);

  const handleOpenModal = (album: Album) => {
    setSelectedAlbum(album);
  };

  const getCountryCode = (nationality: string): string => {
    const countryCodes: { [key: string]: string } = {
      'Brasil': 'BR',
      'Estados Unidos': 'US',
      'Reino Unido': 'GB',
      'Alemanha': 'DE',
      'França': 'FR',
      'Canadá': 'CA',
      'Austrália': 'AU',
      'Japão': 'JP',
      'Itália': 'IT',
      'Espanha': 'ES',
    };
    return countryCodes[nationality] || 'UN'; 
  };

  return (
    <div>
      {albums.map((album) => (
        <div
          key={album.id}
          style={{
            marginBottom: '1rem',
            padding: '10px',
            border: '1px solid #ddd',
            borderRadius: '6px',
            backgroundColor: '#fff',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h3 onClick={() => handleOpenModal(album)} style={{ color: '#007bff', cursor: 'pointer' }}>
            {album.bandName} - {album.albumName}
          </h3>
          <p><strong>Gênero:</strong> {album.category}</p>
          <p><strong>Ano de Lançamento:</strong> {album.releaseYear}</p>

          <p style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <strong>Nacionalidade:</strong>
            <img
              src={`https://flagcdn.com/w40/${getCountryCode(album.nationality).toLowerCase()}.png`}
              alt={`Bandeira de ${album.nationality}`}
              style={{ width: '24px', height: '18px', borderRadius: '4px' }}
            />
            {album.nationality}
          </p>

          <p><strong>Valor:</strong> R$ {album.price}</p>
          <button
            className="btn edit"
            style={{
              marginRight: '8px',
              padding: '5px 10px',
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
            onClick={() => onEdit(album)}
          >
            Editar
          </button>
          <button
            className="btn delete"
            style={{
              padding: '5px 10px',
              backgroundColor: '#dc3545',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
            onClick={() => album.id && onDelete(album.id)}
          >
            Excluir
          </button>
        </div>
      ))}
      {selectedAlbum && <Modal album={selectedAlbum} onClose={() => setSelectedAlbum(null)} />}
    </div>
  );
};

export default AlbumList;
