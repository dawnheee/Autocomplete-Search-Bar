import { cacheName, HEADER_DATE } from "../../constant/cache";

const setCache = async (q: string, response: Response) => {
  const sickStorage = await caches.open(cacheName);
  const cloneResponse = response.clone();
  const newBody = await cloneResponse.blob();
  const newHeaders = new Headers(cloneResponse.headers);
  newHeaders.append(HEADER_DATE, new Date().toISOString());

  const newResponse = new Response(newBody, {
    status: cloneResponse.status,
    statusText: cloneResponse.statusText,
    headers: newHeaders,
  });

  sickStorage.put(q, newResponse);
};

export default setCache;
