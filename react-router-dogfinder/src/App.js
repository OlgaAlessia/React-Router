import React, { useState, useEffect } from 'react';
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import './App.css';
import NavBar from "./NavBar";
import RouteList from "./RouteList";

function App() {
  const [dogs, setDogs] = useState({ data: null, isLoading: true });


  useEffect(() => {
    async function loadDataDogs() {
      const result = await axios.get("http://localhost:5001/dogs");
      setDogs({
        data: result.data,
        isLoading: false
      });
    }
    loadDataDogs();
  }, []);

  if (dogs.isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar dogs={dogs.data} />
        <div className="container">
          <RouteList dogs={dogs.data} />
        </div>
      </BrowserRouter>
    </div>
  );
}


export default App;
