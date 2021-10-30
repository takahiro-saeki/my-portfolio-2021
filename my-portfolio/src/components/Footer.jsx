import React from "react"
import styled from "styled-components"
import { Grid, Col, Row } from "react-styled-flexboxgrid"
import { Timeline as TwitterTimeline } from "react-twitter-widgets"

export const Footer = () => (
  <FooterArea>
    <Grid>
      <Row>
        <Col xs={12}>
          <footer>© 2015-{new Date().getFullYear()} Takahiro Saeki</footer>
        </Col>
      </Row>
    </Grid>
  </FooterArea>
)

export const FooterInfo = () => (
  <Row>
    <Col xs={12} md={4}>
      <TwitterTimeline
        dataSource={{
          sourceType: "profile",
          screenName: "hirodeath",
        }}
        options={{
          height: "400",
        }}
      />
    </Col>
    <Col xs={12} md={4}>
      <div>
        <div>ここにアイコン</div>
        <div>ここに説明文</div>
        <div>ここにソーシャルアイコン置く</div>
      </div>
    </Col>
    <Col xs={12} md={4}>
      <div>
        <h3>我が家の猫</h3>
        <div>猫画像</div>
        <div>
          3匹の猫を飼っています。うちの猫の画像や所有している猫グッズが表示されます。
        </div>
      </div>
    </Col>
  </Row>
)

const FooterArea = styled.div`
  background: #212121;
  padding: 8px 0;
  color: #fff;
  footer {
    text-align: center;
  }
`
