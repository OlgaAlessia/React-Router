import React from "react";
import RouteList from "./RouteList";
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <RouteList />
      </BrowserRouter>s
    </div>
  );
}

export default App;
