import { Badge, Box, Heading } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import NextImage from 'next/image'
import React from 'react'
import { useTranslation } from 'react-i18next'

import { ListItemProps } from './_types'

export const ListItem = (props: ListItemProps) => {
  const { t } = useTranslation()

  return (
    <Box alignItems='flex-start'>
      <Heading as='h3' fontSize='2xl'>
        {props.item.heading.search('_') !== -1
          ? t(props.item.heading)
          : props.item.heading}
      </Heading>

      <Box mt={[4, 8]}>
        {props.item.technologies.map((technology, i) => (
          <Box display='inline-block' mr={4} mb={4} key={i}>
            <Badge
              variant='outline'
              display='flex'
              alignItems='center'
              flexDir='row'
            >
              {technology.icon}

              {technology.imageUrl && (
                <Box position='relative' w='30px' h='30px' mx='auto'>
                  <Box>
                    <NextImage
                      src={'/' + technology.imageUrl}
                      alt={technology.name + ' image'}
                      layout='fill'
                      objectFit='contain'
                    />
                  </Box>
                </Box>
              )}

              <Text ml={4}>
                {technology.label.search('_') !== -1
                  ? t(technology.label)
                  : technology.label}
              </Text>
            </Badge>
          </Box>
        ))}
      </Box>
    </Box>
  )
}
