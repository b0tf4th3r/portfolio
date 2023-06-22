import { ComponentSingleStyleConfig } from '@chakra-ui/react'

import { semanticTokens } from '../semanticTokens'

const solid = {
  transition: '0.35s',
  position: 'relative',
  bgSize: '300% 100%',
  bgPosition: '50%',
  outlineColor: 'rgba(0,0,0,0)',
  _before: {
    content: `''`,
    position: 'absolute',
    h: '100%',
    w: '100%',
    transition: '0.35s',
  },
  _hover: {
    bgPosition: '100%',
    bgSize: '300% 100%',
    transform: 'scale(1.02)',
  },
  _active: {
    bgPosition: '100%',
    bgSize: '300% 300%',
    transform: 'scale(0.975)',
  },
}

export const Button: ComponentSingleStyleConfig = {
  baseStyle: {
    textTransform: 'uppercase',
    borderRadius: 'base',
  },
  defaultProps: {
    // variant: "outline",
  },
  variants: {
    submodule: {
      _hover: {
        boxShadow: 'cardBoxShadow_hover',
        bg: 'cardBgHover',
        transform: 'scale(1.03)',
      },
      boxShadow: 'cardBoxShadow',
      fontWeight: 'normal',
      whiteSpace: 'wrap',
      h: '100%',
      w: {
        base: '75vw',
        sm: '75vw',
        md: '100%',
      },
      backdropFilter: 'blur(40px)',
      display: 'flex',
      flexDirection: 'column',
      bg: 'cardBg',
      boxSizing: 'border-box',
      borderRadius: 'lg',
      p: {
        base: 5,
        sm: 5,
        md: 8,
        lg: 9,
        xl: 10,
        '2xl': 12,
      },
    },
    solid: {
      ...solid,
      bgColor: 'buttonSolidBg',
      color: 'buttonSolidColor',
      boxShadow: 'cardBoxShadow',
      _hover: {
        bgColor: 'buttonSolidBg_hover',
        boxShadow: 'cardBoxShadow_hover',
        _disabled: {
          boxShadow: 'none',
          bgColor: 'buttonSolidBg_disabled',
        },
      },
      _active: {
        bgColor: 'whiteAlpha.500',
        boxShadow: 'cardBoxShadow_hover',
      },
      _disabled: {
        color: 'buttonSolidColor_disabled',
        boxShadow: 'none',
        bgColor: 'buttonSolidBg_disabled',
      },
      // bgGradient: "linear(to-br, primaryGradient1, primaryGradient2)",
      // boxShadow: "0px 0px 25px -5px #7a0d6b",
      // _hover: {
      //   ...solid._hover,
      //   bgGradient: "linear(to-br, primaryGradient1, primaryGradient2)",
      // },
      // _active: {
      //   ...solid._active,
      //   bgGradient: "linear(to-br, primaryGradient1, primaryGradient2)",
      // },
    },
    solidAccent: {
      ...solid,
      color: 'buttonAccentColor',
      bgGradient: 'linear(to-br, primaryGradient2, primaryGradient1)',
      boxShadow: 'buttonAccentShadow',
      _hover: {
        ...solid._hover,
        bgGradient: 'linear(to-br, primaryGradient2, primaryGradient1)',
        boxShadow: 'buttonAccentShadow_hover',
        _disabled: {
          boxShadow: 'none',
          bgColor: 'buttonAccentBg_disabled',
        },
      },
      _active: {
        ...solid._active,
        bgGradient: 'linear(to-br, primaryGradient2, primaryGradient1)',
        boxShadow: 'buttonAccentShadow_hover',
      },
      _disabled: {
        color: 'buttonAccentColor_disabled',
        bgGradient: 'none',
        boxShadow: 'none',
        bgColor: 'buttonAccentBg_disabled',
      },
    },
    solidSelect: {
      ...solid,
      bgGradient:
        'linear(to-br, select.primaryGradient1, select.primaryGradient2)',
      _before: {
        ...solid._before,
        boxShadow: 'select.default',
      },
      _hover: {
        ...solid._hover,
        _before: {
          boxShadow: 'select.hover',
        },
      },
      _active: {
        ...solid._active,
        _before: {
          boxShadow: 'select.active',
        },
      },
    },
    solidCreate: {
      ...solid,
      bgGradient:
        'linear(to-br, create.primaryGradient1, create.primaryGradient2)',
      _before: {
        ...solid._before,
        boxShadow: 'create.default',
      },
      _hover: {
        ...solid._hover,
        _before: {
          boxShadow: 'create.hover',
        },
      },
      _active: {
        ...solid._active,
        _before: {
          boxShadow: 'create.active',
        },
      },
    },
    solidUpdate: {
      ...solid,
      bgGradient:
        'linear(to-br, update.primaryGradient1, update.primaryGradient2)',
      _before: {
        ...solid._before,
        boxShadow: 'update.default',
      },
      _hover: {
        ...solid._hover,
        _before: {
          boxShadow: 'update.hover',
        },
      },
      _active: {
        ...solid._active,
        _before: {
          boxShadow: 'update.active',
        },
      },
    },
    solidDelete: {
      ...solid,
      bgGradient:
        'linear(to-br, delete.primaryGradient1, delete.primaryGradient2)',
      _before: {
        ...solid._before,
        boxShadow: 'delete.default',
      },
      _hover: {
        ...solid._hover,
        _before: {
          boxShadow: 'delete.hover',
        },
      },
      _active: {
        ...solid._active,
        _before: {
          boxShadow: 'delete.active',
        },
      },
    },
    outline: {
      _hover: {
        bg: 'buttonOutlineBg_hover',
        borderColor: 'buttonOutlineBorderColor_hover',
        boxShadow: 'cardBoxShadow_hover',
      },
      borderColor: 'buttonOutlineBorderColor',
      color: 'buttonOutlineColor',
    },
    ghost: {
      _hover: {
        bg: 'buttonOutlineBg_hover',
        // borderColor: 'buttonOutlineBorderColor_hover',
        boxShadow: 'cardBoxShadow_hover',
      },
      // borderColor: 'buttonOutlineBorderColor',
      color: 'buttonOutlineColor',
    },
  },
}
