import DragList from "@/componets/DragList";

const App = () => {
  return (
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
  );
};

export default App;
