'use client'

import styled from 'styled-components'
import Link from 'next/link'
import { BsGithub } from 'react-icons/bs'

interface HeaderProps {
  title: string
}

export default function Header({ title }: HeaderProps) {
  return (
    <HeaderArea>
      <Container>
        <NavRow>
          <TitleArea>
            <Link href="/">
              <Heading>{title}</Heading>
            </Link>
          </TitleArea>
          <IconArea>
            <IconLink
              href="https://github.com/takahiro-saeki"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub />
            </IconLink>
          </IconArea>
        </NavRow>
      </Container>
    </HeaderArea>
  )
}

const HeaderArea = styled.header`
  background: #212121;
  padding: 12px 0;
  color: #fff;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`

const NavRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const TitleArea = styled.div`
  a {
    text-decoration: none;
  }
`

const Heading = styled.h1`
  color: #fff;
  margin: 0;
  font-size: 24px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`

const IconArea = styled.div`
  display: flex;
  align-items: center;
`

const IconLink = styled.a`
  color: white;
  display: flex;
  align-items: center;

  &:hover {
    opacity: 0.8;
  }

  svg {
    height: 28px;
    width: 28px;
  }
`
