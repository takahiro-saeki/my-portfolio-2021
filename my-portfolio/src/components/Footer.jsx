import React from "react"
import styled from "styled-components"
import { Grid, Col, Row } from "react-styled-flexboxgrid"
import Hiro from "../images/hiro.jpeg"
import { Timeline as TwitterTimeline } from "react-twitter-widgets"
import Mohupara from "../images/mohupara.png"
import Blog from "../images/blogtitle.png"
import StyledGrid from "../components/atoms/StyledGrid"

export const Footer = () => (
  <FooterArea>
    <StyledGrid fluid>
      <Row>
        <Col xs={12}>
          <footer>© 2015-{new Date().getFullYear()} Takahiro Saeki</footer>
        </Col>
      </Row>
    </StyledGrid>
  </FooterArea>
)

export const FooterInfo = () => (
  <Row>
    <Col xs={12} md={4}>
      <ExternalLinkArea>
        <h3>外部リンク</h3>
        <ul>
          <li>
            <a href="http://takahiro-saeki.github.io/new-book/template/">
              もふパラ
            </a>
          </li>
          <li>
            <a href="http://takahiro-saeki.github.io/new-book/template/">
              ブログ
            </a>
          </li>
          <li>
            <a href="http://takahiro-saeki.github.io/new-book/template/">
              github
            </a>
          </li>
          <li>
            <a href="http://takahiro-saeki.github.io/new-book/template/">
              medium
            </a>
          </li>
          <li>
            <a href="http://takahiro-saeki.github.io/new-book/template/">div</a>
          </li>
          <li>
            <a href="http://takahiro-saeki.github.io/new-book/template/">
              qiita
            </a>
          </li>
          <li>
            <a href="http://takahiro-saeki.github.io/new-book/template/">
              twitter
            </a>
          </li>
          <li>
            <a href="http://takahiro-saeki.github.io/new-book/template/">
              facebook
            </a>
          </li>
        </ul>
      </ExternalLinkArea>
    </Col>
    <Col xs={12} md={4}>
      <ShortProfileArea>
        <HiroIconArea>
          <img src={Hiro} />
        </HiroIconArea>
        <h3>ヒロ</h3>
        <div>
          三枝木貴浩、フロントエンドエンジニアを本業としている。自分がこれだと確信した事に突っ走る性格。趣味は音楽ゲームと運動、読書。猫が大好きです。
        </div>
        <div>ここにソーシャルアイコン置く</div>
      </ShortProfileArea>
    </Col>
    <Col xs={12} md={4}>
      <TwitterTimeline
        dataSource={{
          sourceType: "profile",
          screenName: "hirodeath",
        }}
        options={{
          height: "650",
        }}
      />
    </Col>
  </Row>
)

const ExternalLinkArea = styled.div`
  h3 {
    margin: 0;
    padding: 16px;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      margin: 0;
      a {
        font-size: 14px;
        margin-bottom: 8px;
      }
    }
  }
`

const HiroIconArea = styled.div`
  padding: 16px;
  text-align: center;
  font-size: 16px;
  img {
    width: 150px;
    border-radius: 50%;
  }
`

const FooterArea = styled.div`
  background: #212121;
  padding: 8px 0;
  color: #fff;
  footer {
    text-align: center;
  }
`
const ShortProfileArea = styled.div``
