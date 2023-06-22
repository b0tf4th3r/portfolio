import { Box } from '@chakra-ui/react'
import React from 'react'
import { theme } from 'theme'

import { MaxWidthLayoutProps } from './_types'

export const MaxWidthLayout = (props: MaxWidthLayoutProps) => {
  return (
    <Box
      px={[4, 8, null, null, null, 0]}
      mx='auto'
      maxW={theme.layouts.MaxWidth.maxW}
    >
      {props.children}
    </Box>
  )
}
