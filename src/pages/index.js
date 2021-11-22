import React from 'react';
import styled from 'styled-components';
import TopImage from '../images/forest.jpg';
import { Col, Row } from 'react-styled-flexboxgrid';
import Timeline from '../components/Timeline';
import Skills from '../components/Skills';
import { Footer, FooterInfo } from '../components/Footer';
import Header from '../components/Header.jsx';
import ContentsArea from '../components/ContentsArea';
import StyledGrid from '../components/atoms/StyledGrid';
import Form from '../components/Form';
import Hiro from '../images/hiro.jpeg';
import GlobalCss from '../components/GlobalCss';
import Work from '../components/Work';

const TopPage = () => (
  <div>
    <Header />
    <GlobalCss />
    <ImgWrap>
      <BgCover>
        <IntroArea />
      </BgCover>
    </ImgWrap>
    <ContentsArea />
    <StyledGrid fluid>
      <Skills />
    </StyledGrid>
    <Work />
    <StyledGrid fluid>
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
);

const BgCover = styled.div`
  background: rgba(51, 51, 51, 0.5);
  width: 100%;
  height: 100%;
`;

const IntroArea = () => (
  <IntroAreaWrap>
    <div>
      <img src={Hiro} alt="TAKAHIRO SAEKI" />
    </div>
    <div>Takahiro Saeki</div>
    <div>frontend developer</div>
  </IntroAreaWrap>
);

const IntroAreaWrap = styled.div`
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 180px;
  height: 180px;
  margin: auto;
  position: absolute;
  color: #fff;
  img {
    border-radius: 50%;
  }
`;

const ImgWrap = styled.div`
  background-image: url(${TopImage});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: rgb(70, 70, 70);
  position: relative;
  height: 700px;
`;

const HeaderWrap = styled.div`
  h2 {
    margin: auto;
    text-align: center;
    padding-bottom: 16px;
  }
`;

export default TopPage;
