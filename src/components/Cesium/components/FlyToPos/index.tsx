/**
 * cesium  根据输入的经纬度跳转
 */

import { useEffect, useState } from "react";
import * as Cesium from "cesium";
import { flyTo } from "../../tools";
const FlyTo = (props: { viewer: Cesium.Viewer }) => {
  const { viewer } = props || {};
  const [lon, setLon] = useState<string>("0");
  const [lat, setLat] = useState<string>("0");
  const onClick = () => {
    const _lon = Number(lon);
    const _lat = Number(lat);
    flyTo({
      viewer,
      lon: _lon,
      lat: _lat,
    });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="经度"
        onChange={(e) => {
          setLon(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="纬度"
        onChange={(e) => {
          setLat(e.target.value);
        }}
      />
      <button onClick={onClick}>跳转</button>
    </div>
  );
};

export default FlyTo;
