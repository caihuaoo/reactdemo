import Loading from "@/componets/Loading";
import React, { Suspense } from "react";

const Cesium = React.lazy(() => import("../../componets/Cesium"));
const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Cesium />
    </Suspense>
  );
};

export default App;
