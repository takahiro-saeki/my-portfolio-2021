import React from "react"
import styled from "styled-components"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import { MdWorkOutline } from "react-icons/md"
import { Col } from "react-styled-flexboxgrid"
import text from "../text/text.ja.js"

const Timeline = () => (
  <Col xs={12}>
    <TimelineWrap>
      <VerticalTimeline>
        {text.timeline.map(val => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={val.date}
            iconStyle={{ background: val.iconColor, color: "#fff" }}
            icon={<MdWorkOutline />}
          >
            <h3 className="vertical-timeline-element-title">{val.title}</h3>
            <p>{val.desc}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </TimelineWrap>
  </Col>
)

const TimelineWrap = styled.div`
  background: #eee;
`

export default Timeline
