import { graphql, Link } from 'gatsby'
import React from 'react'
import { BlogRoll } from '../../components/BlogRoll'

type BlogIndexPageProps = {
    data: any
}

const BlogIndexPage: React.FC<BlogIndexPageProps> = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark
  
  return (
    <React.Fragment>
      <h1>Latest Posts</h1>
        <section>
          <div className="content">
            {posts.map((post: any) => <div className="blog-post-preview" key={post.id}>
              <h1>
                <Link to={post.node.frontmatter.path}>{post.node.frontmatter.title}</Link>
              </h1>
              <h2>{post.node.frontmatter.date}</h2>
              <p>{post.excerpt}</p>
            </div>)}
          </div>
        </section>
      </React.Fragment>
    )
}

export default BlogIndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`