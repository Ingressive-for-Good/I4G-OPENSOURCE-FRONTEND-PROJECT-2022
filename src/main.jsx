import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import App from "./App";
import appTheme from "../styles/app-theme";
import GlobalStyle from "../styles/global-style";
import "../styles/index.css";
import store from "../utils/services/store";

import { Context } from "../utils/context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={appTheme}>
      <Provider store={store}>
        <Context>
          <App />
        </Context>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
