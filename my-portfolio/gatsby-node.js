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
              coverImage {
                absolutePath
                childImageSharp {
                  gatsbyImageData
                }
              }
              categories
            }
            tableOfContents
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

    const posts = result.data.allMarkdownRemark.edges
    const postsPerPage = 10
    const numPages = Math.ceil(posts.length / postsPerPage)

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/blog` : `/blog/${i + 1}`,
        component: path.resolve("src/template/blog.jsx"),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
        },
      })
    })

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const parseName = node.fileAbsolutePath.split("/").slice(-1)[0]
      const parse = parseName.split("-").slice(3).join("-").replace(".md", "")

      createPage({
        path: parse,
        component: postTemplate,
        context: {
          postData: {
            ...node,
          },
          tags: result.data.tags,
          categories: result.data.categories,
        },
      })
    })
  })
}
