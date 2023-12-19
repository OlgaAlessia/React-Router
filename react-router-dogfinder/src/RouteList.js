import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import DogList from "./DogList";
import CheckDogDetails from "./CheckDogDetails";

function RouteList({dogs}) {
  return (
    <Routes>
      <Route exact path="/dogs" element={<DogList dogs={dogs}/>}/>
      <Route exact path="/dogs/:name" element={<CheckDogDetails dogs={dogs}/>}/>
      <Route path="*" element={<Navigate to="/dogs" />}/>
    </Routes>
  );
}

export default RouteList;
