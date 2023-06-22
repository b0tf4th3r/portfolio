import { themeColors } from '../colors'

export const semanticTokens = {
  shadows: {
    // ? card
    cardBoxShadow: {
      _dark: 'none',
      default:
        '0 0 15px -5px rgba(0, 0, 0, 0.07), 0 0 35px -5px rgba(0, 0, 0, 0.05)',
    },
    cardBoxShadow_hover: {
      _dark: 'none',
      default:
        '0 0 15px -5px rgba(0, 0, 0, 0.15), 0 0 35px -5px rgba(0, 0, 0, 0.1)',
    },
    // ? button > accent
    buttonAccentShadow: {
      _dark: 'none',
      default: `0px 0px 25px -5px ${themeColors.primaryGradient2}`,
    },
    buttonAccentShadow_hover: {
      _dark: 'none',
      default: `0px 0px 30px -5px ${themeColors.primaryGradient2}`,
    },
  },
  colors: {
    backgroundGradient1: {
      _dark: themeColors.background.dark.gradient1,
      default: themeColors.background.light.gradient1,
    },
    backgroundGradient2: {
      _dark: themeColors.background.dark.gradient2,
      default: themeColors.background.light.gradient2,
    },
    borderBg: {
      _dark: 'whiteAlpha.300',
      default: 'blackAlpha.300',
    },
    // ! text
    textAccent: {
      _dark: 'white',
      default: 'blackAlpha.900',
    },
    textNormal: {
      _dark: 'whiteAlpha.700',
      default: 'blackAlpha.600',
    },
    textInsignificant: {
      _dark: 'whiteAlpha.300',
      default: 'blackAlpha.400',
    },
    // ! button
    // ? button > solid
    buttonSolidBg: {
      _dark: 'whiteAlpha.300',
      default: 'white',
    },
    buttonSolidBg_hover: {
      _dark: 'whiteAlpha.400',
      default: 'white',
    },
    buttonSolidColor_disabled: {
      _dark: 'white',
      default: 'black',
    },
    buttonSolidBg_disabled: {
      _dark: 'whiteAlpha.400',
      default: 'blackAlpha.400',
    },
    buttonSolidColor: {
      _dark: 'white',
      default: 'black',
    },
    // ? button > outline
    buttonOutlineColor: {
      _dark: 'whiteAlpha.800',
      default: 'black',
    },
    buttonOutlineBorderColor: {
      _dark: 'whiteAlpha.300',
      default: 'blackAlpha.300',
    },
    buttonOutlineBorderColor_hover: {
      _dark: 'whiteAlpha.800',
      default: 'white',
    },
    buttonOutlineBg_hover: {
      _dark: 'whiteAlpha.300',
      default: 'white',
    },
    // ? button > accent
    buttonAccentColor: {
      _dark: 'white',
      default: 'white',
    },
    buttonAccentColor_disabled: {
      _dark: 'white',
      default: 'white',
    },
    buttonAccentBg_disabled: {
      _dark: 'whiteAlpha.400',
      default: 'blackAlpha.600',
    },
    // ! input
    inputBg: {
      _dark: 'whiteAlpha.300',
      default: 'white',
    },
    inputBg_hover: {
      _dark: 'whiteAlpha.400',
      default: 'white',
    },
    inputBg_focus: {
      _dark: 'whiteAlpha.500',
      default: 'white',
    },
    // ! card
    cardBg: {
      _dark: 'whiteAlpha.200',
      default: 'whiteAlpha.600',
    },
    cardBg_hover: {
      _dark: 'whiteAlpha.400',
      default: 'white',
    },
    // ! table
    thead: {
      _dark: '#5e5e60',
      default: '#fafafa',
    },
    // ! dialog
    dialog: {
      _dark: '#242429',
      default: '#dddded',
    },
  },
}
