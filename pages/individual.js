import React from 'react'
import {
  Container,
  Button,
  Heading,
  SimpleGrid,
  Divider,
  Image,
  Box
} from '@chakra-ui/react'
import { Card, SelectedCard } from '../components/card'
import Section from '../components/section'
import cardData from '../libs/cardData'

const shuffleCardList = cards => {
  const returnList = cards.slice(0).sort(function () {
    return 0.5 - Math.random()
  })
  return returnList
}

const Individual = () => {
  const [cardList, setCardList] = React.useState(cardData)
  const [selectedCard, setSelectedCard] = React.useState([])

  const onShuffel = async () => {
    setCardList(shuffleCardList(cardList))
  }

  const chooseCard = (card, index) => {
    setSelectedCard([...selectedCard, card])
    const splicedData = cardList
    splicedData.splice(index, 1)
    setCardList(splicedData)
  }

  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4} mt={6}>
        Table of Cards
      </Heading>
      <SimpleGrid columns={[1, 1, 1]} gap={6}>
        <Section>
          <SimpleGrid columns={[8, 10, 12]} gap={1}>
            {cardList?.map((card, index) => (
              <>
                <Card
                  key={index}
                  card={card}
                  index={index}
                  onChoose={chooseCard}
                />
              </>
            ))}
          </SimpleGrid>
          <Box align="center" my={8}>
            <Button colorScheme="teal" mx={4} onClick={onShuffel}>
              Shuffel
            </Button>
          </Box>
        </Section>
        <Divider orientation="horizontal" />
        <Section>
          <SimpleGrid columns={[1, 2, 4]} gap={1}>
            {selectedCard?.map((card, index) => (
              <SelectedCard key={index} card={card} index={index} />
            ))}
          </SimpleGrid>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Individual
