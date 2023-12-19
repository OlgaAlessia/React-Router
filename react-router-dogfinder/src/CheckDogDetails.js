import React from 'react';
import { useParams } from 'react-router-dom';
import DogDetails from './DogDetails';


function CheckDogDetails({ dogs }) {
    const { name } = useParams();

    if(name) {
        const checkedDog= dogs.find( d => d.name.toLowerCase() === name.toLowerCase());

        return <DogDetails dog={checkedDog} />;
    }

    return null;

}

export default CheckDogDetails;