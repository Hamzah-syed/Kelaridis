import React, { FC, Fragment } from "react";
import { Link } from "gatsby";

interface IProps {
  links: {
    name: string;
    slug: string;
  }[];
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const MobileNav: FC<IProps> = ({ links, isOpen, setIsOpen }) => {
  return (
    <Fragment>
      <div className={`${isOpen ? "mobileNavOpenAnum" : ""} mobileNavWrapper`}>
        <button className="closeBtn" onClick={() => setIsOpen(false)}>
          X
        </button>
        <ul>
          {links.map((link) => (
            <Link
              key={link.slug}
              activeStyle={{
                backgroundColor: "#d3d3d3",
                borderColor: "#d3d3d3",
              }}
              to={link.slug}
            >
              <li>{link.name}</li>
            </Link>
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default MobileNav;
