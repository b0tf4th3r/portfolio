import { ComponentSingleStyleConfig } from '@chakra-ui/react'

export const Text: ComponentSingleStyleConfig = {
  variants: {
    description: {
      whiteSpace: 'nowrap',
      color: 'textNormal',
      fontSize: 'x-small',
      textTransform: 'uppercase',
      letterSpacing: '1.5px',
      fontWeight: 'bold',
    },
    pageDescription: {
      color: 'textNormal',
    },
    submoduleTitle: {
      color: 'textAccent',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      mt: {
        base: '5vh',
        sm: '5vh',
        md: '30px',
        lg: '30px',
        xl: '30px',
      },
      mb: '10px',
    },
    submoduleDescription: {
      color: 'textNormal',
      textTransform: 'none',
    },
    credentialsTitle: {
      color: 'textAccent',
      fontSize: '3xl',
    },
    credentialsBottomText: {
      color: 'textNormal',
      mt: {
        base: '5vh',
        sm: '15vh',
        md: '20px',
        lg: '20px',
        xl: '20px',
      },
    },
  },
}
