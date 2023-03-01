import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import FindMe from "./FindMe";

const Header = () => {
  return (
    <div className="container mx-auto flex justify-between items-center h-20 ">
      <Logo />
      <FindMe />
      <Navbar />
    </div>
  );
};

export default Header;
