import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { Album } from '../types/album';

const AlbumListPage: React.FC = () => {
  const [albums, setAlbums] = useState<Album[]>([]);

  useEffect(() => {
    const savedAlbums = JSON.parse(localStorage.getItem('albums') || '[]');
    setAlbums(savedAlbums);
  }, []);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '1rem', backgroundColor: '#f9f9f9' }}>
      <Header />
      <h1 style={{ textAlign: 'center', marginBottom: '2rem', color: '#333' }}>Album Collection</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem' }}>
        {albums.length > 0 ? (
          albums.map((album) => (
            <div
              key={album.id}
              style={{
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '1rem',
                backgroundColor: '#fff',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              }}
            >
              <h3 style={{ marginBottom: '0.5rem', color: '#007bff' }}>
                {album.bandName} - {album.albumName}
              </h3>
              <p><strong>Release Year:</strong> {album.releaseYear}</p>
              <p><strong>Nationality:</strong> {album.nationality}</p>
              <p><strong>Price:</strong> ${album.price}</p>
            </div>
          ))
        ) : (
          <p style={{ gridColumn: '1 / -1', textAlign: 'center', color: '#888' }}>No albums available.</p>
        )}
      </div>
    </div>
  );
};

export default AlbumListPage;
