import { usePlatForms } from "./usePlatForms";

export const usePlatForme = (id: number | undefined) => {
  // جلب البيانات من hook usePlatForms
  const { data: platforms } = usePlatForms();

  // البحث عن المنصة (platform) باستخدام id المحدد
  return platforms?.results.find(g => g.id === id); // إزالة النقطة المكررة وتصحيح الوصول إلى البيانات
};
