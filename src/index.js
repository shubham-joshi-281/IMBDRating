import React from "react";
import ReactDOM from "react-dom/client";
import { AppProvider } from "./component/Context";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AppProvider>
);
