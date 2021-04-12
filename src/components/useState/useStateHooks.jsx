import React, { useState } from "react";

export const Hooks1 = () => {
  const [count, setCount] = useState(0);
  const [second, setSecond] = useState(0);
  // const [state, setState] = useState({
  //     title: 'счетчик',
  //     date: Date.now()
  // })

  const clickButton = () => {
    setCount(count + 1);
    if (count === 5) {
    }
  };

  const clickButtonMinus = () => {
    setCount((prevCount) => {
      return prevCount - 1;
    });
  };

  const secondButton = () => {
    setSecond((prevSecond) => {
      return prevSecond + 1;
    });
  };

  const secondButtonminus = () => {
    setSecond((prevSecond) => {
      return prevSecond - 1;
    });
  };

  return (
    <div>
      <div>
        <p>hello this click{count}</p>
        <button onClick={clickButton}>click me+</button>
        <button onClick={clickButtonMinus}>click me-</button>
      </div>
      <div>
        <p>hello this click {second}</p>
        <button onClick={secondButton}>click me+</button>
        <button onClick={secondButtonminus}>click me-</button>
      </div>
      
    </div>
  );
};
