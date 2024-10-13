import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import store from "./store";
import { Provider } from "react-redux";

// import './public/cesium/Build/Cesium/Cesium.js'
import "./public/cesium/Build/CesiumUnminified/Widgets/widgets.css";
import "./global.css"; // 全局样式

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </StrictMode>,
);
