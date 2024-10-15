import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import { GameGrid } from "./components/GameGrid";
import GenresList from "./components/GenresList";

import { PlateFormSelector } from "./components/PlateFormSelector";

import { SortSelector } from "./components/SortSelector";
import { GameHeading } from "./components/GameHeading";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "asid main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      <Show above="lg">
        <GridItem area="asid" paddingX={5}>
          <GenresList />
        </GridItem>
      </Show>

      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading />
          <HStack spacing={5} paddingLeft={76} marginBottom={2}>
            <PlateFormSelector
            
            />
            <SortSelector
            />
            //comlate this line
          </HStack>

          <GameGrid  />
        </Box>
      </GridItem>
    </Grid>
  );
}

export default App;
