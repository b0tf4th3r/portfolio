import { ComponentSingleStyleConfig } from '@chakra-ui/react'
import { themeColors } from 'theme/colors'

export const Badge: ComponentSingleStyleConfig = {
  baseStyle: {},
  variants: {
    outline: {
      py: 2,
      px: [2, 4],
      borderRadius: 'md',
      border: '1px solid',
      textTransform: 'none',
      fontWeight: 'normal',
      fontSize: 'small',
      borderColor: 'textInsignificant',
      outline: 'none',
      shadow: 'none',
    },
  },
}
