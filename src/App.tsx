import { useState } from "react";
import "./App.css";
import { Select } from "antd";
import img1 from "@/assets/images/ScrollerContainer/1.jpg";
import img2 from "@/assets/images/ScrollerContainer/2.jpg";
import img3 from "@/assets/images/ScrollerContainer/3.jpg";
import DragList from "./componets/DragList";
import Cesium from "./componets/Cesium";
import ScrollContainer from "./componets/ScrollContainer";
import ParallaxScrolling from "./componets/ParallaxScrolling";
import ScrollerCard from "./componets/ScrollerCard";
import OpenLayer from "./componets/OpenLayer";

function App() {
  const demoList = [
    {
      label: "DragList",
      value: "DragList",
      component: (
        <DragList
          list={[
            { value: 1, id: "item1" },
            { value: 2, id: "item2" },
            { value: 3, id: "item3" },
            { value: 4, id: "item4" },
            { value: 5, id: "item5" },
            { value: 6, id: "item6" },
          ]}
          render={(item) => <div>{item.data.value}</div>}
          keyName={"id"}
          afterDrag={(list) => console.log(list)}
        />
      ),
    },
    {
      label: "Cesium",
      value: "Cesium",
      component: <Cesium />,
    },
    {
      label: "ScrollContainer",
      value: "ScrollContainer",
      component: (
        <ScrollContainer
          content={
            <>
              <img src={`https://picsum.photos/1600/800?random=1`} />
              <img src={`https://picsum.photos/1600/800?random=2`} />
              <img src={`https://picsum.photos/1600/800?random=3`} />
              <img src={`https://picsum.photos/1600/800?random=4`} />
              <img src={`https://picsum.photos/1600/800?random=5`} />
            </>
          }
        />
      ),
    },
    {
      label: "ParallaxScrolling",
      value: "ParallaxScrolling",
      component: <ParallaxScrolling />,
    },
    {
      label: "ScrollerCard",
      value: "ScrollerCard",
      component: <ScrollerCard />,
    },
    {
      label: "OpenLayer",
      value: "OpenLayer",
      component: <OpenLayer />,
    },
  ];

  const [demo, setDemo] = useState(null);
  const onChange = (value: string) => {
    setDemo(demoList.find((item) => item.value === value) as any);
  };

  const onSearch = (value: string) => {
    console.log("search:", value);
  };

  return (
    <>
      <Select
        showSearch
        style={{ width: 400, textAlign: "left" }}
        className="select"
        placeholder="选择某个demo"
        optionFilterProp="label"
        onChange={onChange}
        onSearch={onSearch}
        options={demoList}
      />
      <div className="container">{demo && demo.component}</div>
    </>
  );
}

export default App;
