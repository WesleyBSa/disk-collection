import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import AlbumForm from '../../components/AlbumForm';
import { Album } from '../../types/album';

const EditAlbum: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [album, setAlbum] = useState<Album | null>(null);

  useEffect(() => {
    if (id) {
      const savedAlbums = JSON.parse(localStorage.getItem('albums') || '[]');
      const foundAlbum = savedAlbums.find((album: Album) => album.id === Number(id));
      setAlbum(foundAlbum || null);
    }
  }, [id]);

  const handleEditAlbum = (editedAlbum: Album) => {
    const savedAlbums = JSON.parse(localStorage.getItem('albums') || '[]');
    const updatedAlbums = savedAlbums.map((album: Album) =>
      album.id === editedAlbum.id ? editedAlbum : album
    );
    localStorage.setItem('albums', JSON.stringify(updatedAlbums));
    router.push('/albums');
  };

  return (
    <div>
      <h1>Editar Álbum</h1>
      {album ? (
        <AlbumForm onAddAlbum={handleEditAlbum} initialData={album} />
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default EditAlbum;
