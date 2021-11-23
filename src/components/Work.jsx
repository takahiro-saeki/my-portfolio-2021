import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'react-styled-flexboxgrid';
import { Link } from 'gatsby';
import StyledGrid from './atoms/StyledGrid';
import sp1 from '../images/sp1.png';
import sp2 from '../images/sp2.png';
import sp3 from '../images/sp3.png';
import g1 from '../images/portals_component.png';
import mrcp from '../images/mrcp.png';
import mohupara from '../images/mohupara.png';
import media from 'styled-media-query';

const Work = () => {
  return (
    <WorkWrap>
      <StyledGrid fluid>
        <StyledRow>
          <StyledCol xs={12}>
            <WorkHeader>過去の実績</WorkHeader>
          </StyledCol>
          <StyledCol xs={12} md={4}>
            <a
              href="https://speakerdeck.com/takahirosaeki/hooksgabian-ge-suruwei-lai-nituite"
              target="_blank"
              rel="noreferrer"
            >
              <Card>
                <StyledImg src={sp1} />
                <DescArea>LTのスライド</DescArea>
              </Card>
            </a>
          </StyledCol>
          <StyledCol xs={12} md={4}>
            <a
              href="https://speakerdeck.com/takahirosaeki/vue-dot-js-with-web-components"
              target="_blank"
              rel="noreferrer"
            >
              <Card>
                <StyledImg src={sp2} />
                <DescArea>LTのスライド</DescArea>
              </Card>
            </a>
          </StyledCol>
          <StyledCol xs={12} md={4}>
            <a
              href="https://speakerdeck.com/takahirosaeki/lit-html-lit-elementdotirawoshi-ukami-tutaji-falsege-ren-de-jian-jie"
              target="_blank"
              rel="noreferrer"
            >
              <Card>
                <StyledImg src={sp3} />
                <DescArea>LTのスライド</DescArea>
              </Card>
            </a>
          </StyledCol>
          <StyledCol xs={12} md={4}>
            <a
              href="https://github.com/takahiro-saeki/portals-component"
              target="_blank"
              rel="noreferrer"
            >
              <Card>
                <StyledImg src={g1} style={{ objectPosition: 'top center' }} />
                <DescArea>portals component</DescArea>
              </Card>
            </a>
          </StyledCol>
          <StyledCol xs={12} md={4}>
            <a
              href="https://github.com/takahiro-saeki/material-random-color-picker"
              target="_blank"
              rel="noreferrer"
            >
              <Card>
                <StyledImg
                  src={mrcp}
                  style={{ objectPosition: 'top center' }}
                />
                <DescArea>material colorをrandomに生成するライブラリ</DescArea>
              </Card>
            </a>
          </StyledCol>
          <StyledCol xs={12} md={4}>
            <Link to="/mohupara">
              <Card>
                <StyledImg src={mohupara} style={{ objectFit: 'contain' }} />
                <DescArea>技術系同人サークル: もふもふ☆パラダイス</DescArea>
              </Card>
            </Link>
          </StyledCol>
        </StyledRow>
      </StyledGrid>
    </WorkWrap>
  );
};

const WorkWrap = styled.div`
  background: #212121;
  padding: 24px 0;
  margin: 48px 0;
`;

const StyledCol = styled(Col)`
  ${media.lessThan('medium')`
padding: 0;
`}
`;

const StyledRow = styled(Row)`
  padding: 32px 0 48px;
  ${media.lessThan('medium')`
padding: 0;
`}
`;

const WorkHeader = styled.h2`
  text-align: center;
  color: #fff;
  margin-top: 0;
`;

const DescArea = styled.div`
  padding: 8px 0;
`;

const StyledImg = styled.img`
  height: 150px;
  width: 100%;
  object-fit: cover;
`;

const Card = styled.div`
  background: #fff;
  padding: 16px;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px,
    rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;

  border-radius: 8px;
  margin: 8px 4px;
  font-size: 16px;
  color: #000;
`;

export default Work;
