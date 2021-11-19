import React from "react"
import styled, { css } from "styled-components"
import { graphql, navigate } from "gatsby"
import { Grid, Col, Row } from "react-styled-flexboxgrid"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import Ts from "../images/ts.png"
import Mohupara from "../images/mohupara.png"
import BlogFooter from "../components/BlogFooter"
import BlogHeader from "../components/BlogHeader"
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md"
import { getMonth, getYear, format } from "date-fns"
import { groupBy, uniqBy } from "lodash"
import { Footer } from "../pages/article"
import StyledGrid from "../components/atoms/StyledGrid"
import GlobalCss from "../components/GlobalCss"

/***
 * @TODO: 近いうちに必ずblogのtemplateと共通化させる
 */

const parseLink = path => {
  if (!path) return null
  const parseName = path.split("/").slice(-1)[0]
  const parse = parseName.split("-").slice(3).join("-").replace(".md", "")
  return parse
}

const Archive = data => {
  console.log(data)
  const parseRecentPosts = data.data.recentPosts.edges.map(
    ({ node }) => node.frontmatter
  )

  const parceDates = data.data.archives.edges.map(({ node }) => ({
    date: node.frontmatter.date,
    parcedDate: format(new Date(node.frontmatter.date), "yyyy-MM"),
  }))

  const eliminatedDates = uniqBy(parceDates, "parcedDate")
  const mapDatesData = eliminatedDates.map(val => {
    return {
      date: val.parcedDate,
      count: parceDates.filter(date => date.parcedDate === val.parcedDate)
        .length,
    }
  })
  console.log({ eliminatedDates, parceDates, mapDatesData })

  return (
    <div>
      <GlobalCss />
      <BlogHeader />
      <ArticleLists
        data={data.pageContext}
        recentPosts={parseRecentPosts}
        archiveData={mapDatesData}
      />
      <BlogFooter
        categories={data.data.categories.group}
        tags={data.data.tags.group}
      />
      <Footer />
    </div>
  )
}

const RecentPosts = ({ data }) => (
  <RecentPostsArea>
    <RecentPostsTitle>最近の投稿</RecentPostsTitle>
    <RecentPostsUl>
      {data.map(item => {
        const image = getImage(item.coverImage.childImageSharp.gatsbyImageData)
        return (
          <li>
            <ImageWrap>
              <GatsbyImage image={image} alt="test!" />
            </ImageWrap>
            <h2>{item.title}</h2>
          </li>
        )
      })}
    </RecentPostsUl>
  </RecentPostsArea>
)

const ArticleLists = ({ data, recentPosts, archiveData }) => {
  return (
    <StyledGrid fluid>
      <Row>
        <StyledCol xs={8}>
          <ArchiveHeader>
            アーカイブ: {format(new Date(data.date), "yyyy年MM月")}
          </ArchiveHeader>
          {data.node.map(data => {
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
                    <Link to={`/${parseLink(parse)}`}>
                      <button>続きを読む</button>
                    </Link>
                  </ButtonArea>
                </ArticleMainArea>
              </ArticleWrap>
            )
          })}
        </StyledCol>
        <Col xs={4}>
          <RecentPosts data={recentPosts} />
          <ArchiveLists data={archiveData} />
        </Col>
      </Row>
    </StyledGrid>
  )
}

const ArchiveLists = ({ data }) => (
  <div>
    <RecentPostsTitle>アーカイブ</RecentPostsTitle>
    <ArchiveListsUl>
      {data.map(date => (
        <li>
          <a>
            {date.date}({date.count})
          </a>
        </li>
      ))}
    </ArchiveListsUl>
  </div>
)

const ArchiveHeader = styled.h2`
  font-size: 20px;
`

const ArchiveListsUl = styled.ul`
  li {
    font-size: 14px;
    border-bottom: dotted 1px #d8d8d8;
    padding-bottom: 16px;
    margin-bottom: 16px;
    font-weight: bold;
  }
`

const RecentPostsArea = styled.div``

const RecentPostsUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  li {
    display: flex;
    padding-bottom: 8px;
    h2 {
      margin: 0;
      font-size: 14px;
      padding-left: 8px;
    }
  }
`

const RecentPostsTitle = styled.h2`
  margin: 0;
  padding-top: 40px;
  font-size: 20px;
  border-bottom: 3px solid #23adad;
  padding-bottom: 4px;
  margin-bottom: 20px;
`

const ImageWrap = styled.div`
  width: 90px;
  height: 90px;
  flex-shrink: 0;
  img {
    width: 90px;
    height: 90px;
  }
`

const PaginationWrap = styled.div`
  display: flex;
  font-size: 14px;
  transition: 0.5s;
  margin-bottom: 32px;

  ul {
    list-style: none;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 16px auto;
    border-radius: 0.6rem;
    background: #ffffff;
    border: 1px solid #e5e5e5;
  }
`

const PaginationListItem = styled.li`
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 0;
  ${({ isActive }) =>
    isActive &&
    css`
      background: #23adad;
      color: #fff;
    `}

  &:hover {
    color: #23adad;
  }

  span {
    display: flex;
    padding: 8px;
    text-align: center;
    justify-content: center;
    width: 100%;
  }
`

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
  padding: 60px 3.5% 20px 0;
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

export const pageQuery = graphql`
  query archiveList {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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

    recentPosts: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 5
    ) {
      edges {
        node {
          frontmatter {
            title
            coverImage {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }

    archives: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            date
          }
        }
      }
    }
  }
`

export default Archive
