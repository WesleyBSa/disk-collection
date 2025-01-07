import React, { useState } from 'react';
import { Album } from '../types/album';
import CustomButton from '../components/CustomButton';

interface AlbumFormProps {
  onAddAlbum: (album: Album) => void;
  initialData?: Album;
}

const AlbumForm: React.FC<AlbumFormProps> = ({ onAddAlbum, initialData }) => {
  const [bandName, setBandName] = useState(initialData?.bandName || '');
  const [albumName, setAlbumName] = useState(initialData?.albumName || '');
  const [releaseYear, setReleaseYear] = useState<number | ''>(initialData?.releaseYear || '');
  const [nationality, setNationality] = useState(initialData?.nationality || '');
  const [price, setPrice] = useState<number | ''>(initialData?.price || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newAlbum: Album = {
      id: initialData?.id || Date.now(),
      bandName,
      albumName,
      releaseYear: Number(releaseYear),
      nationality,
      price: Number(price),
    };

    onAddAlbum(newAlbum);

    if (!initialData) {
      setBandName('');
      setAlbumName('');
      setReleaseYear('');
      setNationality('');
      setPrice('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Banda:</label>
        <input
          type="text"
          value={bandName}
          onChange={(e) => setBandName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Álbum:</label>
        <input
          type="text"
          value={albumName}
          onChange={(e) => setAlbumName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Ano de lançamento:</label>
        <input
          type="number"
          value={releaseYear}
          onChange={(e) => setReleaseYear(Number(e.target.value))}
          required
        />
      </div>
      <div>
        <label>Nacionalidade:</label>
        <input
          type="text"
          value={nationality}
          onChange={(e) => setNationality(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Valor:</label>
        <input
          type="number"
          step="0.01"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          required
        />
      </div>
      <CustomButton text="Adicionar" type="submit" onClick={() => {}} />
    </form>
  );
};

export default AlbumForm;
