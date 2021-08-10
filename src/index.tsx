import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { App } from "@modules/App";

const rootElement = document.getElementById("root")
ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  </React.StrictMode>, rootElement
);
// if(rootElement?.hasChildNodes()){
//   hydrate(<App/ >, rootElement)
// } else {
//   render(<App/ >, rootElement)
// }