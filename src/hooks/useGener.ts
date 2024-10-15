import useGenres from "./useGenres";

// hook للبحث عن نوع محدد باستخدام الـ id
export const useGener = (genreId: number | undefined) => {
  // جلب جميع الأنواع (genres) باستخدام useGenres
  const { data: genres } = useGenres();

  // التحقق من أن البيانات موجودة والبحث عن النوع المحدد باستخدام الـ id
  return genres?.results.find((g) => g.id === genreId);
};
