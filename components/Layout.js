import React from "react";
import styles from "../styles/Layout.module.css";
import Menu from "./Menu";

const Layout = () => {
  return (
    <div className={styles.body}>
      <Menu />
      <div className={styles.socialBar}>

      </div>
    </div>
  );
};

export default Layout;