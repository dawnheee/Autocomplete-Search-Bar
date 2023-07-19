import { cacheName } from "../../constant/cache";

export const deleteCache = async (q: string) => {
  const sickStorage = await caches.open(cacheName);
  sickStorage.delete(q);
  return null;
};
