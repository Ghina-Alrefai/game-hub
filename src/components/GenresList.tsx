import useGenres, { Genre } from '../hooks/useGenres';
import { HStack, List, ListItem, Image, Button,  Heading, Spinner } from '@chakra-ui/react';
import getCroppedUrl from '../services/imgUrl';
import useStoreGame from '../store';



export const GenresList = () => {
  const {data , error , isLoading} = useGenres(); 
  const SelectedGenreId = useStoreGame(s=> s.gameQuery.genreId)
  const  setGenreId = useStoreGame(s=> s.setGenreId);
  
  if (error) return <p>{error.message}</p>;

  if(isLoading) return <Spinner/>
  
  return (
   <>
      <Heading paddingY='5px' as='h1' fontSize='2xl'>Genres List</Heading>
      <List>
        {data?.results.map((genre : Genre) => (
          <ListItem key={genre.id} paddingY='5px'>
            <HStack padding='5px'>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedUrl(genre.image_background)}
              />

              <HStack>
                <Button
                  fontWeight={genre.id ===  SelectedGenreId ? 'bold' : 'normal'}
                  onClick={() => setGenreId(genre.id)}
                  fontSize='lg'
                  variant='link'
                >
                  {genre.name}
                </Button>
              </HStack>
            </HStack>
          </ListItem>
        ))}
      </List>
  </>
  );
};

export default GenresList;
