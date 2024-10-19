

import { useQuery } from '@tanstack/react-query';
import { ApiClient } from '../services/api_client';
import platforms from '../data/platforms'
import ms from 'ms'
import { Platform } from '../entites/Platform';





const api_client = new ApiClient<Platform>('/platforms/lists/parents');
interface FetchResponse<T> {
    count: number;
    results: T[];
  }

export const usePlatForms = () => {
 return useQuery<FetchResponse<Platform>, Error>({

 queryKey: ['platforms'],
 queryFn:api_client.getAll,
 staleTime: ms('24h'),
 initialData: {count : platforms.length , results: platforms}

 }
 )
}

