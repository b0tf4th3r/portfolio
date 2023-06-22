import { VStack } from '@chakra-ui/react'
import React from 'react'

import { ListItem } from './Item'
import { useList } from './_hooks/useList'

export const AboutMeList = () => {
  const list = useList()

  return (
    <VStack alignItems='flex-start' mt={[8, 16]}>
      {list.items.map((item, i) => (
        <ListItem key={i} item={item} />
      ))}
    </VStack>
  )
}
