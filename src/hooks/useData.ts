// src/hooks/useFetchProducts.ts
import { useEffect, useState } from 'react';
import apiClient from '../services/api_client';


interface FetchRespons<T>{
    count :number
    results: T[];
}

export const useData = <T>(endpoint: string) => {
  const [data, setdata] = useState<T[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    apiClient
      .get<FetchRespons<T>>(endpoint)
      .then((res) => {
        console.log(res.data.results); 
        setdata(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);
  
  return {data, error, loading };
};

export default useData;