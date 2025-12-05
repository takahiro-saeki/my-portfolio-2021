'use client'

import styled from 'styled-components'
import Image from 'next/image'

export function Footer() {
  return (
    <FooterArea>
      <Container>
        <FooterText>© 2015-{new Date().getFullYear()} Takahiro Saeki</FooterText>
      </Container>
    </FooterArea>
  )
}

export function FooterInfo() {
  return (
    <FooterInfoArea>
      <Container>
        <FooterGrid>
          <ExternalLinkArea>
            <h3>外部リンク</h3>
            <ul>
              <li>
                <a
                  href="http://takahiro-saeki.github.io/new-book/template/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  もふパラ
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/takahiro-saeki"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://dev.to/hirodeath"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  dev.to
                </a>
              </li>
              <li>
                <a
                  href="https://qiita.com/hiro123"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Qiita
                </a>
              </li>
            </ul>
          </ExternalLinkArea>
          <ProfileArea>
            <ProfileImage>
              <Image
                src="/images/hiro.jpeg"
                alt="Takahiro Saeki"
                width={150}
                height={150}
                style={{ borderRadius: '50%', objectFit: 'cover' }}
              />
            </ProfileImage>
            <h3>ヒロ</h3>
            <p>
              三枝木貴浩、フロントエンドエンジニアを本業としている。自分がこれだと確信した事に突っ走る性格。趣味は音楽ゲームと運動、読書。猫が大好きです。
            </p>
          </ProfileArea>
        </FooterGrid>
      </Container>
    </FooterInfoArea>
  )
}

const FooterArea = styled.footer`
  background: #212121;
  padding: 16px 0;
  color: #fff;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`

const FooterText = styled.div`
  text-align: center;
`

const FooterInfoArea = styled.section`
  padding: 48px 0;
`

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const ExternalLinkArea = styled.div`
  h3 {
    margin: 0 0 16px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 8px;

      a {
        color: #00bcd4;
        font-size: 14px;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`

const ProfileArea = styled.div`
  text-align: center;

  h3 {
    margin: 16px 0 8px;
  }

  p {
    font-size: 14px;
    color: #666;
  }
`

const ProfileImage = styled.div`
  display: flex;
  justify-content: center;
`
