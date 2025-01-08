import React from 'react';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import AlbumListPage from '../components/AlbumListPage';
import Admin from '@/pages/admin';


const Home: React.FC = () => {
  const router = useRouter();

  const goToAddAlbumPage = () => {
    router.push('/add-album');
  };

  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh', 
      background: 'linear-gradient(to right, rgb(255, 255, 255), rgb(204, 204, 204))', 
      color: '#333', 
      textAlign: 'center'
    }}>
      <div>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          Bem-vindo(a) à DISK COLLECTION
        </h1>
        <p style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>
          Organize seus discos de maneira simples!
        </p>
        <button
          onClick={goToAddAlbumPage}
          className="btn" 
        >
          Adicionar um Disco
        </button>
      </div>
    </div>
  );
};

export default Home;
