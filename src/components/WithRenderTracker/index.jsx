import { useRef } from "react";

const WithRenderTracker = (WrappedComp) => {
  return (props) => {
    const renderCount = useRef(0);
    const changeText = () => {
      renderCount.current++;
      console.log(`${WrappedComp.name} рендерился ${renderCount.current} раз`);
    };
    return (
      <WrappedComp
        renderCount={renderCount}
        changeText={changeText}
        {...props}
      />
    );
  };
};

export default WithRenderTracker;
