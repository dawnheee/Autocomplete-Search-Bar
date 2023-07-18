import { AxiosResponse } from "axios";

export const convertResponse = (axiosResponse: AxiosResponse) => {
  const data = axiosResponse.data;
  const response = new Response(JSON.stringify(data), {
    status: axiosResponse.status,
    statusText: axiosResponse.statusText,
    headers: {},
  });
  return response;
};
