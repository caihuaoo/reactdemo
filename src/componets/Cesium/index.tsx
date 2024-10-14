import "@/public/cesium/Build/CesiumUnminified/Widgets/widgets.css";

import * as Cesium from "cesium";
import styles from "./index.module.less";
import { useEffect, useState } from "react";
import FlyToPos from "./components/FlyToPos";
import CreateChinaMap from "./components/CreateChinaMap";
import { initMap, changeBaseMap } from "./CesiumMap";

function App() {
  const [viewer, setViewer] = useState<Cesium.Viewer>();

  useEffect(() => {
    const _viewer = initMap("cesiumContainer");
    setViewer(_viewer);
    changeBaseMap(0);
  }, []);


  return (
    <div className={styles.cesiumbox}>
      <div id="cesiumContainer" className={styles.cesiumContainer} />
      <div className={styles.cesiumTool}>
        <FlyToPos viewer={viewer} />
        <CreateChinaMap viewer={viewer} />
      </div>
    </div>
  );
}

export default App;
