import { useGames } from "../hooks/useGames";
import { Box, Button, SimpleGrid, Spinner } from "@chakra-ui/react";
import { CardGame } from "./CardGame";
import { SkeletonCard } from "./SkeletonCard";
import { CardContainer } from "./CardContainer";

import React from "react";

export const GameGrid = () => {
  const {
    data,
    error,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <p>{error.message}</p>;

  if (isLoading) return <Spinner>louding...</Spinner>;

  if (data == null) return <p>No games available.</p>;

  return (
    <Box padding="30px">
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={5}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <CardContainer key={skeleton}>
              <SkeletonCard />
            </CardContainer>
          ))}
        {data.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <CardContainer key={game.id}>
                <CardGame game={game} />
              </CardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      {hasNextPage && (
        <Button marginY={8} onClick={() => fetchNextPage()}>
          {isFetchingNextPage ? "Louding.." : "Loud more"}
        </Button>
      )}
    </Box>
  );
};

export default GameGrid;
