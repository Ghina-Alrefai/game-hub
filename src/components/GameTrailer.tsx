import { Flex, Box } from "@chakra-ui/react";
import useGameTrailer from "../hooks/useGameTrailer";

interface Props {
  gameId: number;
}

export const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useGameTrailer(gameId);

  if (isLoading) return <div>Loading...</div>;
  if (error || !data?.results.length) return <div>Error loading trailer</div>;
   console.log(data)
  const trailer = data.results[0]; 

  if(!trailer) return null;

  return (

      <Box maxWidth="100%"> 
        <video
          src={trailer?.data[480]} 
          poster={trailer?.preview}
          controls
          width="100%"
        >
        </video>
      </Box>

  );
}