import React from "react";
import styles from "../styles/IconCircle.module.css";
import PropTypes from "prop-types";

const IconCircle = ({ icon, href }) => {

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <span className={styles.iconCircle}>
        {icon}
      </span>
    </a>
  );
};

IconCircle.propTypes = {
  icon: PropTypes.element,
  href: PropTypes.string
};

IconCircle.defaultProps = {
  href: "",
};

export default IconCircle;