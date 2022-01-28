import React, { useState } from "react";

const CounterTwo = () => {
  const [count, setCount] = useState(0);

  const addFive = () => {
    for (let i = 0; i < 5; i++) {
      //setCount(count + 1); //count will only add one instead of looping 5times and add one in each
      // console.log(count);
      setCount((prev) => prev + 1); //we get the previous state and add 1 to it
    }
  };

  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>Add</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount((prev) => prev - 1)}>Subtract</button>
      <h5>Count: {count}</h5>

      <button onClick={addFive}>Add 5</button>
    </div>
  );
};

export default CounterTwo;
