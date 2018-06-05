import React from "react";
import PropTypes from "prop-types";

const Logo = ({ src }) => <img className="logo" src={src} alt="" />;

Logo.propTypes = {
  src: PropTypes.string
};

export default Logo;
