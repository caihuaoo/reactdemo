import { useDispatch, useSelector } from "react-redux";
import styles from "./index.module.less";
import { lazy, useEffect } from "react";
import { RootState } from "@/store";
import { getDemosList } from "@/utils/asyncComponent";

const _menuList = getDemosList();
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
        {/* <h5>{"示例Demo"}</h5> */}
        <ul className={styles.ul_list_content}>
          {menuList.map((item, index) => (
            <li
              key={index}
              className={` ${
                currentComponent?.name === item.name ? styles.active : styles.li
              }`}
              onClick={() => selectComponent(item)}
            >
              {item.name}
              <span></span>
            </li>
          ))}
        </ul>
      </ul>
    </div>
  );
};

export default SliderContent;
