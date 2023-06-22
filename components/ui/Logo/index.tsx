import { Box, Center, Text } from '@chakra-ui/react'
import React from 'react'

import { Icon } from '../Icon'

export const Logo = () => {
  return (
    <Center display='flex'>
      <Box h={30} w={30}>
        <Box position='absolute'>
          <Box transform='translateY(-6px)'>
            <Icon name='glasses' size={30} />
          </Box>

          <Box transform='translate(6px, -18px)'>
            <Icon name='mustache' size={19} />
          </Box>
        </Box>
      </Box>

      <Box ml={2} textTransform='uppercase' fontSize='xs' fontWeight='bold'>
        <Text letterSpacing='4px' color='textNormal'>
          Bogdan
        </Text>

        <Text mt='-3px' letterSpacing='7.4px' color='textNormal'>
          Rubas
        </Text>
      </Box>
    </Center>
  )
}
