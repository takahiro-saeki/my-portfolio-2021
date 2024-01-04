import React from 'react';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';
import { Col, Row } from 'react-styled-flexboxgrid';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import BlogFooter, { Footer } from '../components/BlogFooter';
import StyledGrid from '../components/atoms/StyledGrid';
import GlobalCss from '../components/GlobalCss';
import useMediaQuery from 'beautiful-react-hooks/useMediaQuery';
import media from 'styled-media-query';
import { VscCalendar } from 'react-icons/vsc';
import Header from '../components/Header';
import Seo from '../components/seo.js';
import { AiOutlineTag, AiOutlineFolderOpen } from 'react-icons/ai';
import {
  ArticleCategoryArea,
  ArticleSubFieldItem,
  ArticleTagArea,
  SubFieldSpaceArea,
  TagMapArea,
} from '../components/blog';

const parseLink = (path) => {
  if (!path) return null;
  const parseName = path.split('/').slice(-1)[0];
  const parse = parseName.split('-').slice(3).join('-').replace('.md', '');
  return parse;
};

const Article = (data) => {
  React.useEffect(() => {
    document.querySelectorAll('h2').forEach((el) => {
      const text = el.textContent;
      el.setAttribute('id', text);
    });
    document.querySelectorAll('h3').forEach((el) => {
      const text = el.textContent
        .toLowerCase()
        .replace('☆', '')
        .replace('！', '')
        .replace('？', '');
      el.setAttribute('id', text);
    });
  }, []);
  const isSmall = useMediaQuery('(max-width: 768px)');
  const nextAndPrevData = React.useMemo(() => {
    const prev = data.pageContext.previous;
    const next = data.pageContext.next;
    return {
      next,
      prev,
    };
  }, [data.pageContext]);
  const image = getImage(
    data.pageContext.postData.frontmatter.coverImage.childImageSharp
      .gatsbyImageData
  );
  return (
    <div>
      <Seo
        image={image.images.fallback.src}
        description={data.pageContext.postData.excerpt}
        title={data.pageContext.postData.frontmatter.title}
      />
      <Header title="ヒロの考え事" path="/blog" />
      <MainArea
        html={data.pageContext.postData.html}
        toc={data.pageContext.postData.tableOfContents}
        data={data.pageContext.postData.frontmatter}
        imgSrc={
          data.pageContext.postData.frontmatter.coverImage.childImageSharp
            .gatsbyImageData
        }
        nextAndPrevData={nextAndPrevData}
        isSmall={isSmall}
        excerpt={data.pageContext.postData.excerpt}
      />
      <BlogFooter
        categories={data.pageContext.categories.group}
        tags={data.pageContext.tags.group}
      />
      <Footer />
    </div>
  );
};

const MainArea = ({ html, toc, data, imgSrc, nextAndPrevData, isSmall }) => {
  const image = getImage(imgSrc);
  const { next, prev } = nextAndPrevData;
  const nextImage =
    next &&
    getImage(next.frontmatter.coverImage.childImageSharp.gatsbyImageData);
  const prevImage =
    prev &&
    getImage(prev.frontmatter.coverImage.childImageSharp.gatsbyImageData);

  const category = data?.categories[0] || '';
  const tags = data.tags;

  return (
    <main>
      <GlobalCss />
      <StyledGrid fluid>
        <Row>
          <StyledCol xs={12} md={8}>
            <h1>{data.title}</h1>
            <DateArea>
              <VscCalendar />
              <DateSpan>{data.date}</DateSpan>
              <ArticleSubFieldItem>
                <SubFieldSpaceArea>
                  <AiOutlineTag />
                </SubFieldSpaceArea>
                <Link to={`/blog/category/${category}`}>
                  <ArticleCategoryArea>{category}</ArticleCategoryArea>
                </Link>
              </ArticleSubFieldItem>
              <ArticleSubFieldItem>
                <SubFieldSpaceArea>
                  <AiOutlineFolderOpen />
                </SubFieldSpaceArea>
                {tags?.map((tag, i) =>
                  i > 0 ? (
                    <TagMapArea key={i}>
                      <SubFieldSpaceArea>{','}</SubFieldSpaceArea>
                      <Link to={`/blog/tag/${tag}`}>
                        <ArticleTagArea>{tag}</ArticleTagArea>
                      </Link>
                    </TagMapArea>
                  ) : (
                    <Link to={`/blog/tag/${tag}`} key={i}>
                      <ArticleTagArea>{tag}</ArticleTagArea>
                    </Link>
                  )
                )}
              </ArticleSubFieldItem>
            </DateArea>
            <StyledGatsbyImage image={image} alt={data.title} />
            <BlogDesign dangerouslySetInnerHTML={{ __html: html }} />
            <NextAndPrevArea>
              {prev ? (
                <li>
                  <NextAndPrevPop>前の記事</NextAndPrevPop>
                  <NextAndPrevContentArea>
                    <NextAndPrevImageArea>
                      <Link to={`/blog/${parseLink(prev.fileAbsolutePath)}`}>
                        <GatsbyImage
                          image={prevImage}
                          alt={prev.frontmatter.title}
                        />
                      </Link>
                    </NextAndPrevImageArea>
                    <NextAndPrevDesc>
                      <Link to={`/blog/${parseLink(prev.fileAbsolutePath)}`}>
                        <h2>{prev.frontmatter.title}</h2>
                      </Link>
                      <div>{prev.frontmatter.date}</div>
                    </NextAndPrevDesc>
                  </NextAndPrevContentArea>
                </li>
              ) : (
                <li>
                  <NextAndPrevPop>前の記事</NextAndPrevPop>
                  <NoContentArea>記事がありません</NoContentArea>
                </li>
              )}
              {next ? (
                <li>
                  <NextTitleItem>
                    <NextAndPrevPop>次の記事</NextAndPrevPop>
                  </NextTitleItem>
                  <NextAndPrevContentArea>
                    <NextAndPrevImageArea>
                      <Link to={`/blog/${parseLink(next.fileAbsolutePath)}`}>
                        <GatsbyImage
                          image={nextImage}
                          alt={next.frontmatter.title}
                        />
                      </Link>
                    </NextAndPrevImageArea>
                    <NextAndPrevDesc>
                      <Link to={`/blog/${parseLink(next.fileAbsolutePath)}`}>
                        <h2>{next.frontmatter.title}</h2>
                      </Link>
                      <div>{next.frontmatter.date}</div>
                    </NextAndPrevDesc>
                  </NextAndPrevContentArea>
                </li>
              ) : (
                <li>
                  <NextTitleItem>
                    <NextAndPrevPop>次の記事</NextAndPrevPop>
                  </NextTitleItem>
                  <NoContentArea>記事がありません</NoContentArea>
                </li>
              )}
            </NextAndPrevArea>
          </StyledCol>
          {!isSmall && (
            <Col xs={12} md={4}>
              <ToCWrap>
                <ToCHeader>目次</ToCHeader>
                <ToCArea dangerouslySetInnerHTML={{ __html: toc }} />
              </ToCWrap>
            </Col>
          )}
        </Row>
      </StyledGrid>
    </main>
  );
};

