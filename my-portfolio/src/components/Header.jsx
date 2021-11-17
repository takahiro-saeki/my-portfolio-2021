import React from "react"
import styled, { css } from "styled-components"
import { Col, Row } from "react-styled-flexboxgrid"
import { BsGithub, BsTwitter } from "react-icons/bs"
import StyledGrid from "../components/atoms/StyledGrid"

const Header = () => (
  <HeaderArea>
    <StyledGrid fluid>
      <Row>
        <Col xs={8}>
          <h1>TAKAHIRO SAEKI</h1>
        </Col>
        <ColExtend xs={4}>
          <IconWrap>
            <IconLink href="https://github.com/takahiro-saeki" target="_blank">
              <BsGithub />
            </IconLink>
            <IconLink
              color="#1DA1F2"
              href="https://twitter.com/hirodeath"
              target="_blank"
            >
              <BsTwitter />
            </IconLink>
          </IconWrap>
        </ColExtend>
      </Row>
    </StyledGrid>
  </HeaderArea>
)

const HeaderArea = styled.div`
  height: 60px;
  background: #212121;
  padding: 8px 0;
  color: #fff;

  h1 {
    margin: 0;
  }
`

const ColExtend = styled(Col)`
  display: flex;
`

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
`

const IconWrap = styled.div`
  display: flex;
  align-items: center;
`

export default Header
