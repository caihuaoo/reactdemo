import ScrollContainer from "../../components/ScrollContainer";

const ScrollContainerDemo = () => {
  return (
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
  );
};

export default ScrollContainerDemo;