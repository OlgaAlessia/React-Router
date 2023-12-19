import React from "react";
import { Link, Navigate } from "react-router-dom";
import "./DogDetails.css";

const DogDetails = ({ dog }) => {

    if (!dog) return <Navigate to="/dogs" />

    return (
        <div className="DogDetails">
          <div className="DogDetails-image">
            <img src={`/${dog.src}.jpg`} alt={dog.name} />
          </div>
          <div className="DogDetails-details">
            <h2>{dog.name}</h2>
            <h3>{dog.age} years old</h3>
            <h3> Facts: </h3>
            <ul>
              {dog.facts.map((fact, i) => (
                <li key={i}>{fact}</li>
              ))}
    
            </ul>
    
            <Link className="DogDetails-back" to="/dogs">Go Back</Link>
          </div>
        </div>
      );
    
}
//end

export default DogDetails;
