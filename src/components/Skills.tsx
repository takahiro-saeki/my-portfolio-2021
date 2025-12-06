'use client'

import styled from 'styled-components'
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts'
import skillData from '@/data/skillData'
import text from '@/data/text'

export default function Skills() {
  return (
    <SkillsSection>
      <Container>
        <SectionTitle>スキル</SectionTitle>
        <SkillsGrid>
          {Object.keys(skillData).map((key) => {
            const skillInfo = text.skill.find((s) => s.key === key)
            return (
              <SkillCard key={key}>
                <SkillTitle>{skillInfo?.title || key}</SkillTitle>
                <ChartWrapper>
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart
                      cx="50%"
                      cy="50%"
                      outerRadius="80%"
                      data={skillData[key]}
                    >
                      <PolarGrid />
                      <PolarAngleAxis dataKey="name" tick={{ fontSize: 12 }} />
                      <PolarRadiusAxis domain={[0, 100]} />
                      <Radar
                        name={key}
                        dataKey="score"
                        stroke="#00bcd4"
                        fill="#00bcd4"
                        fillOpacity={0.5}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </ChartWrapper>
                <NoteArea>{skillInfo?.note}</NoteArea>
              </SkillCard>
            )
          })}
        </SkillsGrid>
      </Container>
    </SkillsSection>
  )
}

const SkillsSection = styled.section`
  padding: 64px 0;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 48px;
  font-size: 28px;
`

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const SkillCard = styled.div`
  padding: 16px;
`

const SkillTitle = styled.h4`
  text-align: center;
  margin-bottom: 16px;
  font-size: 18px;
`

const ChartWrapper = styled.div`
  height: 250px;
`

const NoteArea = styled.div`
  padding: 12px;
  border: 1px dashed #ccc;
  font-size: 14px;
  color: #666;
  border-radius: 4px;
  margin-top: 16px;
`
