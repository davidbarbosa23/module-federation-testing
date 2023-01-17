import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div id="header">
      <h1> Header </h1>
      <Link to="/omg/local">App 2 comp Link to App 1</Link>
    </div>
  );
};
