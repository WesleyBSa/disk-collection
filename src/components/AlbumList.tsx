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

  return (
    <div>
      {albums.map((album) => (
        <div key={album.id} style={{ marginBottom: '1rem', padding: '10px', border: '1px solid #ddd', borderRadius: '6px' }}>
          <h3 onClick={() => handleOpenModal(album)}>
            {album.bandName} - {album.albumName}
          </h3>
          <p><strong>Release Year:</strong> {album.releaseYear}</p>
          <p><strong>Nationality:</strong> {album.nationality}</p>
          <p><strong>Price:</strong> ${album.price}</p>
          <button className="btn edit" onClick={() => onEdit(album)}>Edit</button>
          <button className="btn delete" onClick={() => album.id && onDelete(album.id)}>Delete</button>
        </div>
      ))}
      {selectedAlbum && <Modal album={selectedAlbum} onClose={() => setSelectedAlbum(null)} />}
    </div>
  );
};

export default AlbumList;
