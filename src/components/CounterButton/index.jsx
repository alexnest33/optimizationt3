import { memo } from "react";

const CounterButton = ({ increment }) => {
  return (
    <div>
      <button onClick={increment}>Увеличить счетчик</button>
    </div>
  );
};

export default memo(CounterButton);
