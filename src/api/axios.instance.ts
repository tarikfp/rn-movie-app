import axios from "axios";
import { MOVIE_API_BASE_URL, MOVIE_API_V3_KEY } from "react-native-dotenv";

const movieAxios = axios.create({
  baseURL: MOVIE_API_BASE_URL,
  headers: {
    "Content-type": "application/json",
  },
});

movieAxios.interceptors.request.use((config) => {
  config.headers!.Authorization = `Bearer ${MOVIE_API_V3_KEY}`;
  return config;
});

export default movieAxios;
