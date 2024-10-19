
import { useScreenshot } from '../hooks/useScreenshot';
import { Box, SimpleGrid, Spinner, Image } from '@chakra-ui/react';


interface Props {
  gameId: number;
}

export const ScreenshotsGrid = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshot(gameId);


  if (error) throw error;

  if (isLoading) return <Spinner>Loading...</Spinner>;

  if (data === null) return <p>No screenshots available.</p>;

  return (
    <Box padding="5px">
      <SimpleGrid columns={{ base: 1, md: 2}} spacing={5}>
        {data?.results.map((screen) =>  
          <Image key={screen.id} src={screen.image}/>
        )}
      </SimpleGrid>
    </Box>
  );
};
