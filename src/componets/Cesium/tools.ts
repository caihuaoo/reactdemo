/**
 * cesium 的一些工具类
 */
import * as Cesium from "cesium";

/**
 * 飞向到指定位置
 *
 */

const flyTo = (props: { viewer: Cesium.Viewer; lon: number; lat: number }) => {
  const { viewer, lon, lat } = props || {};
  if (!viewer) return;
  
  const cartesian3 = Cesium.Cartesian3.fromDegrees(lon, lat,10000);
  viewer.camera.flyTo({
    destination: cartesian3,
    orientation: {
      heading: Cesium.Math.toRadians(0),
      pitch: Cesium.Math.toRadians(-90),
      roll: 0
    },
  });
};

export { flyTo };
