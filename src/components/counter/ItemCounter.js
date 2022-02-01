import React, { useState } from 'react';

const ItemCounter = ({stock}) => {
    const [counter, setCounter] = useState(1);
    const minusCounter = () => {
        if(counter <= 1) return;
        setCounter(counter - 1);
    }
    const plusCounter = () => {
        if(counter >= stock) return;
        setCounter(counter + 1);
    }
    if(stock > 0){
        return <div className='counterControl'>
            <button className='counterButton' onClick={minusCounter}>-</button>
            <div className='counterNumber'>{counter}</div>
            <button className='counterButton' onClick={plusCounter}>+</button>
        </div>;
    }
    else{
        return <div className='counterControl'>
            <button className='counterButton' onClick={minusCounter}>-</button>
            <div className='counterNumber'>{"0"}</div>
            <button className='counterButton' onClick={plusCounter}>+</button>
        </div>
    }
};

export default ItemCounter;
