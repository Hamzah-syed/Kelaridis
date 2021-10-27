import React, { FC, Fragment } from "react";
import ReactHtmlParser from "react-html-parser";
// Gastby Image
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
// CSS
import "./home.css";
// Interfaces
import { IHomepage } from "../../interfaces/homepage";
// Components
import Button from "../shared/button";

interface IProps {
  data: IHomepage;
}

const Hero: FC<IProps> = ({ data }) => {
  // Get Hero Image
  const image = getImage(
    data.strapiHomePage.hero.image[0].localFile
  ) as IGatsbyImageData;

  return (
    <Fragment>
      <div className="heroWrapper">
        <div className="heroContentWrapper">
          <div className="overlay"></div>
          <div className="heroContent">
            {ReactHtmlParser(data.strapiHomePage.hero.header)}
            <div>
              <Button marginTop="24px" text="Book an appointment" />
            </div>
          </div>
        </div>
        <div className="heroImage">
          <div className="heroSquare1"></div>
          <div className="heroSquare2"></div>
          <GatsbyImage image={image} alt={data.strapiHomePage.title} />
        </div>
      </div>
    </Fragment>
  );
};

export default Hero;
