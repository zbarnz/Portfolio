import React from "react";
import styles from "../styles/IconCircle.module.css";
import PropTypes from "prop-types";

const IconCircle = ({ icon }) => {

  return (
    <span className={styles.IconCircle}>
      {icon}
    </span>
  );
};

IconCircle.propTypes = {
  icon: PropTypes.element,
};

export default IconCircle;