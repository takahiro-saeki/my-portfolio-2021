import React from "react"
import styled from "styled-components"
import { Col, Row } from "react-styled-flexboxgrid"
import { Link } from "gatsby"
import Ts from "../images/ts.png"
import Mohupara from "../images/mohupara.png"
import StyledGrid from "../components/atoms/StyledGrid"

const BlogFooter = ({ categories, tags }) => {
  const filterTags = tags.filter(tag => tag.totalCount > 1)
  return (
    <StyledGrid fluid>
      <Row>
        <Col xs={4}>
          <h2>カテゴリー</h2>
          <CategoriesArea>
            {categories.map((item, index) => (
              <li key={index}>
                {item.category}({item.totalCount})
              </li>
            ))}
          </CategoriesArea>
        </Col>
        <Col xs={4}>
          <h2>タグ</h2>
          <TagsArea>
            {filterTags.map((tag, index) => (
              <div key={index}>
                <span>
                  {tag.category}({tag.totalCount})
                </span>
              </div>
            ))}
          </TagsArea>
        </Col>
        <Col xs={4}>
          <div>
            <div>
              <Link to="/">
                <img src={Ts} />
              </Link>
            </div>
            <div>
              <Link to="/mohupara">
                <ImgWrap>
                  <img src={Mohupara} />
                </ImgWrap>
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </StyledGrid>
  )
}

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
  }

  li:first-child {
    border: none;
  }
`

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
    }
  }
`

const ImgWrap = styled.div`
  padding: 32px 0;
`

export default BlogFooter
