import { Grid, GridItem,  Show } from "@chakra-ui/react"; // Import Box for conditional rendering
//import { useMediaQuery } from '@chakra-ui/react'; // Import media query hook
import { NavBar } from "./components/NavBar";
import ProductList from "./components/ProductList"; 
import GenresList from "./components/GenresList";

function App() {
  
  return (
    <Grid templateAreas={{
      base: `"nav " "main"`,
      lg: `"nav nav" "asid main"`
    }}>
      <GridItem area="nav" >
        <NavBar />
      </GridItem>
      <Show above="lg">
      <GridItem area="asid" >
        <GenresList/>
      </GridItem>
      </Show>
      <GridItem area="main" >
        <ProductList />
      </GridItem>
   
    </Grid>
  );
}

export default App;
