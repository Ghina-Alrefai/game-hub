import { useQuery } from '@tanstack/react-query';
import { ApiClient } from '../services/api_client';
import genres from '../data/genres';
import ms from 'ms';
import { Genre } from '../entites/Genre';

// تعريف ApiClient لجلب بيانات genres
const api_client = new ApiClient<Genre>('/genres');

interface FetchResponse<T> {
  count: number;
  results: T[];
}

// hook لجلب جميع الأنواع (genres)
const useGenres = () => {
  return useQuery<FetchResponse<Genre>, Error>({
    queryKey: ['genres'],
    queryFn: api_client.getAll,
    staleTime: ms('24h'), // تحديد وقت انتهاء صلاحية البيانات
    initialData: { count: genres.length, results: genres }, // توفير بيانات مبدئية
  });
};

export default useGenres;
