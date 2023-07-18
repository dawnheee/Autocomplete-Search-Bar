import { AxiosRequestConfig, AxiosResponse } from "axios";
import HttpClient from "./httpClient";
import setCache from "../caching/setCache";
import { convertResponse } from "../../utils/convertResponse";
import { getCachedResponse } from "../caching/getCachedResponse";
const httpClient = new HttpClient("http://localhost:4000/sick");

const searchService = async (q: string) => {
  const config: AxiosRequestConfig = {
    params: {
      q: q,
    },
  };

  const cachedResponse = await getCachedResponse(q); //캐시 가져옴
  if (cachedResponse !== null) {
    const cachedData = await cachedResponse.text(); //캐시 데이터를 읽을 수 있게 변환
    console.log("캐시 결과:", cachedData);
    return cachedData; // 리턴
  } else {
    //캐시가 없다면
    try {
      const axiosResponse: AxiosResponse = await httpClient.get(config);
      console.log("calling api");
      console.log("API 호출 결과:", axiosResponse.data);
      const response = convertResponse(axiosResponse);
      setCache(q, response);
      return axiosResponse.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  }
};

export default searchService;

// import { AxiosRequestConfig, AxiosResponse } from "axios";
// import HttpClient from "./httpClient";
// import setCache from "../caching/setCache";
// import { convertResponse } from "../../utils/convertResponse";
// import { getCachedResponse } from "../caching/getCachedResponse";
// import { Sick } from "../../@type/types";
// const httpClient = new HttpClient("http://localhost:4000/sick");

// const searchService = async (q: string) => {
//   const config: AxiosRequestConfig = {
//     params: {
//       q: q,
//     },
//   };

//   const cachedResponse = await getCachedResponse(q);
//   if (cachedResponse !== null) {
//     const cachedData = await cachedResponse.text();
//     const arr: Sick[] = JSON.parse(cachedData);
//     return arr;
//   } else {
//     try {
//       const axiosResponse: AxiosResponse = await httpClient.get(config);
//       console.log("calling api");
//       console.log("Response data:", axiosResponse.data);
//       const response = convertResponse(axiosResponse);
//       setCache(q, response);
//       const arr: Sick[] = await response.json();
//       return arr;
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       return null;
//     }
//   }
// };

// export default searchService;
