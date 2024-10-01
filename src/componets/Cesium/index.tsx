import * as Cesium from "cesium";
import styles from "./index.module.less";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    // 初始化Cesium
    // token
    Cesium.Ion.defaultAccessToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2NTEzZGU2NS05MjhhLTRhNzctOThmMS00MzM5ZmUzZTdhNTgiLCJpZCI6MjQ1MjQxLCJpYXQiOjE3Mjc3NTkyMDR9.xaZNE2AK9C4EWgia_QtzX7tJ3p8b3eDQrgPVvQfUKpA";
    // 使用 createWorldTerrainAsync 并等待其完成
    Cesium.createWorldTerrainAsync()
      .then((terrainProvider) => {
        const viewer = new Cesium.Viewer("cesiumContainer", {
          infoBox: false,
          terrainProvider: terrainProvider,
          scene3DOnly: true,
          selectionIndicator: false,
          baseLayerPicker: false,
          timeline:false,
          navigationHelpButton: false,
          animation:false,
          fullscreenButton:false,
          sceneModePicker:false,
          geocoder:false,
          homeButton:false,
          vrButton:false,
          navigationInstructionsInitiallyVisible:false,
          sceneMode: Cesium.SceneMode.SCENE3D,
      
          //   terrainProvider: Cesium.createWorldTerrainAsync(),
        //   imageryProvider: new Cesium.ArcGisMapServerImageryProvider({
        //     url: "https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer",
        //   }),
         imageryProviderViewModels: [],
        });
      })
      .catch((error) => {
        console.error("加载地形失败", error);
      });
  }, []);

  return <div id="cesiumContainer" className={styles.cesiumContainer} />;
}

export default App;
