import { useDispatch, useSelector } from "react-redux";
import styles from "./index.module.less";
import { lazy, useEffect } from "react";
import { RootState } from "../../store";

const _menuList = [
  { title: "DragList", key: "1", path: "DragList" },
  { title: "Cesium", key: "2", path: "Cesium" },
  { title: "ScrollContainer", key: "3", path: "ScrollContainer" },
  { title: "ParallaxScrolling", key: "4", path: "ParallaxScrolling" },
  { title: "ScrollerCard", key: "5", path: "ScrollerCard" },
  { title: "OpenLayer", key: "6", path: "OpenLayer" },
];

const SliderContent = () => {
  const dispatch = useDispatch();
  const { menuList, currentComponent } = useSelector(
    (state: RootState) => state.global
  );

  const selectComponent = (item: any) => {
    dispatch({ type: "global/setCurrentComponent", payload: item });
  };

  useEffect(() => {
    dispatch({ type: "global/setMenuList", payload: _menuList });
  }, []);

  return (
    <div className={styles.container}>
      <ul className={styles.ul_list}>
        <h5>{"示例Demo"}</h5>
        <ul className={styles.ul_list_content}>
          {menuList.map((item, index) => (
            <li
              key={index}
              className={` ${
                currentComponent?.key === item.key ? styles.active : styles.li
              }`}
              onClick={() => selectComponent(item)}
            >
              {item.title}
              <span></span>
            </li>
          ))}
        </ul>
      </ul>
    </div>
  );
};

export default SliderContent;
