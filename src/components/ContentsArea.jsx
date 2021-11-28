import React from 'react';
import styled from 'styled-components';
import Mohupara from '../images/mohupara.png';
import Blog from '../images/blogtitle.png';
import Ts from '../images/ts.png';
import { Col, Row } from 'react-styled-flexboxgrid';
import { Link } from 'gatsby';
import StyledGrid from '../components/atoms/StyledGrid';
import media from 'styled-media-query';

const ContentsArea = ({ is404 }) => (
  <ContentsAreaWrap>
    <StyledGrid fluid>
      <ContentsRow>
        <StyledCol xs={12}>
          <HeaderWrap>
            <h2>コンテンツ一覧</h2>
          </HeaderWrap>
        </StyledCol>
        <StyledCol xs={12} md={4}>
          <Card>
            <h3>ポートフォリオサイト</h3>
            <ContentImgWrap>
              <img src={Ts} alt="TAKAHIRO SAEKIのポートフォリオ" />
            </ContentImgWrap>
            <CardDescArea>私、三枝木貴浩のポートフォリオサイト</CardDescArea>
            {is404 && (
              <Link to="/">
                <button>ポートフォリオサイトはこちら</button>
              </Link>
            )}
          </Card>
        </StyledCol>
        <StyledCol xs={12} md={4}>
          <Card>
            <h3>もふもふ☆パラダイス</h3>
            <ContentImgWrap>
              <img src={Mohupara} alt="もふもふ☆パラダイス" />
            </ContentImgWrap>
            <CardDescArea>もふもふ☆パラダイスの公式サイトです。</CardDescArea>
            <Link to="/mohupara">
              <button>もふパラの公式サイトはこちら</button>
            </Link>
          </Card>
        </StyledCol>
        <StyledCol xs={12} md={4}>
          <Card>
            <h3>ブログサイト</h3>
            <ContentImgWrap>
              <img src={Blog} alt="TAKAHIRO SAEKIのブログサイト" />
            </ContentImgWrap>
            <CardDescArea>私、三枝木貴浩のブログサイトです</CardDescArea>
            <Link to="/blog">
              <button>ヒロの考え事はこちら</button>
            </Link>
          </Card>
        </StyledCol>
      </ContentsRow>
    </StyledGrid>
  </ContentsAreaWrap>
);

const ContentsAreaWrap = styled.div`
  background: #212121;
  padding: 48px 0;
`;

const HeaderWrap = styled.div`
  h2 {
    margin: auto;
    text-align: center;
    color: #fff;
    padding-bottom: 16px;
  }
`;

const Card = styled.div`
  background: #fff;
  padding: 16px;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px,
    rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;

  border-radius: 8px;
  margin: 4px;
  font-size: 16px;
  ${media.lessThan('medium')`
margin: 8px 0;
`}

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
    cursor: pointer;
  }

  button:hover {
    border: 1px solid #4dd0e1;
    background: #4dd0e1;
    color: white;
  }
`;

const StyledCol = styled(Col)`
  ${media.lessThan('medium')`
padding: 0;
`}
`;

const ContentsRow = styled(Row)`
  padding: 16px;
  ${media.lessThan('medium')`
  padding: 0;
  `}
`;

const ContentImgWrap = styled.div`
  height: 150px;
  display: flex;
  align-items: center;
`;

const CardDescArea = styled.div`
  padding: 16px 0;
`;

export default ContentsArea;
