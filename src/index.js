import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Loading from "./subComponanet/Loading";
import "./Language/i18n";
const root = ReactDOM.createRoot(document.getElementById("root"));
const LazyLoading = React.lazy(() => import("./App"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <React.Suspense fallback={<Loading />}>
        <LazyLoading />
      </React.Suspense>
    </BrowserRouter>
  </React.StrictMode>
);
