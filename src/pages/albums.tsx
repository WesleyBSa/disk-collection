import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Album } from '@/types/album';

const Albums: React.FC = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const router = useRouter();

  useEffect(() => {
    const savedAlbums = JSON.parse(localStorage.getItem('albums') || '[]');
    setAlbums(savedAlbums);
  }, []);

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
      <ul>
        {albums.map((album) => (
          <li key={album.id}>
            <div>
              <p><strong>{album.bandName}</strong> - {album.albumName}</p>
              <button onClick={() => handleEdit(album.id)}>Editar</button>
              <button onClick={() => handleDelete(album.id)}>Deletar</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Albums;
