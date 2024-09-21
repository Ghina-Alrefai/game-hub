import { useFetchProducts } from '../services/useFetchProducts';
import { SimpleGrid } from '@chakra-ui/react';
import { CardProduct } from './CardProduct';
import { SkeletonCard } from './SkeletonCard';

export const ProductList = () => {
  const { products, error, loading } = useFetchProducts();
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <p>Error: {error}</p>;

  if (loading) {
    // عرض الهيكلية فقط أثناء تحميل البيانات
    return (
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={10} padding="10px">
        {skeletons.map(skeleton => <SkeletonCard key={skeleton} />)}
      </SimpleGrid>
    );
  }

  if (!products.length) return <p>No products available.</p>;

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={10} padding="10px">
      {products.map(product => (
        <CardProduct key={product.id} product={product} />
      ))}
    </SimpleGrid>
  );
};

export default ProductList;
