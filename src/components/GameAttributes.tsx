
import { Game } from '../entites/Game';
import CriticScour from './CriticScour';
import DefinitionElement from './defintionItem';
import { SimpleGrid } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';

interface Props {
    game: Game
}

export const GameAttributes = ({game}: Props) => {
   
    
  
    return (
      
       <>
        <SimpleGrid columns={2} as='dl'>
        <DefinitionElement term="Platforms">
          {game.parent_platforms.map(p => (
            <Text key={p.platform.id}>
                {p.platform.name}
                </Text>
          ))}
        </DefinitionElement>
  
        <DefinitionElement term="meta scour" >
         <CriticScour scour={game.metacritic} />
        </DefinitionElement>
  
        <DefinitionElement term="Genres">
          {game.genres.map(g => (
            <Text key={g.id}>{g.name}</Text>
          ))}
       </DefinitionElement>
  
  
       <DefinitionElement term="Publishers">
          {game.publishers.map(p => (
            <Text key={p.id}>{p.name}</Text>
          ))}
        </DefinitionElement>
  
        </SimpleGrid>
      </>
    );
    
}
