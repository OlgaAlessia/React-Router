import React from "react";
import { useParams } from 'react-router-dom';

function Operations() {
    const { operation, n1, n2 } = useParams();
    const value1 = parseInt(n1);
    const value2 = parseInt(n2);


    const add = (val1, val2) =>  val1 + val2;
    const subtract = (val1, val2) => val1 - val2;

    function multiply(val1, val2) {
        return val1 * val2;
    }

    function divide(val1, val2) {
        return val1 / val2;
    }

    switch (operation) {
        case 'add':
            return (
                <div>
                    <h1>result = {add(value1, value2)}</h1>
                </div>
            );
        case 'subtract':
            return (
                <div>
                    <h1>result = {subtract(value1, value2)}</h1>
                </div>
            );
        case 'multiply':
            return (
                <div>
                    <h1>result = {multiply(value1, value2)}</h1>
                </div>
            );
        case 'divide':
            return (
                <div>
                    <h1>result = {divide(value1, value2)}</h1>
                </div>
            );
        default:
            return null;
    }
}

export default Operations;
