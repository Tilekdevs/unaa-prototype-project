import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "./utils/i18n";
import store from './redux/store'
import { Provider } from "react-redux";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
   <Provider store={store}>
      <BrowserRouter>
        <I18nextProvider i18n={i18n}>
          <App />
        </I18nextProvider>
      </BrowserRouter>
 </Provider>
  </React.StrictMode>
);
