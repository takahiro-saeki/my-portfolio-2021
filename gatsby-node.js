const path = require(`path`);
const { format } = require("date-fns/format");
const uniqBy = require("lodash/uniqBy");

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const query = graphql(`
    {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: ASC }) {
        edges {
          next {
            fileAbsolutePath
            frontmatter {
              title
              date
              coverImage {
                absolutePath
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
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
            excerpt(pruneLength: 200)
            tableOfContents
          }
          previous {
            fileAbsolutePath
            frontmatter {
              title
              date
              coverImage {
                absolutePath
                childImageSharp {
                  gatsbyImageData
                }
              }
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
      tagList: allMarkdownRemark {
        group(field: frontmatter___tags) {
          totalCount
          fieldValue
          edges {
            node {
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
      categoryList: allMarkdownRemark {
        group(field: frontmatter___categories) {
          totalCount
          fieldValue
          edges {
            node {
              fileAbsolutePath
              frontmatter {
                categories
                date
                tags
                title
                coverImage {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
              excerpt(pruneLength: 200)
            }
          }
        }
      }
    }
  `);

  return query.then((result) => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    // ページネーション
    const posts = result.data.allMarkdownRemark.edges;
    const postsPerPage = 10;
    const numPages = Math.ceil(posts.length / postsPerPage);

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/blog` : `/blog/${i + 1}`,
        component: path.resolve("src/template/blogTemplate.jsx"),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
        },
      });
    });

    // アーカイブページ生成
    const parceDates = result.data.archives.edges.map(({ node }) => ({
      date: node.frontmatter.date,
      parcedDate: format(new Date(node.frontmatter.date), "yyyy-MM"),
      node,
    }));

    const eliminatedDates = uniqBy(parceDates, "parcedDate");
    const mapDatesData = eliminatedDates.map((val) => {
      const filterDates = parceDates.filter(
        (date) => date.parcedDate === val.parcedDate
      );
      return {
        date: val.parcedDate,
        count: filterDates.length,
        edges: filterDates,
      };
    });

    const archiveTemplate = path.resolve("src/template/blogTemplate.jsx");

    mapDatesData.forEach((data) => {
      createPage({
        path: `/blog/${data.date}`,
        component: archiveTemplate,
        context: { ...data, name: "アーカイブ", limit: 9999, skip: 0 },
      });
    });

    // タグページの作成
    const tagListTemplate = path.resolve("src/template/blogTemplate.jsx");
    result.data.tagList.group.forEach((item) => {
      createPage({
        path: `/blog/tag/${item.fieldValue}`,
        component: tagListTemplate,
        context: { ...item, name: "タグ名", limit: 9999, skip: 0 },
      });
    });

    // カテゴリーページの生成
    const categoryListTemplate = path.resolve("src/template/blogTemplate.jsx");
    result.data.categoryList.group.forEach((item) => {
      createPage({
        path: `/blog/category/${item.fieldValue}`,
        component: categoryListTemplate,
        context: { ...item, name: "カテゴリー名", limit: 9999, skip: 0 },
      });
    });

    // 記事ページ生成
    const postTemplate = path.resolve(`src/template/articleTemplate.jsx`);
    result.data.allMarkdownRemark.edges.forEach(({ node, next, previous }) => {
      const parseName = node.fileAbsolutePath.split("/").slice(-1)[0];
      const parse = parseName.split("-").slice(3).join("-").replace(".md", "");

      createPage({
        path: `/blog/${parse}`,
        component: postTemplate,
        context: {
          postData: {
            ...node,
          },
          tags: result.data.tags,
          categories: result.data.categories,
          next,
          previous,
        },
      });
    });
  });
};
