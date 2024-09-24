import React from 'react';
import { useGenres } from '../hooks/useGenres';
import useData from '../hooks/useData';
import {Genres } from '../hooks/useGenres';

export const GenresList = () => {

  const {data} = useData<Genres>('/genres');

  

  

  return (
    <ul>
      {data.map(data => (
        <li key={data.id}>{data.name}</li>
      ))}
    </ul>
  );
};

export default GenresList;
