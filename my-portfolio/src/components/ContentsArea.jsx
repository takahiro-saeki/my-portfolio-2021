import React from "react"
import styled from "styled-components"
import Mohupara from "../images/mohupara.png"
import Blog from "../images/blogtitle.png"
import Ts from "../images/ts.png"
import { Col, Row } from "react-styled-flexboxgrid"
import { Link } from "gatsby"
import StyledGrid from "../components/atoms/StyledGrid"

const ContentsArea = () => (
  <ContentsAreaWrap>
    <StyledGrid fluid>
      <ContentsRow>
        <Col xs={12}>
          <HeaderWrap>
            <h2>コンテンツ一覧</h2>
          </HeaderWrap>
        </Col>
        <Col xs={12} md={4}>
          <Card>
            <h3>ポートフォリオサイト</h3>
            <ContentImgWrap>
              <img src={Ts} />
            </ContentImgWrap>
            <CardDescArea>私、三枝木貴浩のポートフォリオサイト</CardDescArea>
            <button>ポートフォリオはこちら</button>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card>
            <h3>もふもふ☆パラダイス</h3>
            <ContentImgWrap>
              <img src={Mohupara} />
            </ContentImgWrap>
            <CardDescArea>もふもふ☆パラダイスの公式サイトです。</CardDescArea>
            <Link to="/mohupara">
              <button>もふパラの公式サイトはこちら</button>
            </Link>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card>
            <h3>ブログサイト</h3>
            <ContentImgWrap>
              <img src={Blog} />
            </ContentImgWrap>
            <CardDescArea>私、三枝木貴浩のブログサイトです</CardDescArea>
            <button>ヒロの考え事はこちら</button>
          </Card>
        </Col>
      </ContentsRow>
    </StyledGrid>
  </ContentsAreaWrap>
)

const ContentsAreaWrap = styled.div`
  background: #212121;
  padding: 48px 0;
`

const HeaderWrap = styled.div`
  h2 {
    margin: auto;
    text-align: center;
    color: #fff;
    padding-bottom: 16px;
  }
`

const Card = styled.div`
  background: #fff;
  padding: 16px;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px,
    rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;

  border-radius: 8px;
  margin: 4px;
  font-size: 16px;

  img {
    max-height: 150px;
    width: auto;
    margin: 0 auto;
    height: fit-content;
    vertical-align: bottom;
  }

  h3 {
    margin: 0 auto 16px;
    text-align: center;
  }

  button {
    width: 100%;
    border: 1px solid #4dd0e1;
    color: #4dd0e1;
    background: white;
    border-radius: 4px;
    padding: 8px;
    transition: 0.5s;
  }

  button:hover {
    border: 1px solid #4dd0e1;
    background: #4dd0e1;
    color: white;
  }
`

const ContentsRow = styled(Row)`
  padding: 16px;
`

const ContentImgWrap = styled.div`
  height: 150px;
  display: flex;
  align-items: center;
`

const CardDescArea = styled.div`
  padding: 16px 0;
`

export default ContentsArea
