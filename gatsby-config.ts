import type { GatsbyConfig } from "gatsby";


const config: GatsbyConfig = {
  siteMetadata: {
    title: `new`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
   { resolve: "gatsby-remark-relative-images-v2" },
   "gatsby-plugin-sass", "gatsby-plugin-image", 
   "gatsby-plugin-sitemap", 
   {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-mdx",
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": `./src/images/`
    }
  }, 
  "gatsby-plugin-sharp", "gatsby-transformer-sharp", 
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": `./src/pages/`
    }
  },  
  {
    resolve: "gatsby-plugin-netlify-cms",
    options: {
      modulePath: `./src/cms/cms.ts`,
    },
  },
  `gatsby-transformer-remark`
  ]
};

export default config;
