import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { Provider } from "react-redux";
import { store } from "./store/store.js";
import StyleGlobal from "./StyleGlobal.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <StyleGlobal />
      <App />
    </Provider>
  </React.StrictMode>
);
