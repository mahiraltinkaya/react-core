import "./assets/main.scss";

import { RouterProvider } from "react-router-dom";
import routes from "./@routes";
import { useSelector, useDispatch } from "react-redux";
import { Snackbar, Alert } from "@components";

function App() {
  const { snackbar, severity, content } = useSelector((state) => state.todos);

  const handleClose = () => {};
  return (
    <>
      <RouterProvider router={routes}>
        <Snackbar open={snackbar} autoHideDuration={4000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity={severity}
            sx={{ width: "100%" }}
          >
            {content}
          </Alert>
        </Snackbar>
      </RouterProvider>
    </>
  );
}

export default App;
