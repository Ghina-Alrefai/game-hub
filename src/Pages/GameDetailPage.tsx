import { useParams } from 'react-router-dom';
import useGameDetail from '../hooks/useGameDetail';
import { 
  GridItem, 
  Heading, 
  SimpleGrid, 
  Spinner, 
  Flex, // Add Flex for layout
  Box // Add Box for layout
} from '@chakra-ui/react';
import {ExpendableText} from '../components/ExpendableText'; 
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
    <Flex direction="column" p={5}> 
      <Heading size="lg" mb={5}>{data.name}</Heading>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
        <GridItem>
          <ExpendableText>{data.description_raw}</ExpendableText>
          <GameAttributes game={data}/>
        </GridItem>

        <GridItem>
          <Box mb={5}> 
            <GameTrailer gameId={data.id}/>
          </Box>
          <ScreenshotsGrid gameId={data.id}/>
        </GridItem>
      </SimpleGrid>
    </Flex>
  );
};
