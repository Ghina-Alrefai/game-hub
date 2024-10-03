import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import { GameGrid } from "./components/GameGrid";
import GenresList from "./components/GenresList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import { PlateFormSelector } from "./components/PlateFormSelector";
import { Platform } from "./hooks/useGame";
import { SortSelector } from "./components/SortSelector";
import { GameHeading } from "./components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder : string
  searchText: string 
  rating_top:number
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({
    genre: null,
    platform: null,
    sortOrder:"",
    searchText:"",
    rating_top: 0
  });


 

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
        <NavBar OnSearch={(searchText)=> setGameQuery({...gameQuery , searchText})}/>
      </GridItem>

      <Show above="lg">
        <GridItem area="asid" paddingX={5}>
          <GenresList
            SelectedGenre={gameQuery.genre}
            onSelectGenre={(genre)=> setGameQuery({...gameQuery,genre} )}
          />
        </GridItem>
      </Show>

      <GridItem area="main">
        <Box paddingLeft={2}>
       <GameHeading gameQuery={gameQuery}/>
        <HStack spacing={5} paddingLeft={76} marginBottom={2}>
        <PlateFormSelector
          SelectedPlatform={gameQuery.platform}
          onSelectPlatform={(platform)=> setGameQuery({...gameQuery,platform} )}
        />
         <SortSelector  selectedSortOrder={gameQuery.sortOrder} OnSelectSortOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })}/>//comlate this line
        </HStack>
       
        <GameGrid
         gameQuery={gameQuery}
        />
        </Box>
      </GridItem>
    </Grid>
  );
}

export default App;
