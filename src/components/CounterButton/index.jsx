import { memo } from "react";

const CounterButton = ({ increment }) => {
  return <button onClick={increment}>Увеличить счетчик</button>;
};

export default memo(CounterButton);
