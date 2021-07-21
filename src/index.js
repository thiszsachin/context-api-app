import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Context from "./components/Context";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Context>
      <App />
    </Context>
  </StrictMode>,
  rootElement
);
