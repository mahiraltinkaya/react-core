import axios from "axios";

// eslint-disable-next-line
import { dispatch } from "@store";
import { openSnackbar } from "@store/slices/todoSlices";
// ----------------------------------------------------------------------

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL || "http://localhost:3000",
});

export const session = (accessToken) => {};

export const clearSession = () => {};

axiosInstance.interceptors.request.use((config) => config);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.isAxiosError && error.response.status === 401) {
      dispatch(
        openSnackbar({
          snackbar: true,
          severity: "error",
          content: "Unauthorized.",
        })
      );

      return;
    }
    if (error.isAxiosError && error.response.status === 406) {
      dispatch(
        openSnackbar({
          snackbar: true,
          severity: "error",
          content: "It's not accessible.",
        })
      );
    }

    if (error.isAxiosError && error.response.status === 404) {
      dispatch(
        openSnackbar({
          snackbar: true,
          severity: "error",
          content: "Page Not Found",
        })
      );
    }
  }
);

export { axiosInstance };
