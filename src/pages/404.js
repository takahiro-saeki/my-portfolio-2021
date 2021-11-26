import * as React from 'react';
import styled from 'styled-components';
import { Footer, FooterInfo } from '../components/Footer';
import Header from '../components/Header.jsx';
import ContentsArea from '../components/ContentsArea';
import StyledGrid from '../components/atoms/StyledGrid';
import GlobalCss from '../components/GlobalCss';
import { Col, Row } from 'react-styled-flexboxgrid';
import Seo from '../components/seo.js';

const NotFoundPage = () => (
  <div>
    <Header title="TAKAHIRO SAEKI" path="/" />
    <GlobalCss />
    <Seo />
    <StyledGrid fluid>
      <Row>
        <Col xs={12}>
          <NotFoundContent />
        </Col>
      </Row>
    </StyledGrid>
    <ContentsArea is404 />
    <StyledGrid fluid>
      <FooterInfo />
    </StyledGrid>
    <Footer />
  </div>
);

const NotFoundContent = () => (
  <NotFoundArea>
    <h2>404 NOT FOUND</h2>
    <div>お探しのページは見つかりませんでした。</div>
  </NotFoundArea>
);

const NotFoundArea = styled.div`
  padding: 64px 0;
`;

export default NotFoundPage;
