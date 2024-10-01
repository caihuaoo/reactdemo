//
import styles from "./index.module.less";
import { useEffect } from "react";
import img1 from "@/assets/images/ScrollerContainer/1.jpg";
import img2 from "@/assets/images/ScrollerContainer/2.jpg";
import img3 from "@/assets/images/ScrollerContainer/3.jpg";

const ScrollContainer = () => {
  const handleSizeChange = () => {
    const container =
      document.body.querySelector<HTMLElement>("#scrollContainer");

    const { offsetWidth, offsetHeight } = container || {};

    const root = document.getElementById("root");

    if (root) {
      root.style.setProperty("--ScrollContainer-width", offsetWidth + "px");
      root.style.setProperty("--ScrollContainer-height", offsetHeight + "px");
    }
  };

  useEffect(() => {
    // 初始化容器尺寸
    handleSizeChange();
    window.addEventListener("resize", handleSizeChange);
    return () => {
      window.removeEventListener("resize", handleSizeChange);
    };
  }, []);

  return (
    <div id="scrollContainer" className={styles.scrollContainer}>
      <div className={styles.vScroll}>
        <div className={styles.content}>
          <img src={img1} />
          <img src={img2} />
          <img src={img3} />
        </div>
      </div>
    </div>
  );
};

export default ScrollContainer;
