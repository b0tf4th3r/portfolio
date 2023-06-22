import { ComponentSingleStyleConfig } from '@chakra-ui/react'

export const Popover: ComponentSingleStyleConfig = {
  baseStyle: {
    body: {
      p: 0,
      m: 0,
    },
    content: {
      bg: 'cardBg',
      backdropFilter: 'blur(40px)',
      borderRadius: 'lg',
      border: 'none',
    },
  },
}
