import * as Cesium from "cesium";

//天地图key
const key = "a6ccf4643596514463d03a6af0e152eb";

const cesiumToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIwY2MyYzdhMC1jZDNhLTQ5MTktYmRiNC0xMWJlMjk2NWExNWMiLCJpZCI6NzY0MzMsImlhdCI6MTYzOTQ1MDkxNX0.QO9PQc-kmI3Y2AXEUtxTyR4Zo7VCEpMxU-4yVcgKB1g";

// Cesium.Ion.defaultAccessToken = cesiumToken;

// 初始视图定位在中国
Cesium.Camera.DEFAULT_VIEW_RECTANGLE = Cesium.Rectangle.fromDegrees(
  90,
  -20,
  110,
  90
);

let viewer = null;
function initMap(container) {
  viewer = new Cesium.Viewer(container, {
    animation: false,
    baseLayerPicker: false,
    fullscreenButton: false,
    geocoder: false,
    homeButton: false,
    infoBox: false,
    sceneModePicker: false,
    selectionIndicator: false,
    timeline: false,
    navigationHelpButton: false,
    scene3DOnly: true,
    orderIndependentTranslucency: false,
    contextOptions: {
      webgl: {
        alpha: true,
      },
    },
  });
  viewer._cesiumWidget._creditContainer.style.display = "none";
  viewer.scene.fxaa = true;
  viewer.scene.postProcessStages.fxaa.enabled = true;
  //   if (Cesium.FeatureDetection.supportsImageRenderingPixelated()) {
  //     // 判断是否支持图像渲染像素化处理
  //     viewer.resolutionScale = window.devicePixelRatio;
  //   }
  // 移除默认影像
  removeAll();
  // 地形深度测试
  viewer.scene.globe.depthTestAgainstTerrain = true;
  // 背景透明
  viewer.scene.globe.baseColor = new Cesium.Color(0.0, 0.0, 0.0, 0);

  // 添加地形
  Cesium.createWorldTerrainAsync({
    requestVertexNormals: true,
  }).then(function (terrainProvider) {
    viewer.terrainProvider = terrainProvider;
  });

  return viewer;
}

function addTdtLayer(options) {
  let url = `https://t{s}.tianditu.gov.cn/DataServer?T=${options.type}&x={x}&y={y}&l={z}&tk=${key}`;
  const layerProvider = new Cesium.UrlTemplateImageryProvider({
    url: url,
    subdomains: ["0", "1", "2", "3", "4", "5", "6", "7"],
    tilingScheme: new Cesium.WebMercatorTilingScheme(),
    minimumLevel: 3,// 最低访问层级
    maximumLevel: 10// 最高访问层级

  });
  viewer.imageryLayers.addImageryProvider(layerProvider);
}

function addTdtLayer2(options) {
  let url = `https://t{s}.tianditu.gov.cn/${options.type}/wmts?tk=${key}`;
  const layerProvider = new Cesium.WebMapTileServiceImageryProvider({
    url: url,
    layer: options.type.slice(0, options.type.length - 2),
    style: "default",
    format: "tiles",
    tileMatrixSetID: "w",
    tilingScheme: new Cesium.WebMercatorTilingScheme(),
    subdomains: ["0", "1", "2", "3", "4", "5", "6", "7"],
    maximumLevel: 18,
  });
  viewer.imageryLayers.addImageryProvider(layerProvider);
}


function changeBaseMap(type) {
  removeAll();
  switch (type) {
    case 0: //影像地图
      addTdtLayer({
        type: "img_w",
      });
      addTdtLayer({
        type: "cia_w",
      });
      break;
    case 1: //电子地图
      addTdtLayer({
        type: "vec_w",
      });
      addTdtLayer({
        type: "cva_w",
      });
      break;
    case 2: //地形图
      addTdtLayer({
        type: "ter_w",
      });
      addTdtLayer({
        type: "cta_w",
      });
      break;
  }
}

function removeAll() {
  viewer.imageryLayers.removeAll();
}

function destroy() {
  viewer.entities.removeAll();
  viewer.imageryLayers.removeAll();
  viewer.destroy();
}

function setView(coords, hpr) {
  viewer.scene.camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees(coords[0], coords[1], coords[2]),
    orientation: {
      heading: Cesium.Math.toRadians(hpr.heading),
      pitch: Cesium.Math.toRadians(hpr.pitch),
      roll: Cesium.Math.toRadians(hpr.roll),
    },
  });
}

export { initMap, addTdtLayer, changeBaseMap, setView, removeAll, destroy };
