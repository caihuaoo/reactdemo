/**
 * 多行文本消除效果
 * @author: jch
 */

import React, { useEffect, useRef, useState } from "react";
import styles from "./index.module.less";

const TrimMultilineText = () => {

  return (
    <div className={styles.container}>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
       sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
         Duis aute irure dolor in reprehenderit in voluptate velit
      </p>
      <p className={styles.p_clone}>
        <span className={styles.span}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
       sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
         Duis aute irure dolor in reprehenderit in voluptate velit
        </span>
      </p>
    </div>
  );
};

export default TrimMultilineText;
