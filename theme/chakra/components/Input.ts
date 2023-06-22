import { ComponentSingleStyleConfig } from '@chakra-ui/react'

export const Input: ComponentSingleStyleConfig = {
  // baseStyle: {
  //   field: {
  //     color: "red",
  //     bg: "whiteAlpha.500",
  //   },
  // },
  variants: {
    filled: {
      addon: {
        px: 0,
        color: 'textAccent',
        bg: 'inputBg',
      },
      field: {
        color: 'textAccent',
        bg: 'inputBg',
        boxShadow: 'cardBoxShadow',
        _placeholder: {
          color: 'textNormal',
        },
        _hover: {
          bg: 'inputBg_hover',
          boxShadow: 'cardBoxShadow_hover',
        },
        _focus: {
          bg: 'inputBg_focus',
          boxShadow: 'cardBoxShadow_hover',
        },
      },
    },
  },
  defaultProps: {
    variant: 'filled',
    // variant: null,
  },
}
