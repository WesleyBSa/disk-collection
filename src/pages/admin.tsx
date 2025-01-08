import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Album } from '@/types/album';
import Admin from '@/pages/admin';

const Admin: React.FC = () => {
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
      <h1>Painel do Administrador</h1>
      <ul style={{ padding: 0 }}>
        {albums.map((album) => (
          <li
            key={album.id}
            style={{
              marginBottom: '1rem',
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '6px',
            }}
          >
            <div>
              <p>
                <strong>{album.bandName}</strong> - {album.albumName}
              </p>
              <div style={{ display: 'flex', gap: '10px' }}>
                {album.id !== undefined && (
                  <>
                    <button
                      className="delete-button"
                      onClick={() => handleDelete(album.id!)}
                    >
                      <span className="text">Delete</span>
                      <span className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
                        </svg>
                      </span>
                    </button>

                    <button
                      className="edit-button"
                      onClick={() => handleEdit(album.id!)}
                    >
                      <span className="text">Edit</span>
                      <span className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21.561,4.439l-2.122-2.122c-0.585-0.586-1.535-0.586-2.121,0l-10.856 10.857c-0.187,0.188-0.312,0.418-0.367,0.668l-1.171 5.171c-0.144,0.635,0.442,1.222,1.078,1.078l5.171-1.171c0.25-0.056,0.48-0.18,0.668-0.367l10.857-10.857 C22.146,5.975,22.146,5.025,21.561,4.439z M14.121,8.121l2.122-2.122l2.122,2.122l-2.122,2.122L14.121,8.121z"></path>
                        </svg>
                      </span>
                    </button>
                  </>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;
