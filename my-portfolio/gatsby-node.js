const path = require(`path`)

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const postTemplate = path.resolve(`src/pages/article.jsx`)

  const query = graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            id
            fileAbsolutePath
            html
            frontmatter {
              title
              tags
              date
              coverImage
              categories
            }
            tableOfContents
          }
        }
      }
      allFile {
        edges {
          node {
            name
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }

      tags: allMarkdownRemark {
        group(field: frontmatter___tags) {
          category: fieldValue
          totalCount
        }
      }

      categories: allMarkdownRemark {
        group(field: frontmatter___categories) {
          category: fieldValue
          totalCount
        }
      }
    }
  `)

  return query.then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    const findImagePath = fileName =>
      result.data.allFile.edges.find(({ node }) => fileName.includes(node.name))

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const parseName = node.fileAbsolutePath.split("/").slice(-1)[0]
      const parse = parseName.split("-").slice(3).join("-").replace(".md", "")

      const fileName = node.frontmatter.coverImage
      createPage({
        path: parse,
        component: postTemplate,
        context: {
          postData: {
            ...node,
            imgData: findImagePath(fileName),
          },
          tags: result.data.tags,
          categories: result.data.categories,
        },
      })
    })
  })
}
