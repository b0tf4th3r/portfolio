import { Box, Heading, HStack } from '@chakra-ui/react'
import React from 'react'
import { theme } from 'theme'

import { Icon } from 'components/ui'

import { LeftIconHeadingProps } from './_types'

export const LeftIconHeading = (props: LeftIconHeadingProps) => {
  return (
    <HStack spacing={[4, 8]}>
      <Icon
        name={props.iconName}
        size={props.variant === 'big' ? 70 : undefined}
        color={theme.primary}
      />

      <Heading
        as='h1'
        fontSize={props.variant === 'big' ? ['5xl', '6xl'] : undefined}
      >
        {props.headingText}
      </Heading>
    </HStack>
  )
}
