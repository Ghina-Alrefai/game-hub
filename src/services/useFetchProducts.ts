// src/hooks/useFetchProducts.ts
import { useEffect, useState } from 'react';
import apiClient from '../services/api_client';


export interface Platform{
  id : number
  name: string
  slug: string
}
export interface Product {
  id: number;
  name: string;
  background_image:string;
  parent_platforms:{platform : Platform}[];
  metacritic:number;
}
interface FetchProduct{
  count: number;
  results: Product[];
}
export const useFetchProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    apiClient
      .get('/games')
      .then((res) => {
        console.log(res.data.results); // Check the structure of the data here
        setProducts(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);
  
  return { products, error, loading };
};
