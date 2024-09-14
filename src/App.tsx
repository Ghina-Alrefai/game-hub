import { Grid, GridItem, Box, Show } from "@chakra-ui/react"; // Import Box for conditional rendering
import { useMediaQuery } from '@chakra-ui/react'; // Import media query hook

function App() {
  
  return (
    <Grid templateAreas={{
      base: `"nav " "main"`,
      lg: `"nav nav" "asid main"`
    }}>
      <GridItem area="nav" bg="coral">Nav</GridItem>
      <Show above="lg">
      <GridItem area="asid" bg="gold">asid</GridItem>
      </Show>
      <GridItem area="main" bg="blue">main</GridItem>
  
   
    </Grid>
  );
}

export default App;
