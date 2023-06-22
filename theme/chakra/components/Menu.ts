import { ComponentSingleStyleConfig } from '@chakra-ui/react'

export const Menu: ComponentSingleStyleConfig = {
  baseStyle: {
    list: {
      '&:focus:not([data-focus-visible-added])': {
        shadow: 'lg',
      },
      bg: 'cardBg',
      backdropFilter: 'blur(40px)',
      shadow: 'lg',
      border: 'none',
      // py: 0,
      // zIndex: 99000,
    },
    item: {
      bg: 'cardBg',
      color: 'textNormal',
      _hover: {
        bg: 'cardBg_hover',
      },
    },
  },
}
