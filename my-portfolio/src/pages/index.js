import React from "react"
import styled from "styled-components"
import TopImage from "../images/forest.jpg"
import { Col, Row } from "react-styled-flexboxgrid"
import { Normalize } from "styled-normalize"
import Timeline from "../components/Timeline"
import Skills from "../components/Skills"
import { Footer, FooterInfo } from "../components/Footer"
import Header from "../components/Header.jsx"
import ContentsArea from "../components/ContentsArea"
import StyledGrid from "../components/atoms/StyledGrid"
import Form from "../components/Form"

const TopPage = () => (
  <div>
    <Header />
    <Normalize />
    <ImgWrap>
      <div>test</div>
      <img src={TopImage} />
    </ImgWrap>
    <ContentsArea />
    <StyledGrid fluid>
      <Skills />
      <Row>
        <Col xs={12}>
          <HeaderWrap>
            <h2>タイムライン</h2>
          </HeaderWrap>
        </Col>
        <Timeline />
      </Row>
      <Form />
      <FooterInfo />
    </StyledGrid>
    <Footer />
  </div>
)

const IntroArea = () => (
  <div>
    <div>
      <img />
    </div>
    <div>Takahiro Saeki</div>
    <div>frontend developer</div>
  </div>
)

const ImgWrap = styled.div`
  background: rgba(51, 51, 51, 0.5);
  position: relative;
  div {
    position: absolute;
  }
  img {
    width: 100%;
    object-fit: cover;
    height: 700px;
    margin: 0;
    vertical-align: bottom;
    background: rgba(51, 51, 51, 0.5);
  }
`

const HeaderWrap = styled.div`
  h2 {
    margin: auto;
    text-align: center;
    padding-bottom: 16px;
  }
`

export default TopPage
