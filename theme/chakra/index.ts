import { extendTheme } from '@chakra-ui/react'

import { themeColors } from '../colors'
import { fonts } from '../fonts'
import { components } from './components'
import { config } from './config'
import { layerStyles } from './layerStyles'
import { semanticTokens } from './semanticTokens'
import { styles } from './styles'

export const theme = extendTheme({
  config,
  semanticTokens,
  colors: themeColors,
  styles,
  layerStyles,
  fonts,
  components,
})
