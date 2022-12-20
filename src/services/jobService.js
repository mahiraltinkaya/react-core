import axios from "@axios";
import { dispatch } from "@store";
import { openSnackbar } from "@store/slices/todoSlices";
class JobService {
  get() {
    return new Promise((resolve, reject) =>
      axios
        .get("/")
        .then((response) => response.data)
        .catch((err) => {
          console.log(err);
          dispatch(
            openSnackbar({
              snackbar: true,
              content: err.message,
              severity: "error",
            })
          );
        })
    );
  }
}

export default new JobService();
