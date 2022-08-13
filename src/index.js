import React from "react";
import ReactDOM from "react-dom/client";
import MyProvider from "./components/application/provider";
import "./index.css";
import App from "./routes/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MyProvider>
      <App />
    </MyProvider>
  </React.StrictMode>
);
