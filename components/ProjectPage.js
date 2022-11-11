import styles from "../styles/ProjectPage.module.css";
import PropTypes from "prop-types";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Button from "./Button";
import Image from "next/image";
import Link from "next/link";

const ProjectPage = ({
  name,
  author,
  tech,
  img1,
  cap1,
  img2,
  cap2,
  img3,
  cap3,
  git,
  live,
  isLive,
  desc
}) => {


  switch( isLive ) {
  case true:
    isLive = "primary";
    break;
  case false:
    isLive = "disabled";
  }

  return (
    <div className={styles.body}>
      <div className={styles.infoContainer}>
        <section
          className={styles.carouselContainer}
          style={{ boxShadow: "5px 5px 5px #000" }}
        >
          <Carousel showThumbs={false}>
            <div>
              <Image src={img1} layout="fill"/>
              <p
                className="legend"
                style={{ backgroundColor: "var(--background)" }}
              >
                {cap1}</p>
            </ div>
            <div>
              <Image src={img2} layout="fill"/>
              <p
                className="legend"
                style={{ backgroundColor: "var(--background)" }}
              >
                {cap2}</p>
            </ div>
            <div>
              <Image src={img3}/>
              <p
                className="legend"
                style={{ backgroundColor: "var(--background)" }}
              >
                {cap3}</p>
            </ div>
          </ Carousel>
        </section>
        <section>
          <section className={styles.textContainer}>
            <article>
              <h1>Name: </h1>
              <p>{name}</p>
            </article>
            <article>
              <h1>Author(s):</h1>
              <p>{author}</p>
            </article>
            <article>
              <h1>Technologies Used:</h1>
              <p>{tech}</p>
            </article>
          </section>
          <a href={git} target="_blank" rel="noopener noreferrer">
            <Button varient="secondary" text="GitHub" stretch="wide"/>
          </a>
          <a href={live} target="_blank" rel="noopener noreferrer">
            <Button varient={isLive} text="Live Version" stretch="wide"/>
          </a>
        </section>
      </div>
      <div className={styles.descriptionContainer}>
        <h1>Description: </h1>
        <p>{desc}</p>
      </div>
    </div>
  );
};

ProjectPage.propTypes = {
  img1: PropTypes.object,
  img2: PropTypes.object,
  img3: PropTypes.object,
  cap1: PropTypes.string,
  cap2: PropTypes.string,
  cap3: PropTypes.string,
  name: PropTypes.string,
  author: PropTypes.string,
  tech: PropTypes.string,
  desc: PropTypes.string,
  git: PropTypes.string,
  live: PropTypes.string,
  isLive: PropTypes.bool
};

ProjectPage.defaultProps = {

};

export default ProjectPage;