import React from "react";
import styles from "../styles/Layout.module.css";
import Menu from "./Nav";
import SocialBar from "./SocialBar";

const Layout = ({ children }) => {
  return (
    <div className={styles.body}>
      <Menu />
      <main>{children}</main>
      {/* <div className={styles.menuPressedContainer}>
        <ul>
          <li>Home</li>
          <li>About Me</li>
        </ul>
      </div> */}
      <SocialBar />
    </div>
  );
};

export default Layout;