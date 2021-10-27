import * as React from "react";
import { Link } from "gatsby";
// Components
import Layout from "../components/layout/index";

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};

// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <div>
        <h1 style={{ textAlign: "center", marginTop: "50px" }}>
          404 - Page Not Found
        </h1>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
