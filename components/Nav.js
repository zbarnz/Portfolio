import React from "react";
import styles from "../styles/Menu.module.css";
import MenuIcon from "@material-ui/icons/Menu";

const Menu = () => {
  return (
    <div className={styles.navContainer}>
      <h3><b>SOCNET</b> Zach's Portfolio</h3>
      <div className={styles.menuButtonContainer}>
        <MenuIcon fontSize="large" style={{ color: "white" }}/>
      </div>
    </div>
  );
};

export default Menu;