import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  Button,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import NoSsr from '../components/no-ssr'
import TarotModel from '../components/tarot-model'

const Page = () => {
  return (
    <Layout>
      <Container>
        <NoSsr>
          <TarotModel />
        </NoSsr>

        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          align="center"
        >
          Haiyo!!! Welcome to the&nbsp;
          <span style={{ fontWeight: 'bold' }}>Best Tarot Online Reading</span>
          &nbsp;ever!!!
        </Box>

        <Section delay={0.1}>
          <Heading
            as="h3"
            variant="section-title"
            style={{ textAlign: 'center' }}
          >
            WIZ TAROT
          </Heading>

          <Paragraph>
            With Wiz Tarot, you can take tarot cards and read by yourself, or
            book our professional tarot reader to read your cards.
          </Paragraph>
          <Box align="center" my={8}>
            <NextLink href="/individual/">
              <Button
                rightIcon={<ChevronRightIcon />}
                colorScheme="teal"
                mx={4}
                my={4}
              >
                Individual
              </Button>
            </NextLink>
            <NextLink href="/professional/">
              <Button
                rightIcon={<ChevronRightIcon />}
                colorScheme="teal"
                mx={4}
              >
                Professional
              </Button>
            </NextLink>
          </Box>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
