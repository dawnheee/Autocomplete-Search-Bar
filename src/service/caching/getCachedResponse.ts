// import isExpired from './isCacheExpired';

export const getCachedResponse = async (
  q: string
): Promise<Response | null> => {
  const cachedRes = await caches.match(q);
  if (cachedRes !== undefined) {
    // if(isExpired(cachedRes)){
    //     return cachedRes;
    // } return null
    console.log("캐시 있어요");
    return cachedRes;
  }
  return null;
};
