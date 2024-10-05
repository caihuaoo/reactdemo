import styles from "./index.module.less";
import { useEffect, useRef, useState } from "react";
import { Map } from "ol";
import { initMap } from "./openlayerMap";
import 'ol/ol.css';
function App() {
  const [map, setMap] = useState<Map>();
  const mapRef = useRef(null);

  useEffect(() => {
    const _map = initMap(mapRef.current);
    setMap(_map);
  }, []);

  return (
    <div className={styles.box}>
      <div id="olMapContainer" ref={mapRef} className={styles.Container}  />
      <div className={styles.Tool}></div>
    </div>
  );
}

export default App;
