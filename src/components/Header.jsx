import React from "react";
import styled, { css } from "styled-components";
import { Col, Row } from "react-styled-flexboxgrid";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { Link } from "gatsby";
import StyledGrid from "../components/atoms/StyledGrid";
import media from "styled-media-query";

const Header = ({ title, path }) => (
  <HeaderArea>
    <StyledGrid fluid>
      <Row>
        <StyledCol xs={8}>
          <Link to={path}>
            <Heading>{title}</Heading>
          </Link>
        </StyledCol>
        <ColExtend xs={4}>
          <IconWrap>
            <IconLink href="https://github.com/takahiro-saeki" target="_blank">
              <BsGithub />
            </IconLink>
          </IconWrap>
        </ColExtend>
      </Row>
    </StyledGrid>
  </HeaderArea>
);

const StyledCol = styled(Col)`
  display: flex;
  align-items: center;
`;

const Heading = styled.h1`
  color: #fff;
  ${media.lessThan("medium")`
    font-size: 20px;
    display: flex;
    align-items: center;
  `}
`;

const HeaderArea = styled.div`
  background: #212121;
  padding: 8px 0;
  color: #fff;

  h1 {
    margin: 0;
  }
`;

const ColExtend = styled(Col)`
  display: flex;
`;

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
`;

const IconWrap = styled.div`
  display: flex;
  align-items: center;
`;

export default Header;
