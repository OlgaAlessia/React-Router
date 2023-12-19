import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import Operations from "./Operations";

function RouteList() {
  return (
    <Routes>
      <Route exact path="/:operation/:n1/:n2" element={<Operations />}/>
      <Route exact path="/" element={<Home />}/>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default RouteList;