import { createElement } from "react";
import { Route, Routes } from "react-router-dom";

import DefaultLayout from "@layout/BaseLayout";

import { homePage } from "./routes";

const Router = () => {
  return (
    <Routes>
      <Route element={<DefaultLayout/>}>
        <Route path="/" element={createElement(homePage)} />
      </Route>
    </Routes>
  );
};

export default Router;
