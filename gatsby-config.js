module.exports = {
  siteMetadata: {
    title: `Kelaridis`,
    description: `Kelaridis`,
    author: { name: `hamzah`, email: "hamzah.syed17@gmail.com" },
    siteUrl: `https://example.com`,
  },
  plugins: [
    // Gatsby Image Plugins
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    // React Helmet for seo
    `gatsby-plugin-react-helmet`,
    // Prefetch google fonts
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "DM Sans",
            },
          ],
        },
      },
    },
    // Gatsby Strapi
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Defaults to 100
        collectionTypes: [`heros`],
        singleTypes: [`home-page`],
      },
    },
    // Gatsby Typescript
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
  ],
};
