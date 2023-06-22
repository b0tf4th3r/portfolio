import { ComponentSingleStyleConfig } from '@chakra-ui/react'

export const Breadcrumb: ComponentSingleStyleConfig = {
  baseStyle: {
    container: {
      color: 'textNormal',
    },
    // item: {
    //   fontSize: {
    //     base: '5vw',
    //     sm: '3xl',
    //   },
    // },
    link: {
      '&[aria-current=page]': {
        color: 'blue.500',
      },
    },
    separator: {},
  },
}
