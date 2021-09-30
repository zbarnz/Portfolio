import Head from "next/head";
import styles from "../styles/Home.module.css";
import Tile from "../components/Tile";

export default function Home() {
  return (
    <>
      <div className={styles.headerContainer}>
        <h1>Hi, my name is Zach</h1>
        <h2>This is a responsive web-based portfolio
            to showcase some of my projects</h2>
      </div>
      <Tile />
    </>
  );
}
