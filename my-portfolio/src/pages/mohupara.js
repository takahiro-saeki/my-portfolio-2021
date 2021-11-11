import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Grid, Col, Row } from "react-styled-flexboxgrid"
import Layout from "../components/layout"
import Seo from "../components/seo"
import m1 from "../images/image1.png"
import m2 from "../images/image2.png"
import m3 from "../images/mohupara-3.jpg"
import m4 from "../images/mohupara-4.jpg"
import m5 from "../images/mohupara-5.png"
import m6 from "../images/mohupara-6.png"
import mohupara from "../images/mohupara.png"
import { Normalize } from "styled-normalize"
import media from "styled-media-query"

const data = [
  {
    title: "これから始める ♡React.js 実践マニュアル",
    desc: "React.jsのコンポーネントの構成の仕方について、hooks APIを使用した構成方法から基本的な構成方法まで網羅的に紹介しています。これからReact.jsを始める方から既に業務で使用されている方まで、幅広い層の方に向けた1冊になっています。",
    circleName: "もふもふ☆パラダイス",
    place: "コミックマーケット95 2日目(日) 東ト38b",
    date: "2018年12月30日(日)",
    price: 500,
    color: "#f9fbe7",
    image: m6,
  },
  {
    title: "アタシだけを見て♡Micro Frontends 実践マニュアル",
    desc: "どういう環境でweb componentsを使用すると効果があるのか、またweb componentsがどう将来を変革して行くのかという内容に加え、Micro Frontendsが解決する問題について詳細に説明しています。",
    circleName: "もふもふ☆パラダイス",
    place: "コミックマーケット94 1日目(金) 西め34a",
    date: "2018年8月10日(金)",
    price: 500,
    color: "#fff3e0",
    image: m5,
  },
  {
    title: "さぁ、一緒に行こう♡ Web Components 実践マニュアル",
    desc: "Web componentsの基本的な概要やcustom-elementsの基本的なAPIの説明を主軸に、後半では応用的な使い方を説明しています。",
    circleName: "もふもふ☆パラダイス",
    place: "コミティア122 有明・東京ビッグサイト A20b",
    date: "2017年11月23日(木)",
    price: 500,
    color: "#f3e5f5",
    image: m4,
  },
  {
    title: "アタシが教えてア・ゲ・ル♥ node.js実践マニュアル",
    desc: "Node.jsのインストールの仕方、基本的な使い方の説明や、expressを使用したサーバーサイドの開発までを説明しています。こちらの書籍はNode.jsに馴染みの無い方や初学者向けの内容となっております。",
    circleName: "もふもふ☆パラダイス",
    place: "COMITIA116 有明・東京ビッグサイト東４・５・６ホール T21a",
    date: "2016年5月5日(木)",
    price: 500,
    color: "#fbe9e7",
    image: m3,
  },
  {
    title: "キミと一緒に学びたいECMAScript2015",
    desc: "ECMAScript2015とは何かということから、著者が厳選した構文の説明、また実際にサンプルコードを通して実践的な使い方を説明した一冊になります。本書は2部構成になっており、基本編では構文の説明、応用編では実際にサンプルコードを例にどのように使用していくのかということを記載させて頂きました。",
    circleName: "もふもふ☆パラダイス",
    place: "サンシャインクリエイション2016 Winter",
    date: "2016年2月28日(日)",
    price: 500,
    color: "#e3f2fd",
    image: m1,
  },
  {
    title: "アナタに捧げるフロントエンド実践マニュアル",
    desc: "PostCSSとは何かということや導入の仕方、次世代CSSの構文の説明を中心に執筆させて頂きました。 この書籍を通じて少しでもPostCSSに興味を持って頂けたら幸いです。",
    circleName: "もふもふ☆パラダイス",
    place: "コミックマーケットC89 東エ-35b",
    date: "2015年12月31日(木)",
    price: 500,
    color: "#fce4ec",
    image: m2,
  },
]

const MohuparaPage = () => (
  <MohuparaWrap>
    <Normalize />
    <HeaderArea>
      <Grid fluid>
        <Row>
          <Col xs={12}>
            <div>
              <img src={mohupara} />
            </div>
          </Col>
        </Row>
      </Grid>
    </HeaderArea>
    <main>
      {data.map(item => (
        <SectionArea bgColor={item.color}>
          <Grid fluid>
            <Row>
              <Col xs={6}>
                <BookImageArea>
                  <img src={item.image} />
                </BookImageArea>
              </Col>
              <Col xs={6}>
                <BookTitle>{item.title}</BookTitle>
                <BookInfoWrap>
                  <li>
                    <div>概要</div>
                    <div>{item.desc}</div>
                  </li>
                  <li>
                    <div>サークル名</div>
                    <div>{item.circleName}</div>
                  </li>
                  <li>
                    <div>配布場所</div>
                    <div>{item.place}</div>
                  </li>
                  <li>
                    <div>配布日程</div>
                    <div>{item.date}</div>
                  </li>
                  <li>
                    <div>価格</div>
                    <div>{item.price}円</div>
                  </li>
                </BookInfoWrap>
              </Col>
            </Row>
          </Grid>
        </SectionArea>
      ))}
    </main>
    <FooterArea>
      <Grid fluid>
        <Row>
          <FooterCol xs={8}>
            <h3>もふもふ☆パラダイスとは</h3>
            <div>
              もふもふ☆パラダイスはフロントエンドの技術を中心に同人活動を行うサークルです。
            </div>
          </FooterCol>
        </Row>
      </Grid>
    </FooterArea>
    <Copyright>©{new Date().getFullYear()} もふもふ☆パラダイス</Copyright>
  </MohuparaWrap>
)

const MohuparaWrap = styled.div`
  color: #616161;
`

const FooterCol = styled(Col)`
  margin: 0 auto;
  h3 {
    border-left: 3px solid #fff;
    padding: 0 0 0 16px;
  }
  div {
    font-size: 14px;
    width: 50%;
    ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    width: 100%;
  `}
  }
`

const BookTitle = styled.h2`
  margin: 0;
  padding-bottom: 16px;
`

const BookInfoWrap = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  li {
    display: flex;
    font-size: 14px;

    div:first-child {
      flex-basis: 20%;
    }
    div:last-child {
      flex-basis: 80%;
    }
  }
`

const SectionArea = styled.section`
  background: ${({ bgColor }) => bgColor};
  padding: 64px 0;
`

const HeaderArea = styled.header`
  padding: 8px;
  img {
    height: 40px;
    width: fit-content;
    margin-bottom: 0;
  }
  border-bottom: 1px solid #ccc;
`

const BookImageArea = styled.div`
  padding: 0 24px;
  text-align: center;
  img {
    max-width: 400px;
    width: 100%;
    height: auto;
    vertical-align: bottom;
    margin-bottom: 0;
    box-shadow: 0 1px 6px rgb(0 0 0 / 35%);
  }
`

const FooterArea = styled.footer`
  color: #fff;
  background: #ec407a;
  padding: 48px 0;
}
`

const Copyright = styled.div`
  background: #222;
  text-align: center;
  color: #fff;
  font-size: 14px;
  padding: 8px;
`

export default MohuparaPage
