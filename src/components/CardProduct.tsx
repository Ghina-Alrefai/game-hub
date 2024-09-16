
import { Product } from '../services/useFetchProducts';
import { Card, CardBody, Heading, Image } from '@chakra-ui/react';

interface Props{
    product : Product;
}
export const CardProduct = ({product}:Props) => {
  return (
   <Card>
    <Image src={product.image}  boxSize='180px' 
    objectFit='cover'  borderRadius={10} overflow='hidden' ></Image>
    <CardBody>
        <Heading fontSize='2xl'>
            {product.title}
        </Heading>
    </CardBody>
   </Card>
  )
}
