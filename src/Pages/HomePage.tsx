  

  import { Grid, GridItem, Show, Box, HStack } from '@chakra-ui/react'
import GameGrid from '../components/GameGrid'
import { GameHeading } from '../components/GameHeading'
import GenresList from '../components/GenresList'
import { PlateFormSelector } from '../components/PlateFormSelector'
import { SortSelector } from '../components/SortSelector'
  
  export const HomePage = () => {
    return (
        <Grid
        templateAreas={{
          base: `"main"`,
          lg: ` "asid main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
     
  
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
    )
  }
  