import React from "react";
import Link from "next/link";
import styles from "../styles/Nav.module.css";

const Menu = () => {
  return (
    <div className={styles.navContainer}>
      <h3><Link href="/"><b>SOCNET</b></ Link> Zach&apos;s Portfolio</h3>
    </div>
  );
};

export default Menu;