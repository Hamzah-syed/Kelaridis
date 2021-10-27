import React, { Fragment } from "react";
import { graphql, useStaticQuery } from "gatsby";
// Components
import Layout from "../components/layout/index";
import Hero from "../components/sections/hero";
import NumbersSec from "../components/sections/numbersSec";
import SEO from "../components/shared/seo";
// Interfaces
import { IHomepage } from "../interfaces/homepage";

const query = graphql`
  query homepage {
    strapiHomePage {
      title
      numbersSection {
        number
        description
      }
      hero {
        slug
        header
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`;

// markup
const IndexPage = () => {
  const homepageData: IHomepage = useStaticQuery(query);

  return (
    <Fragment>
      <Layout>
        <SEO title={homepageData.strapiHomePage.title} />
        <div>
          <Hero data={homepageData} />
          <NumbersSec data={homepageData.strapiHomePage.numbersSection} />
        </div>
      </Layout>
    </Fragment>
  );
};

export default IndexPage;
