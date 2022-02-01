import React, { useState } from 'react';

const Counter = ({stock}) => {
    const [counter, setCounter] = useState(1);
    
    const minusCounter = () => {
        if(counter <= 1) return;
        setCounter(counter - 1);
    }
    const plusCounter = () => {
        if(counter >= stock) return;
        setCounter(counter + 1);
    }

    return <div>
        <button onClick={minusCounter}></button>
        <span>{counter}</span>
        <button onClick={plusCounter}></button>
    </div>;
};

export default Counter;
