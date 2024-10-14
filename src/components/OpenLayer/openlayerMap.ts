//构建ol

import { Map, View } from "ol";
import { getTopLeft, getWidth } from "ol/extent";
import TileLayer from "ol/layer/Tile";
import { fromLonLat, get } from "ol/proj";
import { OSM, XYZ } from "ol/source";
import { TileGrid } from "ol/tilegrid";
//天地图key
const key = "a6ccf4643596514463d03a6af0e152eb";
let map;
function initMap(container) {
  const tdtImgSource = new XYZ({
    // tileGrid: new TileGrid({
    //   origin: getTopLeft(get("EPSG:4326")?.getExtent() || []),
    //   tileSize: [256, 256],
    //   resolutions: new Array(18)
    //     .fill(0)
    //     .map(
    //       (item, index) =>
    //         getWidth(get("EPSG:4326")?.getExtent() || []) /
    //         256 /
    //         Math.pow(2, index)
    //     ),
    // }),
    crossOrigin: "anonymous",
    wrapX: true,
    tileUrlFunction: ([z, x, y]) =>
      `http://t2.tianditu.gov.cn/DataServer?T=img_c&x=${x}&y=${y}&l=${z}&tk=${key}`, //请求地址 自己改改 请求地图格式可以在天地图里找当 用于加载不同的地图：vec_c矢量图
    projection: "EPSG:4326",
  });

  const tdtImgLayer = new TileLayer({
    source: tdtImgSource,
  });

  const tdtCvaSource = new XYZ({
    // tileGrid: new TileGrid({
    //   origin: getTopLeft(get("EPSG:4326")?.getExtent() || []),
    //   tileSize: [256, 256],
    //   resolutions: new Array(18)
    //     .fill(0)
    //     .map(
    //       (item, index) =>
    //         getWidth(get("EPSG:4326")?.getExtent() || []) /
    //         256 /
    //         Math.pow(2, index)
    //     ),
    // }),
    crossOrigin: "anonymous",
    wrapX: true,
    tileUrlFunction: ([z, x, y]) =>
      `http://t2.tianditu.gov.cn/DataServer?T=cia_c&x=${x}&y=${y}&l=${z}&tk=${key}`,//vec_c矢量图 cav_c带有文字
    projection: "EPSG:4326",
  });
  const tdtCvaLayer = new TileLayer({
    source: tdtCvaSource,
  });

  const tileMap = new TileLayer({
    source: new OSM(),
  });

  //北京
  const beijingLonLat = [116.4, 39.9];

  map = new Map({
    target: container,
    layers: [tdtImgLayer, tdtCvaLayer],
    view: new View({
      projection: "EPSG:4326", // 坐标系
      center: beijingLonLat, // 地图中心点 北京
      zoom: 6, // 默认缩放比例
      minZoom: 2, // 缩放最小级别
      maxZoom: 20, // 缩放最大级别
    }),
  });

  return map;
}

function destroy() {
  map.dispose();
  map = null;
}

export { initMap, destroy };
