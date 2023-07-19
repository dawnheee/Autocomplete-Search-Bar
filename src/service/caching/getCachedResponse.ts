import { deleteCache } from "./deleteCache";
import isExpired from "./isExpired";

export const getCachedResponse = async (
  q: string
): Promise<Response | null> => {
  const cachedRes = await caches.match(q);
  if (cachedRes !== undefined) {
    if (!isExpired(cachedRes)) {
      return cachedRes;
    } else if (isExpired(cachedRes)) {
      deleteCache(q);
      return null;
    }
  }
  return null;
};
