import React, { useEffect, useState } from 'react';
import RickAndMortyService from '../../core/services/RickAndMortyService';
import HomeStl from './HomeStl';

const Home = () => {
  const [characters, setCharacters] = useState({
    loading: true,
    data: undefined,
    prev: null,
    next: null,
  });

  const getCharacters = async (apiUrl) => {
    setCharacters({ loading: true });
    const { prev, data, next } = await RickAndMortyService.getCharacters(
      apiUrl
    );
    setCharacters({
      loading: false,
      prev: prev,
      data: data,
      next: next,
    });
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <HomeStl characters={characters} handleClickCharacters={getCharacters} />
  );
};

export default Home;
