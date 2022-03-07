import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import styles from '../styles/Card.module.css'

export const Card = ({ card, index, onChoose }) => {
  return (
    <Box w="100%" align="center" onClick={() => onChoose(card, index)}>
      <Image
        className={styles['card']}
        width="300px"
        height="537px"
        src={`/cards/${card}`}
        alt={card}
        loading="lazy"
      />
    </Box>
  )
}

export const SelectedCard = ({ card, index }) => {
  return (
    <Box w="100%" align="center">
      <Image
        className={styles['selected-card']}
        width="300px"
        height="537px"
        src={`/cards/${card}`}
        alt={card}
        loading="lazy"
      />
    </Box>
  )
}
