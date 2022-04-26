const path = require("path")
const { fmImagesToRelative } = require('gatsby-remark-relative-images-v2');
const { createFilePath } = require(`gatsby-source-filesystem`)
//const { createRemoteFileNode } = require("gatsby-source-filesystem")



exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/BlogPost.tsx`)

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            id
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {} // additional data can be passed via context
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}


// exports.onCreateNode = async ({ 
//   node, 
//   actions: { createNode, createNodeField },
//   createNodeId,
//   getCache 
// }) => {
//   if (
//     node.internal.type === "MarkdownRemark" &&
//     node.frontmatter.image !== null
//   ) {
//     const fileNode = await createRemoteFileNode({
//       url: node.frontmatter.image, // string that points to the URL of the image
//       parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
//       createNode, // helper function in gatsby-node to generate the node
//       createNodeId, // helper function in gatsby-node to generate the node id
//       getCache,
//     })
//     // if the file was created, extend the node with "localFile"
//     if (fileNode) {
//       createNodeField({ node, name: "localFile", value: fileNode.id })
//     }
//   }
// };

// exports.createSchemaCustomization = ({ actions }) => {
//   const { createTypes } = actions

//   createTypes(`
//       type MarkdownRemark implements Node {
//           frontmatter: Frontmatter
//           fields: Fields
//       }
//       type Frontmatter {
//           title: String
//           description: String
//           path: String
//           date: Date @dateformat
//           image: File @fileByRelativePath
//       }
//       type Fields {
//         slug: String
//       }
//   `)
// }

