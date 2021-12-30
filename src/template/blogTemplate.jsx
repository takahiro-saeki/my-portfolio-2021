import React from 'react';
import styled, { css } from 'styled-components';
import { graphql, navigate } from 'gatsby';
import { Col, Row } from 'react-styled-flexboxgrid';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import BlogFooter, { Footer } from '../components/BlogFooter';
import { format } from 'date-fns';
import { uniqBy } from 'lodash';
import StyledGrid from '../components/atoms/StyledGrid';
import GlobalCss from '../components/GlobalCss';
import { VscCalendar } from 'react-icons/vsc';
import { AiOutlineTag, AiOutlineFolderOpen } from 'react-icons/ai';
import { useMediaQuery } from 'beautiful-react-hooks';
import media from 'styled-media-query';
import Header from '../components/Header';
import Seo from '../components/seo.js';

const parseLink = (path) => {
  if (!path) return null;
  const parseName = path.split('/').slice(-1)[0];
  const parse = parseName.split('-').slice(3).join('-').replace('.md', '');
  return parse;
};

const BlogList = (data) => {
  const isSmall = useMediaQuery('(max-width: 768px)');
  const parseRecentPosts = data.data.recentPosts.edges.map(({ node }) => ({
    ...node.frontmatter,
    fileAbsolutePath: node.fileAbsolutePath,
  }));

  const parceDates = data.data.archives.edges.map(({ node }) => ({
    date: node.frontmatter.date,
    parcedDate: format(new Date(node.frontmatter.date), 'yyyy-MM'),
  }));

  const eliminatedDates = uniqBy(parceDates, 'parcedDate');
  const mapDatesData = eliminatedDates.map((val) => {
    return {
      date: val.parcedDate,
      count: parceDates.filter((date) => date.parcedDate === val.parcedDate)
        .length,
    };
  });

  const title = React.useMemo(() => {
    if (!data.pageContext?.name) return null;
    return (
      <ArchiveHeader>
        {data.pageContext.name}:
        {data.pageContext.name === 'アーカイブ'
          ? format(new Date(data.pageContext.date), 'yyyy年MM月')
          : data.pageContext.fieldValue}
      </ArchiveHeader>
    );
  }, [
    data.pageContext.name,
    data.pageContext?.date,
    data.pageContext.fieldValue,
  ]);

  const image = getImage(
    data.data.blogImage.edges[0].node.childImageSharp.gatsbyImageData
  );

  return (
    <div>
      <Seo
        title="ヒロの考え事"
        description="三枝木貴浩のブログサイトです。"
        image={image.images.fallback.src}
      />

      <GlobalCss />
      <Header title="ヒロの考え事" path="/blog" />
      <ArticleLists
        data={
          data.pageContext?.name
            ? data.pageContext
            : data.data.allMarkdownRemark.edges
        }
        recentPosts={parseRecentPosts}
        archiveData={mapDatesData}
        title={title}
        renderPagination={() =>
          !data.pageContext?.name &&
          isSmall && (
            <PaginatedItems
              pageCount={data.pageContext.numPages}
              currentPage={data.pageContext.currentPage}
            />
          )
        }
        isSmall={isSmall}
      />
      {!data.pageContext?.name && !isSmall && (
        <PaginatedItems
          pageCount={data.pageContext.numPages}
          currentPage={data.pageContext.currentPage}
        />
      )}
      <BlogFooter
        categories={data.data.categories.group}
        tags={data.data.tags.group}
      />
      <Footer />
    </div>
  );
};

const PaginatedItems = ({ pageCount, currentPage }) => {
  const handleClick = (id) => {
    if (id === currentPage) return;
    if (id === 1) {
      navigate(`/blog`);
      return;
    }
    navigate(`/blog/${id}`);
    return;
  };

  return (
    <PaginationWrap>
      <ul>
        {[...Array(pageCount - 1).keys()].map((val, i) => (
          <PaginationListItem
            onClick={() => handleClick(val + 1)}
            isActive={val + 1 === currentPage}
            key={i}
          >
            <span>{val + 1}</span>
          </PaginationListItem>
        ))}
      </ul>
    </PaginationWrap>
  );
};

