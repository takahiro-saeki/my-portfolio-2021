'use client'

import { Box, Container, Flex, Text, Image, SimpleGrid, Link as ChakraLink } from '@chakra-ui/react'
import NextLink from 'next/link'

const books = [
  {
    title: 'これから始める ♡React.js 実践マニュアル',
    desc: 'React.jsのコンポーネントの構成の仕方について、hooks APIを使用した構成方法から基本的な構成方法まで網羅的に紹介しています。これからReact.jsを始める方から既に業務で使用されている方まで、幅広い層の方に向けた1冊になっています。',
    circleName: 'もふもふ☆パラダイス',
    place: 'コミックマーケット95 2日目(日) 東ト38b',
    date: '2018年12月30日(日)',
    price: 500,
    color: '#f9fbe7',
    image: '/images/mohupara/mohupara-6.png',
  },
  {
    title: 'アタシだけを見て♡Micro Frontends 実践マニュアル',
    desc: 'どういう環境でweb componentsを使用すると効果があるのか、またweb componentsがどう将来を変革して行くのかという内容に加え、Micro Frontendsが解決する問題について詳細に説明しています。',
    circleName: 'もふもふ☆パラダイス',
    place: 'コミックマーケット94 1日目(金) 西め34a',
    date: '2018年8月10日(金)',
    price: 500,
    color: '#fff3e0',
    image: '/images/mohupara/mohupara-5.png',
  },
  {
    title: 'さぁ、一緒に行こう♡ Web Components 実践マニュアル',
    desc: 'Web componentsの基本的な概要やcustom-elementsの基本的なAPIの説明を主軸に、後半では応用的な使い方を説明しています。',
    circleName: 'もふもふ☆パラダイス',
    place: 'コミティア122 有明・東京ビッグサイト A20b',
    date: '2017年11月23日(木)',
    price: 500,
    color: '#f3e5f5',
    image: '/images/mohupara/mohupara-4.jpg',
  },
  {
    title: 'アタシが教えてア・ゲ・ル♥ node.js実践マニュアル',
    desc: 'Node.jsのインストールの仕方、基本的な使い方の説明や、expressを使用したサーバーサイドの開発までを説明しています。こちらの書籍はNode.jsに馴染みの無い方や初学者向けの内容となっております。',
    circleName: 'もふもふ☆パラダイス',
    place: 'COMITIA116 有明・東京ビッグサイト東４・５・６ホール T21a',
    date: '2016年5月5日(木)',
    price: 500,
    color: '#fbe9e7',
    image: '/images/mohupara/mohupara-3.jpg',
  },
  {
    title: 'キミと一緒に学びたいECMAScript2015',
    desc: 'ECMAScript2015とは何かということから、著者が厳選した構文の説明、また実際にサンプルコードを通して実践的な使い方を説明した一冊になります。本書は2部構成になっており、基本編では構文の説明、応用編では実際にサンプルコードを例にどのように使用していくのかということを記載させて頂きました。',
    circleName: 'もふもふ☆パラダイス',
    place: 'サンシャインクリエイション2016 Winter',
    date: '2016年2月28日(日)',
    price: 500,
    color: '#e3f2fd',
    image: '/images/mohupara/image1.png',
  },
  {
    title: 'アナタに捧げるフロントエンド実践マニュアル',
    desc: 'PostCSSとは何かということや導入の仕方、次世代CSSの構文の説明を中心に執筆させて頂きました。 この書籍を通じて少しでもPostCSSに興味を持って頂けたら幸いです。',
    circleName: 'もふもふ☆パラダイス',
    place: 'コミックマーケットC89 東エ-35b',
    date: '2015年12月31日(木)',
    price: 500,
    color: '#fce4ec',
    image: '/images/mohupara/image2.png',
  },
]

