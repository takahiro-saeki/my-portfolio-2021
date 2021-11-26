import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'react-styled-flexboxgrid';
import { Link, navigate } from 'gatsby';
import Ts from '../images/ts.png';
import Mohupara from '../images/mohupara.png';
import StyledGrid from '../components/atoms/StyledGrid';

const BlogFooter = ({ categories, tags }) => {
  const filterTags = tags.filter((tag) => tag.totalCount > 1);
  return (
    <StyledGrid fluid>
      <Row>
        <Col xs={12} md={4}>
          <h2>カテゴリー</h2>
          <CategoriesArea>
            {categories.map((item, index) => (
              <li
                key={index}
                onClick={() => navigate(`/blog/category/${item.category}`)}
              >
                {item.category}({item.totalCount})
              </li>
            ))}
          </CategoriesArea>
        </Col>
        <Col xs={12} md={4}>
          <h2>タグ</h2>
          <TagsArea>
            {filterTags.map((tag, index) => (
              <Link to={`/blog/tag/${tag.category}`} key={index}>
                <div>
                  <span>
                    {tag.category}({tag.totalCount})
                  </span>
                </div>
              </Link>
            ))}
          </TagsArea>
        </Col>
        <Col xs={12} md={4}>
          <div>
            <div>
              <Link to="/">
                <img src={Ts} alt="TAKAHIRO SAEKIのポートフォリオサイト" />
              </Link>
            </div>
            <div>
              <Link to="/mohupara">
                <ImgWrap>
                  <img src={Mohupara} alt="TAKAHIRO SAEKIのブログサイト" />
                </ImgWrap>
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </StyledGrid>
  );
};

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
);

const FooterArea = styled.div`
  background: #212121;
  padding: 8px 0;
  color: #fff;
  font-size: 14px;
  footer {
    text-align: center;
  }
`;

const CategoriesArea = styled.ul`
  font-size: 14px;
  margin: 0;
  padding: 0;
  li {
    position: relative;
    padding: 16px 0;
    margin-bottom: 15 px;
    border-top: dotted 1px #d8d8d8;
    line-height: 1.5;
    list-style: none;
    cursor: pointer;

    &:hover {
      color: #b92c2c;
    }
  }

  li:first-child {
    border: none;
  }
`;

const TagsArea = styled.div`
  div {
    display: inline-block;
    padding: 8px;
    font-size: 14px;
    margin-bottom: 10px;
    span {
      padding: 8px;
      color: #b92c2c;
      border: 1px solid #b92c2c;
      border-radius: 8px;

      &:hover {
        color: #fff;
        background: #b92c2c;
        transition: 0.3s;
      }
    }
  }
`;

const ImgWrap = styled.div`
  padding: 32px 0;
`;

export default BlogFooter;
