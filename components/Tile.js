import React from "react";
import styles from "../styles/Tile.module.css";

const Tile = () => {

  return (
    <section className={styles.tilesContainer}>
      <article className={styles.tile}>
        <h1>Agenda</h1>
        <h2>A meeting app for professionals</h2>
      </article>
      <article className={styles.tile}>
        <h1>SoCoin</h1>
        <h2>Blockchain based crypto currency</h2>
      </article>
      <article className={styles.tile}>
        <h1>Snake Online</h1>
        <h2>Classic game of snake playable online</h2>
      </article>
      <article className={styles.tile}>
        <h1>SocNet</h1>
        <h2>Fake company's website</h2>
      </article>
    </section>
  );

};

export default Tile;