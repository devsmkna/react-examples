import { useState } from "react";
import "./RCounter.css";

type RCounterType = {
  start: number;
};

const RCounter = ({ start }: RCounterType) => {
  const [count, setCount] = useState<number>(start);

  const handleClick = (isIncrease: boolean = true) => {
    isIncrease ? setCount(count + 1) : setCount(count - 1);
  };

  return (
    <div className="r-counter">
      <p className="r-counter-value">{count}</p>
      <div className="r-counter-buttons">
        <button onClick={() => handleClick(false)}>-</button>
        <button onClick={() => handleClick()}>+</button>
      </div>
    </div>
  );
};

export default RCounter;
