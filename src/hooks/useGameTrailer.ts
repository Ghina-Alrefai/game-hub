
import { Trailer } from '../entites/Trailer'
import { useQuery } from '@tanstack/react-query';
import { ApiClient } from '../services/api_client';


const useGameTrailer = (gameId: number) => {
  const api_client = new ApiClient<Trailer>(`/games/${gameId}/movies`);

  return useQuery({
    queryKey: ['trailers', gameId],
    queryFn : api_client.getAll
  })
}

export default useGameTrailer

