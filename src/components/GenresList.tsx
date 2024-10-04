import { useGenres } from '../hooks/useGenres';
import { Genre } from '../hooks/useGenres';
import { HStack, List, ListItem, Image, Button, VStack, Heading } from '@chakra-ui/react';
import getCroppedUrl from '../services/imgUrl';

interface Props {
  onSelectGenre: (genres: Genre) => void;
  SelectedGenre: Genre | null;
}

export const GenresList = ({ SelectedGenre, onSelectGenre }: Props) => {
  const { data } = useGenres();

  return (
    <VStack>
     <Heading  paddingY='5px'  as='h1' fontSize='2xl' >Genres List</Heading>

      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY='5px'>
            <HStack padding='5px'>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedUrl(genre.image_background)}
              />

              <HStack>
                <Button
                  fontWeight={genre.id === (SelectedGenre?.id ?? -1) ? 'bold' : 'normal'} 
                  onClick={() => onSelectGenre(genre)}
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
    </VStack>
  );
};

export default GenresList;
