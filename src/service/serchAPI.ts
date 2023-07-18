import { AxiosRequestConfig, AxiosResponse } from "axios";
import HttpClient from "./httpClient";
import setCache from "../utils/caching/setCache";
import { convertResponse } from "../utils/convertResponse";
// import { cacheName } from "../constant/cache";
const httpClient = new HttpClient("http://localhost:4000/sick");

const searchService = async (q: string) => {
  const config: AxiosRequestConfig = {
    params: {
      q: q,
    },
  };
  // checkCache(cacheName, q) => 유효한 게 있으면 그 캐시의 response
  //                          => 없다면 null
  //

  try {
    const axiosResponse: AxiosResponse = await httpClient.get(config);
    console.log("calling api");
    console.log("Response data:", axiosResponse.data);
    const response = convertResponse(axiosResponse);
    setCache(q, response);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export default searchService;
