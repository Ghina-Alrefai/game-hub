import { useQuery } from '@tanstack/react-query'; // Import from react-query
import { ApiClient } from '../services/api_client';
import { Game } from '../entites/Game';

const api_client = new ApiClient<Game>('/games');

const useGameDetail = (slug: string) => {
  return useQuery({
    queryKey: ['games', slug],
    queryFn: () => api_client.getGameDetails(slug)
  });
};

export default useGameDetail; 
