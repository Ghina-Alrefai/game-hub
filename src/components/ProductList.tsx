// src/components/ProductList.tsx

import { useFetchProducts } from '../services/useFetchProducts';
import { SimpleGrid } from '@chakra-ui/react';
import { CardProduct } from './CardProduct';

export const ProductList = () => {
  const { products, error, loading } = useFetchProducts();

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error}</p>;

  if (!products.length) return <p>No products available.</p>;

  return (
   <SimpleGrid columns={{sm:1 , md:2 , lg:3 , xl:5}} spacing={10}>
    {products.map(product =>(<CardProduct key={product.id} product={product}/>))}
   </SimpleGrid>
  );
};

export default ProductList;
