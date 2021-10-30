import React from "react"
import styled, { css } from "styled-components"
import TopImage from "../images/forest.jpg"
import Mohupara from "../images/mohupara.png"
import Blog from "../images/blogtitle.png"
import Ts from "../images/ts.png"
import { Grid, Col, Row } from "react-styled-flexboxgrid"
import { Normalize } from "styled-normalize"
import Timeline from "../components/Timeline"
import Skills from "../components/Skills"
import { BsGithub, BsTwitter } from "react-icons/bs"
import { Footer, FooterInfo } from "../components/Footer"

const ContentsArea = () => (
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
        <button>もふパラの公式サイトはこちら</button>
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
)

const Header = () => (
  <HeaderArea>
    <Grid>
      <Row>
        <Col xs={8}>
          <h1>TAKAHIRO SAEKI</h1>
        </Col>
        <ColExtend xs={4}>
          <IconWrap>
            <IconLink href="https://github.com/takahiro-saeki" target="_blank">
              <BsGithub />
            </IconLink>
            <IconLink
              color="#1DA1F2"
              href="https://twitter.com/hirodeath"
              target="_blank"
            >
              <BsTwitter />
            </IconLink>
          </IconWrap>
        </ColExtend>
      </Row>
    </Grid>
  </HeaderArea>
)

const TopPage = () => (
  <div>
    <Header />
    <Normalize />
    <ImgWrap src={TopImage} />
    <Grid>
      <ContentsArea />
      <Skills />
      <Row>
        <Col xs={12}>
          <HeaderWrap>
            <h2>過去の実績</h2>
          </HeaderWrap>
        </Col>
        <Timeline />
      </Row>
      <FooterInfo></FooterInfo>
    </Grid>
    <Footer />
  </div>
)

const ImgWrap = styled.img`
  width: 100%;
  object-fit: cover;
  height: 700px;
`

const HeaderWrap = styled.div`
  h2 {
    margin: auto;
    text-align: center;
  }
`

const HeaderArea = styled.div`
  height: 60px;
  background: #212121;
  padding: 8px 0;
  color: #fff;

  h1 {
    margin: 0;
  }
`

const Card = styled.div`
  background: #fff;
  padding: 16px;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px,
    rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;

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

const ColExtend = styled(Col)`
  display: flex;
`

const ContentsRow = styled(Row)`
  background: #e0e0e0;
  padding: 16px;
`

const IconLink = styled.a`
  margin: 0 8px;
  color: white;
  &:visited {
    color: white;
  }
  svg {
    height: 30px;
    width: 30px;
    ${({ color }) =>
      color &&
      css`
        color: ${color};
      `}
  }
`

const IconWrap = styled.div`
  display: flex;
  align-items: center;
`

const ContentImgWrap = styled.div`
  height: 150px;
  display: flex;
  align-items: center;
`

const CardDescArea = styled.div`
  padding: 16px 0;
`

export default TopPage
