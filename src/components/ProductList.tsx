import { useFetchProducts } from '../hooks/useFetchProducts';
import { SimpleGrid } from '@chakra-ui/react';
import { CardProduct } from './CardProduct';
import { SkeletonCard } from './SkeletonCard';

export const ProductList = () => {
  const { data , error, loading} = useFetchProducts();
  const skeletons = [1, 2, 3, 4, 5, 6];
/*
  if (error) return <p>Error: {error}</p>;

  if (!products.length) return <p>No products available.</p>;
*/
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={10} padding="10px">
        {loading &&skeletons.map(skeleton =>( <SkeletonCard key={skeleton} />))}
      {data.map(product => ( <CardProduct key={product.id} product={product} />))}
    </SimpleGrid>
  );
};

export default ProductList;
