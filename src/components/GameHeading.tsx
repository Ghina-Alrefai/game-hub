import { Heading } from "@chakra-ui/react";
import {useGener } from "../hooks/useGener"; // تعديل اسم الاستيراد
import useStoreGame from "../store";
import { usePlatForme } from "../hooks/usePlatForme";

export const GameHeading = () => {
  // الحصول على platformId و genreId من store
  const platformId = useStoreGame((s) => s.gameQuery.platformId);
  const genreId = useStoreGame((s) => s.gameQuery.genreId);

  // استخدام useGenre و usePlatForme للحصول على البيانات
  const genre = useGener(genreId);
  const platform = usePlatForme(platformId);

  // تكوين الجملة للعنوان
  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading as="h1" fontSize="5xl" marginY={5} marginX={20}>
      {heading}
    </Heading>
  );
};
