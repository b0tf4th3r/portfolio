import { ComponentMultiStyleConfig } from '@chakra-ui/react'

export const Modal: ComponentMultiStyleConfig = {
  parts: ['dialog'],
  baseStyle: {
    dialog: {
      position: 'relative',
      // boxShadow: "0px 0px 25px -5px rgba(0,0,0,0.3)",
      bg: 'background',

      // bg: "whiteAlpha.200",
      // backdropFilter: "auto",
      // backdropBlur: "30px",
      my: {
        // base: `${appLayoutContentPadding.base}px`,
        // sm: `${appLayoutContentPadding.sm}px`,
        // md: `${appLayoutContentPadding.md}px`,
        // lg: `${appLayoutContentPadding.lg}px`,
        // xl: `${appLayoutContentPadding.xl}px`,
        // '2xl': `${appLayoutContentPadding['2xl']}px`,
      },
      // mx: {
      //   base: `${appLayoutContentPadding.base}px`,
      //   sm: `${appLayoutContentPadding.sm}px`,
      //   md: `${appLayoutContentPadding.md}px`,
      //   lg: `${appLayoutContentPadding.lg}px`,
      //   xl: `${appLayoutContentPadding.xl}px`,
      //   "2xl": `${appLayoutContentPadding["2xl"]}px`,
      // },
    },
    header: {
      boxShadow: 'lg',
      position: 'relative',
    },
    body: {
      position: 'relative',
      // _before: {
      //   content: `''`,
      //   position: "absolute",
      //   // w: "100%",
      //   // h: "100%",
      //   top: 0,
      //   right: 0,
      //   bottom: 0,
      //   left: 0,
      //   backdropFilter: "auto",
      //   backdropBlur: "30px",
      //   zIndex: -1,
      // },
      p: '24px',
    },
    footer: {
      pt: '0px',
    },
  },
}
