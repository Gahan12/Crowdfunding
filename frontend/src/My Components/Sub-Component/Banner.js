import React from "react";
import Nav from "./Nav";
import img from "./images/banner.jpg";

function Banner({ openMobileMenu, setOpenMobileMenu, openMenu }) {
  return (
    <div className="banner">
      <div className="bg-image">
        <img src={img} alt="" />
      </div>
      <Nav
        openMobileMenu={openMobileMenu}
        setOpenMobileMenu={setOpenMobileMenu}
        openMenu={openMenu}
      />
    </div>
  );
}

export default Banner;