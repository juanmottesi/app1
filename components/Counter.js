import React, { useState } from 'react';

const Counter = ({ amount = 0 }) => {
  const [counter, setCounter] = useState(amount);

  const handleAdd = () => setCounter((prevState) => prevState + 1);
  const handleSub = () => setCounter((prevState) => prevState - 1);

  return (
    <div>
      <h1>{counter}</h1>
      <div>
        <button type="button" onClick={handleAdd}>+</button>
        <button type="button" onClick={handleSub}>-</button>
      </div>
    </div>
  )
}

export default Counter;
