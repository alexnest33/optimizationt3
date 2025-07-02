import { memo } from "react";

const CounterButton = ({ increment }) => {
  console.log("rerender button");
  return (
    <>
      <button onClick={increment}>Увеличить счетчик</button>
    </>
  );
};

export default memo(CounterButton);
