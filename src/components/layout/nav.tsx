import React, { Fragment, useState } from "react";
import { StaticImage } from "gatsby-plugin-image";

// Components
import DesktopNav from "../shared/desktopNav";
import HumburgerBtn from "../shared/humburgerBtn";
import MobileNav from "../shared/mobileNav";
// CSS
import "./layout.css";

const Links = [
  {
    name: "Home",
    slug: "/",
  },
  {
    name: "About me",
    slug: "/about",
  },
  {
    name: "Freebies",
    slug: "/freebies",
  },
  {
    name: "Blog",
    slug: "/blog",
  },
  {
    name: "Contact",
    slug: "/contact",
  },
];
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Fragment>
      <div className={`wrapper navWrapper`}>
        {/* Logo */}
        <div>
          <StaticImage
            src="../../assets/images/logo.png"
            placeholder="blurred"
            alt="Kelaridis"
          />
        </div>
        {/* Nav Links */}
        <div>
          <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} links={Links} />
          <DesktopNav links={Links} />
          <HumburgerBtn setIsOpen={setIsOpen} />
          {/* <button onClick={() => setIsOpen(true)}>Click me </button> */}
        </div>
      </div>
    </Fragment>
  );
};

export default Nav;
