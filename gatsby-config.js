module.exports = {
  siteMetadata: {
    title: `Takahiro Saeki`,
    description: `Takahiro Saekiのポートフォリオサイトです。`,
    author: `Takahiro Saeki`,
    portfolioImage: `src/images/cat.png`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/blog`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Takahiro Saeki`,
        short_name: `ts`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        icon: `src/images/cat.png`,
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-autolink-headers`],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `@raae/gatsby-remark-oembed`,
            options: {
              usePrefix: false,
              providers: {
                include: ['Twitter'],
                settings: {
                  Twitter: { maxwidth: 700 },
                  Instagram: { hidecaption: true },
                },
              },
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 700,
            },
          },
        ],
      },
    },
    'gatsby-plugin-styled-components',
  ],
};
