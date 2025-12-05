import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ContentsArea from '@/components/ContentsArea'
import Skills from '@/components/Skills'
import Timeline from '@/components/Timeline'
import Contact from '@/components/Contact'
import { Footer, FooterInfo } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header title="TAKAHIRO SAEKI" />
      <main>
        <Hero />
        <ContentsArea />
        <Skills />
        <Timeline />
        <Contact />
        <FooterInfo />
      </main>
      <Footer />
    </>
  )
}
