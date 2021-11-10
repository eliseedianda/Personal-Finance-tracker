import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "./context/context";
import "./index.css";
import { SpeechProvider } from "@speechly/react-client";
import App from "./App";

ReactDOM.render(
  <SpeechProvider appId="573d00a6-2f45-4bfd-b302-afcf3b46721a" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById("root")
);
