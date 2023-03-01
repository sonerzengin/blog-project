import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import FindMe from "./FindMe";

const Header = () => {
  return (
    <div className="w-full bg-gray-100 shadow-md">
    <div className="container mx-auto flex justify-between items-center h-20 ">
      <Logo />
      <FindMe />
      <Navbar />
    </div>
    </div>
  );
};

export default Header;
