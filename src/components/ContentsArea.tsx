'use client'

import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

export default function ContentsArea() {
  return (
    <ContentsSection>
      <Container>
        <SectionTitle>コンテンツ一覧</SectionTitle>
        <ContentsGrid>
          <Card>
            <h3>ポートフォリオサイト</h3>
            <ImageWrapper>
              <Image
                src="/images/ts.png"
                alt="TAKAHIRO SAEKIのポートフォリオ"
                width={150}
                height={150}
                style={{ objectFit: 'contain' }}
              />
            </ImageWrapper>
            <CardDesc>私、三枝木貴浩のポートフォリオサイト</CardDesc>
          </Card>
          <Card>
            <h3>もふもふ☆パラダイス</h3>
            <ImageWrapper>
              <Image
                src="/images/mohupara.png"
                alt="もふもふ☆パラダイス"
                width={150}
                height={150}
                style={{ objectFit: 'contain' }}
              />
            </ImageWrapper>
            <CardDesc>もふもふ☆パラダイスの公式サイトです。</CardDesc>
            <CardButton
              href="https://takahiro-saeki.github.io/new-book/template/"
              target="_blank"
              rel="noopener noreferrer"
            >
              もふパラの公式サイトはこちら
            </CardButton>
          </Card>
        </ContentsGrid>
      </Container>
    </ContentsSection>
  )
}

const ContentsSection = styled.section`
  background: #212121;
  padding: 64px 0;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`

const SectionTitle = styled.h2`
  text-align: center;
  color: #fff;
  margin-bottom: 48px;
  font-size: 28px;
`

const ContentsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const Card = styled.div`
  background: #fff;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  h3 {
    text-align: center;
    margin: 0 0 16px;
    font-size: 18px;
  }
`

const ImageWrapper = styled.div`
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const CardDesc = styled.div`
  padding: 16px 0;
  font-size: 14px;
  color: #666;
`

const CardButton = styled.a`
  display: block;
  width: 100%;
  padding: 12px;
  border: 1px solid #00bcd4;
  color: #00bcd4;
  background: white;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
  text-decoration: none;

  &:hover {
    background: #00bcd4;
    color: white;
    text-decoration: none;
  }
`
