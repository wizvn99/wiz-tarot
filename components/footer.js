import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm" mt="50px">
      &copy; {new Date().getFullYear()}&nbsp;
      <a target="_blank" href="">
        Wiz - DNTV
      </a>
      . All Rights Reserved.
    </Box>
  )
}

export default Footer