const DateSpan = styled.span`
  padding-right: 6px;
`;

const DateArea = styled.div`
  display: flex;
  font-size: 14px;
  padding-bottom: 8px;
  align-items: center;

  span {
    padding-left: 4px;
  }
`;

const StyledCol = styled(Col)`
  ${media.lessThan('medium')`
    padding: 0;
  `}
`;

const NextTitleItem = styled.div`
  ${media.lessThan('medium')`
    text-align: right;
  `}
`;

const NextAndPrevArea = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  padding: 16px 0 0;
  border-top: 1 px solid #ccc;
  ${media.lessThan('medium')`
    flex-direction: column;
  `}
  li {
    width: 50%;
    ${media.lessThan('medium')`
    width: 100%;
    padding-bottom: 16px;

    &:first-child {
      border-bottom: 1px dotted #ccc;
      margin-bottom: 16px;
    }
  `}
  }
`;

const NextAndPrevImageArea = styled.div`
  padding-right: 16px;
  width: 100px;
  height: 100px;
  flex-shrink: 0;
  img {
    width: 100px;
    height: 100px;
  }
`;

const NextAndPrevContentArea = styled.div`
  display: flex;
`;

const NextAndPrevPop = styled.div`
  background: #b92c2c;
  color: #fff;
  display: inline-block;
  padding: 8px;
  margin-bottom: 16px;
  font-size: 12px;
  border-radius: 8px;
`;

const NextAndPrevDesc = styled.div`
  h2 {
    font-size: 16px;
  }
  div {
    font-size: 12px;
  }
`;

const NoContentArea = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #bfbfbf;
`;

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
`;

const ToCWrap = styled.div`
  border: 1px dotted #d8d8d8;
  padding: 20px;
  margin-top: 20px;
  display: inline-block;
  position: sticky;
  top: 16px;
`;

// DOM操作しているのでheader要素を使わない
const ToCHeader = styled.div``;

const StyledGatsbyImage = styled(GatsbyImage)`
  height: 400px;
  width: 100%;
  margin-bottom: 16px;
`;

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
    font: 1.3em 'Vollkorn', Palatino, Times;
    color: #333;
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
    position: relative;
    padding-bottom: 10px;
    font-size: 24px;
    margin: 40px 0;
  }

  h2::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background-image: repeating-linear-gradient(
      90deg,
      #23adad 0,
      #23adad 8px,
      rgba(0, 0, 0, 0) 8px,
      rgba(0, 0, 0, 0) 11px
    );
  }
  h3 {
    font-weight: bold;
    font-size: 20px;
    border-left: solid 4px #23adad;
    padding-left: 8px;
    margin: 28px 0;
  }

  p {
    margin-top: 0;
    -webkit-hypens: auto;
    -moz-hypens: auto;
    hyphens: auto;
    line-height: 1.8;
  }
  ul,
  ol {
    padding: 0;
  }

  ul li {
    position: relative;
    list-style-type: none !important; /*ポチ消す*/
    padding: 0.5em 0.5em 0.5em 0.5em;
    margin-bottom: 5px;
    line-height: 1.5;
    background: #dbebf8;
    vertical-align: middle;
    color: #505050;
    border-radius: 15px 0px 0px 15px; /*左側の角丸く*/
  }

  ul li:before {
    display: inline-block;
    vertical-align: middle;
    /*以下白丸つくる*/
    content: '';
    width: 1em;
    height: 1em;
    background: #fff;
    border-radius: 50%;
    margin-right: 8px;
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
    font-family: 'Consolas', 'Menlo', 'Monaco', monospace, serif;
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
`;

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
`;

export default Article;
