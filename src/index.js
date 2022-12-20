import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Provider as ReduxProvider } from "@store";
import { HelmetProvider } from "react-helmet-async";

import { ThemeProvider, theme, StyledEngineProvider } from "./util/@theme";
import { CssBaseline } from "@components";

import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

import { SocketContext, socket } from "contexts/SocketContext";

import { persistor, store } from "@store";
import { PersistGate } from "redux-persist/integration/react";

import { RouterProvider } from "react-router-dom";
import routes from "@routes";

import "@i18n";

if (process.env.NODE_ENV === "production") {
  Sentry.init({
    dsn: "https://c0b4ea5ea70f4628992832786a656ac9@o4504350612586496.ingest.sentry.io/4504350613438464",
    integrations: [new BrowserTracing()],
    tracesSampleRate: 1.0,
  });
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StyledEngineProvider>
            <ThemeProvider theme={theme}>
              <SocketContext.Provider
                value={{
                  socket,
                  socketId: socket.id,
                }}
              >
                <RouterProvider router={routes}>
                  <CssBaseline />
                  <App />
                </RouterProvider>
              </SocketContext.Provider>
            </ThemeProvider>
          </StyledEngineProvider>
        </PersistGate>
      </ReduxProvider>
    </HelmetProvider>
  </React.StrictMode>
);

reportWebVitals();
