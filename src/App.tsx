import { Grid, GridItem,  Show } from "@chakra-ui/react"; // Import Box for conditional rendering
//import { useMediaQuery } from '@chakra-ui/react'; // Import media query hook
import { NavBar } from "./components/NavBar";
import GameList, { GameGrid } from "./components/GameGrid"; 
import GenresList from "./components/GenresList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import { PlateFormSelector } from "./components/PlateFormSelector";
import { Platform } from "./hooks/useFetchGame";

function App() {
  const [SelectedGenre,setSelectedGenres]= useState<Genre | null >(null);
  const [SelectedPlatform,setSelectedPlatform]= useState<Platform | null >(null);
  return (
    <Grid templateAreas={{
      base: `"nav " "main"`,
      lg: `"nav nav" "asid main"`
    }}
    templateColumns={{
      base: '1fr',
      lg: '200px 1fr'
    }}
    >

      <GridItem area="nav" >
        <NavBar />
      </GridItem>
      <Show above="lg">
      <GridItem area="asid" paddingX={5} >
        <GenresList SelectedGenre={SelectedGenre} onSelectGenre={(genre)=> setSelectedGenres(genre)}/>
      </GridItem>
      </Show>
      <GridItem area="main" >
      <PlateFormSelector SelectedPlatform={SelectedPlatform} onSelectPlatform={(platform)=> setSelectedPlatform(platform)}/>
        <GameGrid SelectedGenre={SelectedGenre} SelectedPlatform={SelectedPlatform}/>
      </GridItem>
   
    </Grid>
  );
}

export default App;
