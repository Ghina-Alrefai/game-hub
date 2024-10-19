import { useParams } from 'react-router-dom';
import useGameDetail from '../hooks/useGameDetail';
import { Heading, SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import {ExpendableText} from '../components/ExpendableText'; // Ensure this import is correct

import { GameAttributes } from '../components/GameAttributes';
import { GameTrailer } from '../components/GameTrailer';
import { ScreenshotsGrid } from '../components/ScreenshotsGrid';

export const GameDetailPage = () => {
  const { slug } = useParams();

  const { data, isLoading, error } = useGameDetail(slug!);
  if (isLoading) return <Spinner />;

  if (error) throw error;
  if (!data) throw error;

  return (
    <>
      <Heading>{data.name}</Heading>
      <ExpendableText>{data.description_raw}</ExpendableText>
      <GameAttributes game={data}/>
      <GameTrailer gameId={data.id}/>
      <ScreenshotsGrid gameId={data.id}/>
    </>
  );
};
