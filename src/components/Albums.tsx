import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Album } from '@/types/album';

const Albums: React.FC = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const router = useRouter();

  useEffect(() => {
    const savedAlbums = JSON.parse(localStorage.getItem('albums') || '[]');
    setAlbums(savedAlbums);
  }, [router.asPath]); 

  const handleDelete = (id: number) => {
    const updatedAlbums = albums.filter((album) => album.id !== id);
    localStorage.setItem('albums', JSON.stringify(updatedAlbums));
    setAlbums(updatedAlbums);
  };

  const handleEdit = (id: number) => {
    router.push(`/edit-album/${id}`);
  };

  return (
    <div>
      <h1>Lista de Álbuns</h1>
      <ul style={{ padding: 0 }}>
        {albums.map((album) => (
          <li key={album.id} style={{ marginBottom: '1rem', padding: '10px', border: '1px solid #ddd', borderRadius: '6px' }}>
            <div>
              <p><strong>{album.bandName}</strong> - {album.albumName}</p>
              <p><strong>Price:</strong> ${album.price}</p>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button className="delete-button" onClick={() => handleDelete(album.id)}>Delete</button>
                <button className="edit-button" onClick={() => handleEdit(album.id)}>Edit</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Albums;
