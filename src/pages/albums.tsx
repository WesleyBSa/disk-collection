import React, { useState, useEffect } from 'react';
import { Album } from '../types/album';

const AlbumListPage: React.FC = () => {
  const [albums, setAlbums] = useState<Album[]>([]);

  const getCountryCode = (nationality: string): string => {
    const countryCodes: { [key: string]: string } = {
      'Brasil' : 'BR',
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

  useEffect(() => {
    const savedAlbums = JSON.parse(localStorage.getItem('albums') || '[]');
    setAlbums(savedAlbums);
  }, []);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '1rem', backgroundColor: '#f9f9f9' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem', color: '#333' }}>Lista de Álbuns</h1>
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
              <p><strong>Gênero:</strong> {album.category}</p> 
              <p><strong>Ano de Lançamento:</strong> {album.releaseYear}</p>
              <p style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <strong>Nacionalidade:</strong> 
                {album.nationality}
                <img
                  src={`https://flagcdn.com/w80/${getCountryCode(album.nationality).toLowerCase()}.png`}
                  alt={`Bandeira de ${album.nationality}`}
                  style={{ width: '32px', height: '24px', borderRadius: '4px' }}
                />
              </p>
              <p><strong>Valor:</strong> R$ {album.price}</p>
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
