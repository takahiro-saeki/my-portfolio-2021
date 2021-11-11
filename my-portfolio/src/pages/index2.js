import React from "react"
import styled from "styled-components"
import TopImage from "../images/forest.jpg"
import { Grid, Col, Row } from "react-styled-flexboxgrid"
import { Normalize } from "styled-normalize"
import Timeline from "../components/Timeline"
import Skills from "../components/Skills"
import { Footer, FooterInfo } from "../components/Footer"
import Header from "../components/Header.jsx"
import ContentsArea from "../components/ContentsArea"

const TopPage = () => (
  <div>
    <Header />
    <Normalize />
    <ImgWrap src={TopImage} />
    <Grid fluid>
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
      <FooterInfo />
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

export default TopPage
