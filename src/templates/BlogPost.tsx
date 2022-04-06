import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage, IGatsbyImageData, StaticImage } from "gatsby-plugin-image";


type BlogPostTemplateProps = {
  data: any
}

const BlogPostTemplate: React.FC<BlogPostTemplateProps>  = ({
  data // this prop will be injected by the GraphQL query we'll write in a bit
}) => {
  const { markdownRemark: post } = data // data.markdownRemark holds your post data

  const image = getImage(post.frontmatter.image);
  console.log('POST_IMAGE', image)
  const car_def = "https://images.unsplash.com/photo-1523828446771-151afb8374f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80";
  
  const imageStyle = { borderRadius: "5px" };

  // const imagePreview = () => {
  //   if(!!image && !!image.childImageSharp) {
  //       <GatsbyImage
  //         image={image.childImageSharp.gatsbyImageData}
  //         style={imageStyle}
  //         alt={alt}
  //       />
  //   } else if(!!childImageSharp) {
  //       <GatsbyImage
  //         image={childImageSharp.gatsbyImageData}
  //         style={imageStyle}
  //         alt={alt}
  //       />
  //       // for Netlify CMS 
  //   } else if (image) {
  //     return <img style={imageStyle} src={image} alt={alt} />;
  //   } else {
  //     return null
  //   }
  // };
  
  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <h1>{post.frontmatter.title}</h1>
        {/* {imagePreview()} */}
        {/* <GatsbyImage image={image || image_data} alt="Car" /> */}
        <StaticImage src={post.frontmatter.image} alt={""} />
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </div>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        image
      }
    }
  }
`
