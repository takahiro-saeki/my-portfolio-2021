'use client'

import styled from 'styled-components'
import { MdWorkOutline } from 'react-icons/md'
import text from '@/data/text'

export default function Timeline() {
  return (
    <TimelineSection>
      <Container>
        <SectionTitle>タイムライン</SectionTitle>
        <TimelineContainer>
          {text.timeline.map((item, index) => (
            <TimelineItem key={index}>
              <TimelineIcon style={{ backgroundColor: item.iconColor }}>
                <MdWorkOutline />
              </TimelineIcon>
              <TimelineContent>
                <TimelineDate>{item.date}</TimelineDate>
                <TimelineTitle>{item.title}</TimelineTitle>
                <TimelineDesc>{item.desc}</TimelineDesc>
              </TimelineContent>
            </TimelineItem>
          ))}
        </TimelineContainer>
      </Container>
    </TimelineSection>
  )
}

const TimelineSection = styled.section`
  padding: 64px 0;
  background: #f5f5f5;
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

const TimelineContainer = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    left: 20px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: #ddd;

    @media (min-width: 768px) {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`

const TimelineItem = styled.div`
  position: relative;
  padding-left: 60px;
  padding-bottom: 40px;

  @media (min-width: 768px) {
    padding-left: 0;
    padding-right: 0;
    width: 50%;

    &:nth-child(odd) {
      margin-left: auto;
      padding-left: 40px;
    }

    &:nth-child(even) {
      padding-right: 40px;
      text-align: right;
    }
  }
`

const TimelineIcon = styled.div`
  position: absolute;
  left: 6px;
  top: 0;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  z-index: 1;

  svg {
    width: 16px;
    height: 16px;
  }

  @media (min-width: 768px) {
    left: auto;
    right: -15px;

    ${TimelineItem}:nth-child(even) & {
      right: auto;
      left: -15px;
    }
  }
`

const TimelineContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`

const TimelineDate = styled.div`
  font-size: 14px;
  color: #00bcd4;
  font-weight: bold;
  margin-bottom: 8px;
`

const TimelineTitle = styled.h3`
  font-size: 18px;
  margin: 0 0 8px;
`

const TimelineDesc = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0;
  line-height: 1.6;
`
