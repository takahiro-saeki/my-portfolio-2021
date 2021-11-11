import React from "react"
import { Col, Row } from "react-styled-flexboxgrid"

const BlogHeader = () => (
  <HeaderWrap>
    <StyledGrid fluid>
      <Row>
        <Col xs={12}>
          <div>ヒロの考え事</div>
        </Col>
      </Row>
    </StyledGrid>
  </HeaderWrap>
)

const HeaderWrap = styled.header`
  background: #323232;
  color: #fff;
  padding: 8px;
  font-weight: bold;
`

const StyledGrid = styled(Grid)`
  max-width: 1200px;
`

export default BlogHeader
