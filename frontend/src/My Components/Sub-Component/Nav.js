import React from "react";
import { useState } from "react";
import WindowResize from "./WindowResize";
import MobileMenu from "./MobileMenu";

function Nav({ openMobileMenu, setOpenMobileMenu, openMenu }) {
  const windowResize = WindowResize();
  const windowSize = windowResize.props.children;

  return (
    <nav>
      <div className="nav-container">
        <img src="/images/logo.svg" alt="" className="logo" />
        <div className="hamburger--navlinks">
          {windowSize < 600 && (
            <img
              src="/images/icon-hamburger.svg"
              alt=""
              className="hamburger"
              onClick={openMenu}
            />
          )}
          {windowSize > 600 && (
            <div className="desktop-links">
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Discover</a>
              </li>
              <li>
                <a href="/">Get started</a>
              </li>
            </div>
          )}
        </div>
      </div>
      <div>{openMobileMenu && <MobileMenu />}</div>
    </nav>
  );
}

export default Nav;