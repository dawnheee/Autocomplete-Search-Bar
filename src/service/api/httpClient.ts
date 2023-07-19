import Axios, { AxiosRequestConfig } from "axios";

class HttpClient {
  private axios;
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;

    this.axios = Axios.create({
      baseURL: `${this.baseURL}`,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  async get(config: AxiosRequestConfig) {
    const response = await this.axios.get("", config);
    return response;
  }
}

export default HttpClient;
