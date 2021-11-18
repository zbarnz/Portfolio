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
      <Link href="/projects/socoin">
        <article className={styles.tile}>
          <h1>SoCoin</h1>
          <h2>Blockchain based crypto currency</h2>
        </article>
      </ Link>
      <Link href="/projects/snake">
        <article className={styles.tile}>
          <h1>Snake Online</h1>
          <h2>Classic game of snake playable online</h2>
        </article>
      </ Link>
      <Link href="https://github.com/zbarnz?tab=repositories">
        <article className={styles.tile}>
          <h1>GitHub</h1>
          <h2>Random GitHub projects</h2>
        </article>
      </ Link>
    </section>

  );

};

export default Tile;