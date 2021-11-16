const path = require(`path`)
const format = require("date-fns/format")
const uniqBy = require("lodash/uniqBy")

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

      archives: allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            id
            fileAbsolutePath
            frontmatter {
              title
              tags
              date
              coverImage {
                childImageSharp {
                  gatsbyImageData
                }
              }
              categories
            }
            excerpt(pruneLength: 200)
          }
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

    const parceDates = result.data.archives.edges.map(({ node }) => ({
      date: node.frontmatter.date,
      parcedDate: format(new Date(node.frontmatter.date), "yyyy-MM"),
      node,
    }))

    const eliminatedDates = uniqBy(parceDates, "parcedDate")
    const mapDatesData = eliminatedDates.map(val => {
      const filterDates = parceDates.filter(
        date => date.parcedDate === val.parcedDate
      )
      return {
        date: val.parcedDate,
        count: filterDates.length,
        node: filterDates,
      }
    })

    const archiveTemplate = path.resolve("src/template/archiveTemplate.jsx")

    mapDatesData.forEach(data => {
      createPage({
        path: data.date,
        component: archiveTemplate,
        context: data,
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
