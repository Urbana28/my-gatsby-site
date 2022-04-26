import type { GatsbyConfig } from "gatsby";


const config: GatsbyConfig = {
  siteMetadata: {
    title: `new`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
  //  `gatsby-plugin-netlify-cms`,
   { resolve: "gatsby-remark-relative-images-v2" },
   "gatsby-plugin-sass", "gatsby-plugin-image", 
   "gatsby-plugin-sitemap", 
   {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-mdx",
  // {
  //   // keep as first gatsby-source-filesystem plugin for gatsby image support
  //   resolve: "gatsby-source-filesystem",
  //   options: {
  //     path: `../../../public/assets`,
  //     name: "uploads",
  //   },
  // },
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
      manualInit: true,
      modulePath: `./src/cms/cms.ts`,
    },
  },
  `gatsby-transformer-remark`
  ]
};

export default config;
