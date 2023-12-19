import React from "react";
import { Link } from "react-router-dom";
import './DogList.css';


function DogList({ dogs }) {

  return (
    <div className="DogList-wrapper">
      {
        dogs.map(dog => (
          <div className="DogList-card" key={dog.name}>
            <img src={`./${dog.src}.jpg`} alt="" className="DogList-card-image" />
            <div className="DogList-card-text-wrapper">
              <Link to={`/dogs/${dog.name.toLowerCase()}`} className="DogList-card-title">{dog.name}</Link>
            </div>
          </div>
        ))}
    </div>
  )
}



export default DogList;