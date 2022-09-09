import { QueryClient } from "@tanstack/react-query";
import { MOVIE_API_IMAGE_URL } from "react-native-dotenv";

// https://developers.themoviedb.org/3/getting-started/images
export const getImageSourceUri = (
  imageUri: string,
  size: "original" | 500 = "original",
) => {
  return `${MOVIE_API_IMAGE_URL}/${size}${imageUri}`;
};

export const initQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        notifyOnChangeProps: "all",
        // onError: validateError,
        cacheTime: 600000,
      },
    },
  });
