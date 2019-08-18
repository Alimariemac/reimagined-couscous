module.exports = {
  siteMetadata: {
    title: `Alicia MacCara's portfolio`,
    description: `Designer, programmer, maker.`,
    author: `@alimariemac`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options:{
        spaceId:'5nnt7bf94db7',
        accessToken:'_uSxNLU_SSs5WizY9oc4v5JC0dpl8pDQ0Qy2TlhEhQo',
        downloadLocal:'true'
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-mdx`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
