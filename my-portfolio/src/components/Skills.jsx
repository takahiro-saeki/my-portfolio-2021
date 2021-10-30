import React from "react"
import styled from "styled-components"
import { Col, Row } from "react-styled-flexboxgrid"
import { GrLanguage } from "react-icons/gr"
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts"
import skillData from "./skillData"
import text from "../text/text.ja.js"

const Skills = () => (
  <Row>
    <Col xs={12}>
      <HeaderWrap>
        <h2>スキル</h2>
      </HeaderWrap>
    </Col>
    {Object.keys(skillData).map(val => (
      <Col xs={12} md={4}>
        <SkillContentWrap>
          <SkillHeader>
            {text.skill.find(skillVal => skillVal.key === val)?.title || "hoge"}
          </SkillHeader>
          <div style={{ height: "250px" }}>
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart
                cx="50%"
                cy="50%"
                outerRadius="80%"
                data={skillData[val]}
              >
                <PolarGrid />
                <PolarAngleAxis dataKey="name" />
                <PolarRadiusAxis />
                <Radar
                  name="Mike"
                  dataKey="score"
                  stroke="#8884d8"
                  fill="#8884d8"
                  fillOpacity={0.6}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          <NoteArea>
            {text.skill.find(skillVal => skillVal.key === val)?.note}
          </NoteArea>
        </SkillContentWrap>
      </Col>
    ))}
  </Row>
)

const SkillHeader = styled.h4`
  text-align: center;
`

const HeaderWrap = styled.div`
  h2 {
    margin: auto;
    text-align: center;
  }
`

const SkillContentWrap = styled.div`
  padding: 8px;
`

const NoteArea = styled.div`
  padding: 8px;
  border: 1px dashed #ccc;
  font-size: 14px;
`

export default Skills
