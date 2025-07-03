import { memo } from "react";

const CounterButton = ({ increment }) => {
  console.log("rerender button");
  return (
    <div>
      <button onClick={increment}>Увеличить счетчик</button>
    </div>
  );
};

export default memo(CounterButton);
