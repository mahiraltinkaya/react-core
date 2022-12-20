import "./assets/main.scss";

import { Snackbar, Alert } from "@components";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <Outlet></Outlet>
    </>
  );
}

export default App;
