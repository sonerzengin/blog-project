import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="container mx-auto flex justify-between items-center h-20 ">
      <Logo />
      <Navbar />
    </div>
  );
};

export default Header;
