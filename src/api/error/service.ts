import axios from "axios";

const parseError = (error: any) =>
  error.error || error.message || error.originalError || error;

const isNetworkError = (error: any) => {
  return ["Network Error", "Error: Network Error"].includes(parseError(error));
};

const isInvalidAPIKeyError = (error: any) =>
  axios.isAxiosError(error) && error.response?.status === 401;

const isBadRequestError = (error: any) =>
  axios.isAxiosError(error) && error.response?.status === 404;

export default {
  parseError,
  isBadRequestError,
  isInvalidAPIKeyError,
  isNetworkError,
};
