import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Col, Row } from "react-styled-flexboxgrid"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import BlogFooter from "../components/BlogFooter"
import BlogHeader from "../components/BlogHeader"
import StyledGrid from "../components/atoms/StyledGrid"
import GlobalCss from "../components/GlobalCss"

const Article = data => {
  React.useEffect(() => {
    document.querySelectorAll("h2").forEach(el => {
      const text = el.textContent
      el.setAttribute("id", text)
    })
    document.querySelectorAll("h3").forEach(el => {
      const text = el.textContent
        .toLowerCase()
        .replace("☆", "")
        .replace("！", "")
        .replace("？", "")
      el.setAttribute("id", text)
    })
    console.log(data)
  }, [])
  return (
    <div>
      <BlogHeader />
      <MainArea
        html={data.pageContext.postData.html}
        toc={data.pageContext.postData.tableOfContents}
        data={data.pageContext.postData.frontmatter}
        imgSrc={
          data.pageContext.postData.frontmatter.coverImage.childImageSharp
            .gatsbyImageData
        }
      />
      <BlogFooter
        categories={data.pageContext.categories.group}
        tags={data.pageContext.tags.group}
      />
      <Footer />
    </div>
  )
}

const MainArea = ({ html, toc, data, imgSrc }) => {
  const image = getImage(imgSrc)
  return (
    <main>
      <GlobalCss />
      <StyledGrid fluid>
        <Row>
          <Col xs={8}>
            <h1>{data.title}</h1>
            <StyledGatsbyImage image={image} alt="test!" />
            <BlogDesign dangerouslySetInnerHTML={{ __html: html }} />
          </Col>
          <Col xs={4}>
            <ToCWrap>
              <ToCHeader>目次</ToCHeader>
              <ToCArea dangerouslySetInnerHTML={{ __html: toc }} />
            </ToCWrap>
          </Col>
        </Row>
      </StyledGrid>
    </main>
  )
}

export const Footer = () => (
  <FooterArea>
    <StyledGrid fluid>
      <Row>
        <Col xs={12}>
          <footer>© {new Date().getFullYear()} ヒロの考え事</footer>
        </Col>
      </Row>
    </StyledGrid>
  </FooterArea>
)

const ToCArea = styled.div`
  padding: 4px 0;
  font-size: 14px;
  ul {
    width: auto;
    height: auto;
    margin-top: 0;
    transition: 0.2s;

    li {
      position: relative;
      line-height: 1.5;
      margin: 0;
      list-style: decimal outside;

      ul {
        li {
          padding-top: 4px;
        }
      }

      p {
        margin: 0;
        padding-top: 8px;
      }
    }
  }
`

const ToCWrap = styled.div`
  border: 1px dotted #d8d8d8;
  padding: 20px;
  margin-top: 20px;
  display: inline-block;
  position: sticky;
  top: 16px;
`

// DOM操作しているのでheader要素を使わない
const ToCHeader = styled.div``

const StyledGatsbyImage = styled(GatsbyImage)`
  height: 400px;
  width: 100%;
`

const FooterArea = styled.div`
  background: #212121;
  padding: 8px 0;
  color: #fff;
  font-size: 14px;
  footer {
    text-align: center;
  }
`

const BlogDesign = styled.main`
  img {
    max-width: 100%;
  }

  table {
    width: 100%;
  }

  table,
  th,
  td {
    padding: 5px;
  }

  html,
  body {
    padding: 1em;
    margin: auto;
    max-width: 42em;
    background: #fefefe;
  }
  body {
    font: 1.3em "Vollkorn", Palatino, Times;
    color: #333;
    line-height: 1.4;
    text-align: justify;
  }
  header,
  nav,
  article,
  footer {
    width: 700px;
    margin: 0 auto;
  }
  article {
    margin-top: 4em;
    margin-bottom: 4em;
    min-height: 400px;
  }
  footer {
    margin-bottom: 50px;
  }
  video {
    margin: 2em 0;
    border: 1px solid #ddd;
  }

  nav {
    font-size: 0.9em;
    font-style: italic;
    border-bottom: 1px solid #ddd;
    padding: 1em 0;
  }
  nav p {
    margin: 0;
  }

  /* Typography
-------------------------------------------------------- */

  h1 {
    margin-top: 0;
    font-weight: normal;
  }
  h2 {
    font-weight: normal;
  }
  h3 {
    font-weight: normal;
    font-style: italic;
    padding-top: 3em;
  }
  p {
    margin-top: 0;
    -webkit-hypens: auto;
    -moz-hypens: auto;
    hyphens: auto;
  }
  ul {
    list-style: square;
    padding-left: 1.2em;
  }
  ol {
    padding-left: 1.2em;
  }
  blockquote {
    margin-left: 1em;
    padding-left: 1em;
    border-left: 1px solid #ddd;
  }
  code {
    font-family: "Consolas", "Menlo", "Monaco", monospace, serif;
    font-size: 0.9em;
    background: white;
  }
  a {
    color: #2484c1;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  a img {
    border: none;
  }
  h1 a,
  h1 a:hover {
    color: #333;
    text-decoration: none;
  }
  hr {
    color: #ddd;
    height: 1px;
    margin: 2em 0;
    border-top: solid 1px #ddd;
    border-bottom: none;
    border-left: 0;
    border-right: 0;
  }
  p#heart {
    font-size: 2em;
    line-height: 1;
    text-align: center;
    color: #ccc;
  }
  .red {
    color: #b50000;
  }

  /* Home Page
--------------------------- */

  body#index li {
    margin-bottom: 1em;
  }

  /* iPad
-------------------------------------------------------- */
  @media only screen and (max-device-width: 1024px) {
    body {
      font-size: 120%;
      line-height: 1.4;
    }
  } /* @iPad */

  /* iPhone
-------------------------------------------------------- */
  @media only screen and (max-device-width: 480px) {
    body {
      text-align: left;
    }
    article,
    footer {
      width: auto;
    }
    article {
      padding: 0 10px;
    }
  } /* @iPhone */
`

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
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
        }
      }
    }
  }
`

export default Article
