import Loading from "@/components/Loading";
import React, { Suspense } from "react";

const Cesium = React.lazy(() => import("../../components/Cesium"));
const CesiumDemo = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Cesium />
    </Suspense>
  );
};

export default CesiumDemo;
