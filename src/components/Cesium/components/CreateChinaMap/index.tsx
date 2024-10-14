/**
 * 绘制中国地图
 */
import * as Cesium from "cesium";
import { useEffect, useRef } from "react";
import mapJson from "./map.json";
import image from "../../../../assets/mark.jpg";
const ChinaMap = (props: { viewer: Cesium.Viewer }) => {
  const { viewer } = props || {};

  const createPolygon = (arr,dataSource) => {
    const polygon = new Cesium.Entity({
      name: "My Polygon",
      // polygon: {
      //   hierarchy:  new Cesium.PolygonHierarchy(
      //     Cesium.Cartesian3.fromDegreesArray(arr)
      //   ),
      //   heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
      //   // heightReference: Cesium.HeightReference.RELATIVE_TO_GROUND,
      //   // height: 2,
      //   // extrudedHeight: 2,
      //   material: Cesium.Color.WHITE.withAlpha(0.2),
      //   outline: true,
      //   outlineColor: Cesium.Color.RED.withAlpha(0.8),
      //   outlineWidth: 2,
      //   // shadows: Cesium.ShadowMode.ENABLED,
      // },
      polyline: {
        positions: Cesium.Cartesian3.fromDegreesArray(arr),
        width: 1.5,
        material: Cesium.Color.RED.withAlpha(0.45),
        clampToGround: true,
      },
    });

    dataSource.entities.add(polygon);
  };

  const addChinaMap = () => {
    if (!viewer) return;
    // 假设已经初始化了Cesium.Viewer实例，名为viewer
    let dataSource = viewer.dataSources.getByName("china")[0];

    if (!dataSource) {
      dataSource = new Cesium.GeoJsonDataSource("china");
      viewer.dataSources.add(dataSource);
    }
    mapJson.features.forEach((feature) => {
      const { geometry } = feature || {};
      const { coordinates, type } = geometry || {};
      if (type === "Polygon") {
        const arr = [];
        feature.geometry.coordinates[0].forEach((item) => {
          if (Array.isArray(item) && item.length === 2) {
            arr.push(Number(item[0]));
            arr.push(Number(item[1]));
          }
        });
        createPolygon(arr,dataSource);
      } else if (type === "MultiPolygon") {
        coordinates.map((item) => {
          const arr = [];
          item[0].forEach((item2) => {
            if (Array.isArray(item2) && item2.length === 2) {
              arr.push(Number(item2[0]));
              arr.push(Number(item2[1]));
            }
          });
          createPolygon(arr,dataSource);
        });
      }
    });
  };

  const hiddenChinaMap = () => {
    let dataSource = viewer.dataSources.getByName("china")[0];

    dataSource.entities.removeAll();
  };

  return (
    <>
      <button onClick={addChinaMap}>添加中国地图</button>
      <button onClick={hiddenChinaMap}>移除中国地图</button>
    </>
  );
};

export default ChinaMap;
