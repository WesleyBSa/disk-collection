import { NextApiRequest, NextApiResponse } from 'next';
import { Album } from '../../types/album';

let albums: Album[] = [];
let currentId = 1;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case 'GET':
      res.status(200).json(albums);
      break;
    case 'POST':
      const newAlbum: Album = { id: currentId++, ...req.body };
      albums.push(newAlbum);
      res.status(201).json(newAlbum);
      break;
    case 'PUT':
      const { id, ...updatedAlbum } = req.body as Album;
      albums = albums.map((album) =>
        album.id === id ? { ...album, ...updatedAlbum } : album
      );
      res.status(200).json(updatedAlbum);
      break;
    case 'DELETE':
      const { id: deleteId } = req.body;
      albums = albums.filter((album) => album.id !== deleteId);
      res.status(204).end();
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