export default function MohuparaPage() {
  return (
    <Box color="#616161" minH="100vh">
      {/* Header */}
      <Box
        as="header"
        py={2}
        px={4}
        borderBottom="1px solid #ccc"
        bg="white"
      >
        <Container maxW="1200px">
          <Image
            src="/images/mohupara/mohupara.png"
            alt="もふもふ☆パラダイス"
            h="40px"
            w="auto"
          />
        </Container>
      </Box>

      {/* Main Content */}
      <Box as="main">
        {books.map((book, index) => (
          <Box
            key={index}
            py={{ base: 8, md: 16 }}
            px={{ base: 4, md: 6 }}
            style={{ background: book.color }}
          >
            <Container maxW="1200px" px={{ base: 0, md: 4 }}>
              <SimpleGrid columns={{ base: 1, md: 2 }} gap={8} alignItems="center">
                {/* Book Image */}
                <Box
                  textAlign="center"
                  px={{ base: 0, md: 6 }}
                  pb={{ base: 6, md: 0 }}
                >
                  <Image
                    src={book.image}
                    alt={book.title}
                    maxW="400px"
                    w="100%"
                    h="auto"
                    mx="auto"
                    boxShadow="0 1px 6px rgba(0, 0, 0, 0.35)"
                  />
                </Box>

                {/* Book Info */}
                <Box>
                  <Text
                    as="h2"
                    fontSize={{ base: 'xl', md: '2xl' }}
                    fontWeight="bold"
                    mb={4}
                  >
                    {book.title}
                  </Text>

                  <Box as="ul" listStyleType="none" p={0} m={0}>
                    <Flex as="li" fontSize="14px" py={2}>
                      <Box flexBasis="20%" fontWeight="bold">概要</Box>
                      <Box flexBasis="80%">{book.desc}</Box>
                    </Flex>
                    <Flex as="li" fontSize="14px" py={2}>
                      <Box flexBasis="20%" fontWeight="bold">サークル名</Box>
                      <Box flexBasis="80%">{book.circleName}</Box>
                    </Flex>
                    <Flex as="li" fontSize="14px" py={2}>
                      <Box flexBasis="20%" fontWeight="bold">配布場所</Box>
                      <Box flexBasis="80%">{book.place}</Box>
                    </Flex>
                    <Flex as="li" fontSize="14px" py={2}>
                      <Box flexBasis="20%" fontWeight="bold">配布日程</Box>
                      <Box flexBasis="80%">{book.date}</Box>
                    </Flex>
                    <Flex as="li" fontSize="14px" py={2}>
                      <Box flexBasis="20%" fontWeight="bold">価格</Box>
                      <Box flexBasis="80%">{book.price}円</Box>
                    </Flex>
                  </Box>
                </Box>
              </SimpleGrid>
            </Container>
          </Box>
        ))}
      </Box>

      {/* Footer */}
      <Box
        as="footer"
        bg="#ec407a"
        color="white"
        py={8}
        px={4}
      >
        <Container maxW="1200px" px={0}>
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
            <Box>
              <Text
                as="h3"
                fontSize="lg"
                fontWeight="bold"
                mb={4}
                pl={4}
                borderLeft="3px solid white"
              >
                もふもふ☆パラダイスとは
              </Text>
              <Text fontSize="14px">
                もふもふ☆パラダイスはフロントエンドの技術を中心に同人活動を行うサークルです。
              </Text>
            </Box>
            <Box>
              <ChakraLink as={NextLink} href="/">
                <Image
                  src="/images/ts.png"
                  alt="TAKAHIRO SAEKIのポートフォリオ"
                  h="110px"
                  w="auto"
                  mx={{ base: 'auto', md: 0 }}
                />
              </ChakraLink>
            </Box>
            <Box />
          </SimpleGrid>
        </Container>
      </Box>

      {/* Copyright */}
      <Box
        bg="#222"
        color="white"
        textAlign="center"
        fontSize="14px"
        py={2}
      >
        ©{new Date().getFullYear()} もふもふ☆パラダイス
      </Box>
    </Box>
  )
}
