import axios from "@axios";
import { dispatch } from "store";
import { openSnackbar } from "store/slices/todoSlices";
class JobService {
  get() {
    return new Promise((resolve, reject) => {
      return axios
        .get("/")
        .then((response) => {
          return response.data;
        })
        .catch((err) => {
          console.log(err);
          dispatch(openSnackbar(true));
        });
    });
  }
}

export default new JobService();
