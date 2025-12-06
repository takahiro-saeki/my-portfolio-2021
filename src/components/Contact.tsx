'use client'

import styled from 'styled-components'

export default function Contact() {
  return (
    <ContactSection>
      <Container>
        <SectionTitle>お問い合わせ</SectionTitle>
        <ContactText>
          お問い合わせは下記Google Formからお願いします。
        </ContactText>
        <ContactLink
          href="https://forms.gle/wDGveE76AfxXXASz9"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Formはこちら
        </ContactLink>
      </Container>
    </ContactSection>
  )
}

const ContactSection = styled.section`
  padding: 64px 0;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
  text-align: center;
`

const SectionTitle = styled.h2`
  margin-bottom: 24px;
  font-size: 28px;
`

const ContactText = styled.p`
  margin-bottom: 16px;
  color: #666;
`

const ContactLink = styled.a`
  color: #00bcd4;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`
