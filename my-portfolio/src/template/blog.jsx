import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { Grid, Col, Row } from "react-styled-flexboxgrid"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import Ts from "../images/ts.png"
import Mohupara from "../images/mohupara.png"
import BlogFooter from "../components/BlogFooter"
import BlogHeader from "../components/BlogHeader"

const Blog = ({ data }) => {
  console.log(data.allMarkdownRemark.edges)
  return (
    <div>
      <BlogHeader />
      <ArticleLists data={data.allMarkdownRemark.edges} />
      <BlogFooter categories={data.categories.group} tags={data.tags.group} />
    </div>
  )
}

const ArticleLists = ({ data }) => {
  return (
    <StyledGrid fluid>
      <Row>
        <StyledCol xs={8}>
          {data.map(data => {
            const image = getImage(
              data.node.frontmatter.coverImage.childImageSharp.gatsbyImageData
            )
            const parseName = data.node.fileAbsolutePath.split("/").slice(-1)[0]
            const parse = parseName
              .split("-")
              .slice(3)
              .join("-")
              .replace(".md", "")
            return (
              <ArticleWrap>
                <ImageArea>
                  <GatsbyImage image={image} alt="test!" />
                </ImageArea>
                <ArticleMainArea>
                  <h2>{data.node.frontmatter.title}</h2>
                  <ArticleSubField>
                    <ArticleDate>{data.node.frontmatter.date}</ArticleDate>
                    {data.node.frontmatter.categories.map(category => (
                      <ArticleCategoryArea>{category}</ArticleCategoryArea>
                    ))}
                    {data.node.frontmatter?.tags?.map(category => (
                      <ArticleTagArea>{category}</ArticleTagArea>
                    ))}
                  </ArticleSubField>
                  <ArticleExcerpt>{data.node.excerpt}</ArticleExcerpt>
                  <ButtonArea>
                    <Link to={`/${parse}`}>
                      <button>続きを読む</button>
                    </Link>
                  </ButtonArea>
                </ArticleMainArea>
              </ArticleWrap>
            )
          })}
        </StyledCol>
        <Col xs={4}>sidebar</Col>
      </Row>
    </StyledGrid>
  )
}

const ButtonArea = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    color: #b92c2c;
    background: #fff;
    border: 1px solid #b92c2c;
    padding: 4px 16px;
    font-size: 14px;
    border-radius: 6px;
  }
`

const ArticleDate = styled.div`
  font-size: 12px;
`

const StyledCol = styled(Col)`
  padding: 60px 3.5% 60px 0;
`

const ArticleTagArea = styled.div`
  font-size: 12px;
`
const ArticleCategoryArea = styled.div`
  font-size: 12px;
`
const ArticleExcerpt = styled.div`
  font-size: 14px;
`

const ArticleSubField = styled.div`
  display: flex;
`

const ImageArea = styled.div`
  width: 35%;
  display: flex;
  align-items: center;
`

const ArticleMainArea = styled.div`
  width: calc(65% - 20px);
  h2 {
    font-size: 18px;
    margin-bottom: 10px;
  }
  margin-left: auto;
`

const ArticleWrap = styled.article`
  display: flex;
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 40px;
  margin: 0 auto 40px auto;
`

const StyledGrid = styled(Grid)`
  max-width: 1200px;
`
export const pageQuery = graphql`
  query blogList($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
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
`

export default Blog
