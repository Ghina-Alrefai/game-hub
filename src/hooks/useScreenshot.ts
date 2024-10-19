
import { useQuery } from '@tanstack/react-query';

import { ApiClient } from "../services/api_client";
import { Screenshot } from '../entites/Screenshot';




  export const useScreenshot = (gameId: number) => {

    const api_client = new ApiClient<Screenshot>(`/games/${gameId}/screenshots`);

    return useQuery({
        queryKey:['screenshots' , gameId],
        queryFn : api_client.getAll
    })
  }
  
  