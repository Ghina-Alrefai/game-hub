// src/hooks/useFetchProducts.ts
import { useEffect, useState } from 'react';
import apiClient from '../services/api_client';

export interface Product {
  id: number;
  title: string;
  image:string;
}

export const useFetchProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    apiClient
      .get('/products')
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return { products, error, loading };
};
