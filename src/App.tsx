import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import GameList, { GameGrid } from "./components/GameGrid";
import GenresList from "./components/GenresList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import { PlateFormSelector } from "./components/PlateFormSelector";
import { Platform } from "./hooks/useGame";
import { SortSelector } from "./components/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder : string
  searchText: string 
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({
    genre: null,
    platform: null,
    sortOrder:"",
    searchText:""
  });

  const handleGenreSelect = (genre: Genre) => {
    setGameQuery((prev) => ({
      ...prev,
      genre,
    }));
  };

  const handlePlatformSelect = (platform: Platform) => {
    setGameQuery((prev) => ({
      ...prev,
      platform,
    }));
  };

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
      </GridItem>
    </Grid>
  );
}

export default App;
