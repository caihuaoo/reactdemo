import { Spin } from "antd";

const App = () => {
  return (
    <Spin
      size="large"
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        translate: "-50% -50%",
      }}
    />
  );
};

export default App;
