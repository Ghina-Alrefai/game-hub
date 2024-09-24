
import { Product } from '../hooks/useFetchProducts';
import { Card, CardBody, Heading, HStack, Image, Text } from '@chakra-ui/react';
import PlatformIconList from './PlatformIconList';
import CriticScour from './CriticScour';
import getCroppedUrl from '../services/imgUrl';

interface Props{
    product : Product;
}
export const CardProduct = ({product}:Props) => {
  return (
   <Card width="300px" borderRadius={40}> 
    <Image src= { getCroppedUrl( product.background_image)}   
    objectFit='cover'  borderRadius={20} overflow='hidden'></Image>
    <CardBody >
        <Heading fontSize='2l'>
            {product.name}
        </Heading>
        <HStack  justifyContent='space-between'>
     <PlatformIconList platforms={product.parent_platforms.map(p=>p.platform)}/>
        <CriticScour  scour={product.metacritic}/>
        </HStack>
    </CardBody>
   </Card>
  )
}
