//Funções para gerenciar os discos
import { Album } from '../types/album';

const API_URL = '/api/albums';

export const fetchAlbums = async (): Promise<Album[]> => {
  const response = await fetch(API_URL);
  return response.json();
};

export const addAlbum = async (album: Album): Promise<Album> => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(album),
  });
  return response.json();
};
