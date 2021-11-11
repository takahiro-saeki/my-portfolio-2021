import React from "react"
import styled from "styled-components"
import { Grid, Col, Row } from "react-styled-flexboxgrid"
import { Link } from "gatsby"
import Ts from "../images/ts.png"
import Mohupara from "../images/mohupara.png"

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
              <Link to="/index2">
                <img src={Ts} />
              </Link>
            </div>
            <div>
              <Link to="/mohupara">
                <img src={Mohupara} />
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
  li {
    position: relative;
    padding: 15px 0 0 20px;
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
    span {
      padding: 8px;
      color: #b92c2c;
      border: 1px solid #b92c2c;
      border-radius: 8px;
    }
  }
`

const StyledGrid = styled(Grid)`
  max-width: 1200px;
`

export default BlogFooter
