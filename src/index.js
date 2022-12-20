import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { store, persistor } from "./store";
import { Provider } from "react-redux";
import { HelmetProvider } from "react-helmet-async";

import { ThemeProvider, theme, StyledEngineProvider } from "./util/@theme";
import { CssBaseline } from "@components";

import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

import { SocketContext, socket } from "contexts/SocketContext";

import { PersistGate } from "redux-persist/integration/react";

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
      <StyledEngineProvider>
        <ThemeProvider theme={theme}>
          <SocketContext.Provider
            value={{
              socket,
              socketId: socket.id,
            }}
          >
            <CssBaseline />
            <Provider store={store}>
              <PersistGate loading={null} persistor={persistor}>
                <App />
              </PersistGate>
            </Provider>
          </SocketContext.Provider>
        </ThemeProvider>
      </StyledEngineProvider>
    </HelmetProvider>
  </React.StrictMode>
);

reportWebVitals();
