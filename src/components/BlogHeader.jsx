import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'react-styled-flexboxgrid';
import StyledGrid from '../components/atoms/StyledGrid';
import { Link } from 'gatsby';

const BlogHeader = () => (
  <HeaderWrap>
    <StyledGrid fluid>
      <Row>
        <Col xs={12}>
          <StyledLink to="/blog">
            <div>ヒロの考え事</div>
          </StyledLink>
        </Col>
      </Row>
    </StyledGrid>
  </HeaderWrap>
);

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
`;

const HeaderWrap = styled.header`
  background: #323232;
  color: #fff;
  padding: 8px;
  font-weight: bold;
`;
export default BlogHeader;
