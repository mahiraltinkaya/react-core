import { axiosInstance } from "@axios";
import { dispatch } from "@store";
import { openSnackbar } from "@store/slices/todoSlices";
class JobService {
  getJobList() {
    return new Promise(
      async (resolve, reject) =>
        await axiosInstance
          .get("/")
          .then((response) => {
            resolve(response?.data);
          })
          .catch((err) => {
            dispatch(
              openSnackbar({
                snackbar: true,
                content: err.message,
                severity: "error",
              })
            );
            reject(err);
          })
    );
  }
}
export default new JobService();
