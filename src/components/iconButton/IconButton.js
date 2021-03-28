import React from "react";
import PropTypes from "prop-types";
import styles from "./IconButton.module.css";

const IconButton = ({ children, onClick, ...alyProps }) => (
  <button
    type="button"
    className={styles.IconButton}
    onClick={onClick}
    {...alyProps}
  >
    {children}
  </button>
);

IconButton.defaultProps = {
  onClick: () => null,
  children: null,
};

IconButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  "aria-label": PropTypes.string.isRequired,
};

export default IconButton;
