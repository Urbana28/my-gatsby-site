import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `new`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-netlify-cms", "gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", 
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    }
  }, 
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    }
  }, 
  // {
  //   resolve: 'gatsby-source-filesystem',
  //   options: {
  //     "name": 'markdown-pages',
  //     "path": `${__dirname}/blog`
  //   },
  // }, 
  // {
  //   resolve: "gatsby-plugin-netlify-cms",
  //   options: {
  //     modulePath: `./src/cms/cms.js`,
  //   },
  // },
  `gatsby-transformer-remark`
  ]
};

export default config;
