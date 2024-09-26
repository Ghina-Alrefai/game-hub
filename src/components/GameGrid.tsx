import { useFetchGames } from '../hooks/useFetchGame';
import { SimpleGrid } from '@chakra-ui/react';
import { CardGame } from './CardGame';
import { SkeletonCard } from './SkeletonCard';
import { CardContainer } from './CardContainer';
import { Genre } from '../hooks/useGenres';
import { Platform } from '../hooks/usePlatForme';


interface Props{
  SelectedGenre:Genre|null;
  SelectedPlatform:Platform|null;
}

export const GameGrid = ({SelectedGenre ,SelectedPlatform }:Props) => {


  const { data , error, loading} = useFetchGames(SelectedGenre,SelectedPlatform);
  const skeletons = [1, 2, 3, 4, 5, 6];
/*
  if (error) return <p>Error: {error}</p>;

  if (!games.length) return <p>No games available.</p>;
*/
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={5}  paddingX='80px' paddingY='30px'>
        {loading &&skeletons.map(skeleton =>( <CardContainer key={skeleton}> <SkeletonCard key={skeleton} /> </CardContainer>))}  
      {data.map(game => (<CardContainer key={game.id}><CardGame key={game.id} game={game} /> </CardContainer>))}
    </SimpleGrid>
  );
};

export default GameGrid  ;
