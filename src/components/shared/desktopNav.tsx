import React, { FC, Fragment } from "react";
import { Link } from "gatsby";

interface IProps {
  links: {
    name: string;
    slug: string;
  }[];
}
const DesktopNav: FC<IProps> = ({ links }) => {
  return (
    <Fragment>
      <ul className="navLinksWrapper">
        {links.map((link) => (
          <Link
            key={link.slug}
            activeStyle={{
              color: "#8D99A7",
            }}
            to={link.slug}
          >
            <li>{link.name}</li>
          </Link>
        ))}
      </ul>
    </Fragment>
  );
};

export default DesktopNav;
