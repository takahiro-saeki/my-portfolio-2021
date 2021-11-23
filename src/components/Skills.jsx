import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'react-styled-flexboxgrid';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts';
import skillData from './skillData';
import text from '../text/text.ja.js';
import media from 'styled-media-query';

const Skills = () => (
  <StyledRow>
    <StyledCol xs={12}>
      <HeaderWrap>
        <h2>スキル</h2>
      </HeaderWrap>
    </StyledCol>
    {Object.keys(skillData).map((val, i) => (
      <StyledCol xs={12} md={6} key={i}>
        <SkillContentWrap>
          <SkillHeader>
            {text.skill.find((skillVal) => skillVal.key === val)?.title ||
              'hoge'}
          </SkillHeader>
          <div style={{ height: '250px' }}>
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
            {text.skill.find((skillVal) => skillVal.key === val)?.note}
          </NoteArea>
        </SkillContentWrap>
      </StyledCol>
    ))}
  </StyledRow>
);

const StyledCol = styled(Col)`
  ${media.lessThan('medium')`
padding: 0;
`}
`;

const StyledRow = styled(Row)`
  padding: 48px;
  ${media.lessThan('medium')`
padding: 8px 0;
`}
`;

const SkillHeader = styled.h4`
  text-align: center;
`;

const HeaderWrap = styled.div`
  h2 {
    margin: auto;
    text-align: center;
    padding-bottom: 16px;
  }
`;

const SkillContentWrap = styled.div`
  padding: 8px;
  ${media.lessThan('medium')`
padding: 8px 0;
`}
`;

const NoteArea = styled.div`
  padding: 8px;
  border: 1px dashed #ccc;
  font-size: 14px;
  ${media.lessThan('medium')`
padding: 0;
`}
`;

export default Skills;
