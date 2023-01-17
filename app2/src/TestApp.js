import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";

const localRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              home<Header></Header>
            </div>
          }
        ></Route>
        <Route path="input" element={<div>input</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default localRouter;
