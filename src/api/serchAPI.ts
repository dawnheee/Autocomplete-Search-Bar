import { Config } from "../@type/types";
import HttpClient from "./httpClient";
const httpClient = new HttpClient("http://localhost:4000/sick");

export const serchServise = async (config: Config) => {
  try {
    const data = await httpClient.get({ params: config });
    console.log("Response data:", data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
