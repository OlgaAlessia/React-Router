import React from "react";
import { useParams } from 'react-router-dom';

function Add() {
    const { n1, n2 } = useParams();
    const value1 = parseInt(n1);
    const value2 = parseInt(n2);
    const result = value1 + value2;

    return (
        <div>
            <h1>{n1} + {n2} = {result}</h1>
        </div>
    );
}

export default Add;