const RecentPosts = ({ data }) => (
  <RecentPostsArea>
    <RecentPostsTitle>最近の投稿</RecentPostsTitle>
    <RecentPostsUl>
      {data.map((item, i) => {
        const image = getImage(item.coverImage.childImageSharp.gatsbyImageData);
        return (
          <li key={i}>
            <Link to={`/blog/${parseLink(item.fileAbsolutePath)}`}>
              <ImageWrap>
                <GatsbyImage image={image} alt={item.title} />
              </ImageWrap>
            </Link>
            <Link to={`/blog/${parseLink(item.fileAbsolutePath)}`}>
              <h2>{item.title}</h2>
            </Link>
          </li>
        );
      })}
    </RecentPostsUl>
  </RecentPostsArea>
);

const ArticleLists = ({
  data,
  recentPosts,
  archiveData,
  title,
  renderPagination,
  isSmall,
}) => {
  const renderData = React.useMemo(() => {
    if (Array.isArray(data)) {
      return data;
    }
    return data.edges;
  }, [data]);

  return (
    <StyledGrid fluid>
      <Row>
        <StyledCol xs={12} md={8}>
          {title}
          {renderData?.map((data, i) => {
            const image = getImage(
              data.node.frontmatter.coverImage.childImageSharp.gatsbyImageData
            );
            return (
              <ArticleWrap key={i}>
                <ImageArea>
                  <Link to={`/blog/${parseLink(data.node.fileAbsolutePath)}`}>
                    <GatsbyImage
                      image={image}
                      alt={data.node.frontmatter.title}
                    />
                  </Link>
                </ImageArea>
                <ArticleMainArea>
                  <Link to={`/blog/${parseLink(data.node.fileAbsolutePath)}`}>
                    <h2>{data.node.frontmatter.title}</h2>
                  </Link>
                  <ArticleSubField>
                    <ArticleSubFieldItem>
                      <SubFieldSpaceArea>
                        <VscCalendar />
                      </SubFieldSpaceArea>
                      <ArticleDate>{data.node.frontmatter.date}</ArticleDate>
                    </ArticleSubFieldItem>
                    <ArticleSubFieldItem>
                      <SubFieldSpaceArea>
                        <AiOutlineTag />
                      </SubFieldSpaceArea>
                      {data.node.frontmatter.categories.map((category, i) => (
                        <Link to={`/blog/category/${category}`} key={i}>
                          <ArticleCategoryArea key={i}>
                            {category}
                          </ArticleCategoryArea>
                        </Link>
                      ))}
                    </ArticleSubFieldItem>
                    <ArticleSubFieldItem>
                      <SubFieldSpaceArea>
                        <AiOutlineFolderOpen />
                      </SubFieldSpaceArea>
                      {data.node.frontmatter?.tags?.map((tag, i) =>
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
                  </ArticleSubField>
                  {!isSmall && (
                    <ArticleExcerpt>{data.node.excerpt}</ArticleExcerpt>
                  )}
                  <ButtonArea>
                    <Link to={`/blog/${parseLink(data.node.fileAbsolutePath)}`}>
                      <button>続きを読む</button>
                    </Link>
                  </ButtonArea>
                </ArticleMainArea>
              </ArticleWrap>
            );
          })}
          {renderPagination()}
        </StyledCol>
        <Col xs={12} md={4}>
          <RecentPosts data={recentPosts} />
          <ArchiveLists data={archiveData} />
        </Col>
      </Row>
    </StyledGrid>
  );
};

export const TagMapArea = styled.div`
  display: flex;
  align-items: center;
`;

export const SubFieldSpaceArea = styled.div`
  padding-right: 4px;
  display: flex;
`;

const ArchiveLists = ({ data }) => (
  <div>
    <RecentPostsTitle>アーカイブ</RecentPostsTitle>
    <ArchiveListsUl>
      {data.map((date, i) => (
        <Link to={`/blog/${date.date}`} key={i}>
          <li>
            {date.date}({date.count})
          </li>
        </Link>
      ))}
    </ArchiveListsUl>
  </div>
);

const PaginationWrap = styled.div`
  display: flex;
  font-size: 14px;
  transition: 0.5s;
  margin-bottom: 32px;
  ${media.lessThan('medium')`
  margin-bottom: 0;
  `}

  ul {
    list-style: none;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 16px auto;
    background: #ffffff;
    border: 1px solid #e5e5e5;
    padding: 0;
    border-radius: 8px;

    li:first-child {
      border-radius: 8px 0 0 8px;
    }

    li:last-child {
      border-radius: 0 8px 8px 0;
    }
  }
`;

const PaginationListItem = styled.li`
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 0;
  ${({ isActive = false }) =>
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
`;

const ArchiveHeader = styled.h2`
  font-size: 20px;
`;
const ArchiveListsUl = styled.ul`
  li {
    font-size: 14px;
    border-bottom: dotted 1px #d8d8d8;
    padding-bottom: 16px;
    margin-bottom: 16px;
    font-weight: bold;
    color: #000;
    text-decoration: none;
    &:hover {
      color: #b92c2c;
    }
  }
`;

const RecentPostsArea = styled.div``;

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
`;

const RecentPostsTitle = styled.h2`
  margin: 0;
  padding-top: 40px;
  font-size: 20px;
  border-bottom: 3px solid #23adad;
  padding-bottom: 4px;
  margin-bottom: 20px;
`;

const ImageWrap = styled.div`
  width: 90px;
  height: 90px;
  flex-shrink: 0;
  img {
    width: 90px;
    height: 90px;
    &:hover {
      transform: scale(1.3);
      transition: ease-in-out 0.2s;
    }
  }
`;

const ButtonArea = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    color: #b92c2c;
    background: #fff;
    border: 1px solid #b92c2c;
    padding: 8px 16px;
    font-size: 14px;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
      color: #fff;
      background: #b92c2c;
      transition: 0.3s;
    }
  }
`;

const ArticleDate = styled.div`
  font-size: 12px;
`;

const StyledCol = styled(Col)`
  ${media.greaterThan('medium')`
padding: 60px 3.5% 20px 0;
  `}
`;

export const ArticleTagArea = styled.div`
  font-size: 12px;
  color: #000;
  &:hover {
    color: #b92c2c;
  }
`;
export const ArticleCategoryArea = styled.div`
  font-size: 12px;
  color: #000;
  &:hover {
    color: #b92c2c;
  }
`;
const ArticleExcerpt = styled.div`
  font-size: 14px;
`;

const ArticleSubField = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 8px;
  flex-wrap: wrap;
`;

export const ArticleSubFieldItem = styled.div`
  padding-right: 8px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const ImageArea = styled.div`
  width: 35%;
  display: flex;
  align-items: center;

  a {
    width: 100%;
    div {
      width: 100%;
    }
  }
  img {
    object-fit: cover;
    width: 100%;
    height: auto;
    max-height: 170px;
    &:hover {
      transform: scale(1.3);
      transition: ease-in-out 0.2s;
    }
  }
`;

const ArticleMainArea = styled.div`
  width: calc(65% - 20px);
  h2 {
    font-size: 18px;
    margin-bottom: 10px;
    color: #000;

    &:hover {
      color: #b92c2c;
    }
  }
  margin-left: auto;
`;

const ArticleWrap = styled.article`
  display: flex;
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 40px;
  margin: 0 auto 40px auto;
  ${media.lessThan('medium')`
  padding-bottom: 20px;
  margin: 0 auto 20px auto;
  `}
`;

export const pageQuery = graphql`
  query blogListData($skip: Int!, $limit: Int!) {
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

    recentPosts: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 5
    ) {
      edges {
        node {
          fileAbsolutePath
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

    blogImage: allFile(filter: { name: { eq: "blogtitle" } }) {
      edges {
        node {
          id
          name
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export default BlogList;
