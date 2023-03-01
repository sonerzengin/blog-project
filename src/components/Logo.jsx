import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as ReactLogo } from "../assets/logo.svg";

const Logo = () => {
  return (
    <Link to="/">
      <div className="text-4xl">blogApp</div>
    </Link>
  );
};

export default Logo;
