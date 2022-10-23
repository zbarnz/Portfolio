import React from "react";
import styles from "../styles/Tile.module.css";
import Link from "next/link";

const Tile = () => {

  return (
    <section className={styles.tilesContainer}>
      <Link href="/projects/agenda">
        <article className={styles.tile}>
          <h1>Agenda</h1>
          <h2>A meeting app for professionals</h2>
        </article>
      </ Link>
      <Link href="/projects/bca">
        <article className={styles.tile}>
          <h1>Bentley Consulting Association</h1>
          <h2>Bentley Consulting Association&apos;s website.</h2>
        </article>
      </ Link>
      <Link href="/projects/socoin">
        <article className={styles.tile}>
          <h1>SoCoin</h1>
          <h2>Blockchain based crypto currency</h2>
        </article>
      </ Link>
      <Link href="https://github.com/zbarnz">
        <article className={styles.tile}>
          <h1>GitHub</h1>
          <h2>...Projects</h2>
        </article>
      </ Link>
    </section>

  );

};

export default Tile;