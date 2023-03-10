import LoadingScreen from "components/LoadingScreen";
import React, { Suspense, lazy } from "react";
import { createBrowserRouter, useLocation } from "react-router-dom";

import ErrorPage from "pages/ErrorPage";

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();

  <LoadingScreen isDashboard={pathname.includes("/dashboard")} />;
  return (
    <Suspense fallback={<LoadingScreen></LoadingScreen>}>
      <Component {...props} />
    </Suspense>
  );
};

const App = Loadable(lazy(() => import("./App")));
const Dashboard = Loadable(lazy(() => import("./pages/Dashboard")));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
    ],
  },
]);

export default router;
