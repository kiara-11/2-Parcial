import React from "react";
import "./updated.css";
import Enca from "./encabezado";

const updated = () => {
  return (
    <div>
      <Enca />
      <div className="updated">
        <h1>Last Update</h1>
        <h2>3/8/2020</h2>
      </div>
    </div>
  );
};

export default updated;
