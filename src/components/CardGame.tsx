
import { Game } from '../hooks/useGame';
import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react';
import PlatformIconList from './PlatformIconList';
import CriticScour from './CriticScour';
import getCroppedUrl from '../services/imgUrl';

import Emoje from './Emoje';

interface Props{
    game : Game;
}
export const CardGame = ({game}:Props) => {
  return (
    
   <Card > 
    <Image src= { getCroppedUrl( game.background_image)}   
    objectFit='cover'  borderRadius={20} overflow='hidden'></Image>
    <CardBody >
       
        <HStack  justifyContent='space-between'>
     <PlatformIconList platforms={game.parent_platforms.map(p=>p.platform)}/>
        <CriticScour  scour={game.metacritic}/>
        </HStack>
        <Heading fontSize='2l'>
            {game.name} <Emoje rating={game.rating_top}></Emoje>
        </Heading>
    </CardBody>
   </Card>

  )
}
