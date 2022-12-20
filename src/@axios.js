import axios from "axios";

// eslint-disable-next-line
import { dispatch } from "redux/store";
import storage from "@storage";
// ----------------------------------------------------------------------

const axiosInstance = axios.create({
  baseURL: process.env.BASE_URL,
});

export const session = (accessToken) => {
  localStorage.setItem("accessToken", accessToken);
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
};

export const clearSession = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("X-socket-id");
  delete axiosInstance.defaults.headers.common.Authorization;
};

axiosInstance.interceptors.request.use((config) => {
  config.headers.common["X-lang-set"] = storage.get("i18nextLng") || "en";
  config.headers.common["X-socket-id"] = storage.get("X-socket-id");
  config.headers.common.Authorization = `Bearer ${storage.get("accessToken")}`;
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.isAxiosError && error.response.status === 401) {
      return;
    }
    if (error.isAxiosError && error.response.status === 406) {
    }

    if (error.isAxiosError && error.response.status === 404) {
    }
  }
);

export default axiosInstance;
