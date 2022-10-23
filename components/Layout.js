import React from "react";
import styles from "../styles/Layout.module.css";
import Menu from "./Nav";
import SocialBar from "./SocialBar";

const Layout = ({ children }) => {
  return (
    <div className={styles.body}>
      <Menu />
      <main>{children}</main>
      <SocialBar />
    </div>
  );
};

export default Layout;