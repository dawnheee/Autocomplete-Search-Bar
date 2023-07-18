import { deleteCache } from "./deleteCache";
import isExpired from "./isExpired";

export const getCachedResponse = async (
  q: string
): Promise<Response | null> => {
  const cachedRes = await caches.match(q);
  if (cachedRes !== undefined) {
    if (!isExpired(cachedRes)) {
      console.log("캐시 있어요");
      return cachedRes;
    } else if (isExpired(cachedRes)) {
      console.log("캐시 만료");
      deleteCache(q);
      return null;
    }
  }
  console.log("캐시 없어요");
  return null;
};
