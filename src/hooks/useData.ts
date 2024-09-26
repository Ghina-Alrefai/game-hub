// src/hooks/useFetchGames.ts
import { useEffect, useState } from 'react';
import apiClient from '../services/api_client';
import { AxiosRequestConfig } from 'axios';

interface FetchResponse<T> {
  count: number;
  results: T[];
}

export const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, p0?: (number | undefined)[]) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    apiClient
      .get<FetchResponse<T>>(endpoint, requestConfig) // Correctly passing requestConfig
      .then((res) => {
        console.log(res.data.results);
        setData(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [endpoint, requestConfig]); // Add dependencies for useEffect

  return { data, error, loading };
};

export default useData;
