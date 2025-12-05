'use client'

import styled from 'styled-components'
import Image from 'next/image'

export default function Hero() {
  return (
    <HeroSection>
      <Overlay>
        <HeroContent>
          <ProfileImage>
            <Image
              src="/images/hiro.jpeg"
              alt="Takahiro Saeki"
              width={120}
              height={120}
              style={{ borderRadius: '50%', objectFit: 'cover' }}
            />
          </ProfileImage>
          <Name>Takahiro Saeki</Name>
          <Title>Frontend Developer</Title>
        </HeroContent>
      </Overlay>
    </HeroSection>
  )
}

const HeroSection = styled.section`
  background-image: url('/images/forest.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: rgb(70, 70, 70);
  position: relative;
  height: 600px;

  @media (max-width: 768px) {
    height: 450px;
  }
`

const Overlay = styled.div`
  background: rgba(51, 51, 51, 0.6);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const HeroContent = styled.div`
  text-align: center;
  color: #fff;
`

const ProfileImage = styled.div`
  margin-bottom: 16px;
`

const Name = styled.div`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`

const Title = styled.div`
  font-size: 18px;
  opacity: 0.9;
`
