import { AxiosRequestConfig, AxiosResponse } from "axios";
import HttpClient from "./httpClient";
import setCache from "../caching/setCache";
import { convertResponse } from "../../utils/convertResponse";
import { getCachedResponse } from "../caching/getCachedResponse";
import { Sick } from "../../@type/types";
const httpClient = new HttpClient("http://localhost:4000/sick");

const searchService = async (q: string): Promise<string | Sick[]> => {
  const config: AxiosRequestConfig = {
    params: {
      q: q,
    },
  };

  const cachedResponse = await getCachedResponse(q);
  if (cachedResponse !== null) {
    const cachedData = await cachedResponse.text();
    // console.log("캐시 결과:", cachedData);
    return cachedData;
  } else {
    try {
      const axiosResponse: AxiosResponse = await httpClient.get(config);
      console.log("calling api");
      // console.log("API 호출 결과:", axiosResponse.data);
      const response = convertResponse(axiosResponse);
      setCache(q, response);
      return axiosResponse.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return "";
    }
  }
};

export default searchService;
