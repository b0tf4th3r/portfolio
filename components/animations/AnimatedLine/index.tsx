import { Box, keyframes } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'

import { AnimatedLineProps } from './_types'

export const AnimatedLine = (props: AnimatedLineProps) => {
  const fromBottomToTopAnimationKeyframes = keyframes`
    0% { transform: scale(100%, 0%); transform-origin: top; }
    10% { transform: scale(100%, 100%); transform-origin: top; }
    11% { transform: scale(100%, 100%); transform-origin: bottom; }
    21% { transform: scale(100%, 10%); transform-origin: bottom; }
    22% { transform: scale(100%, 10%); transform-origin: bottom left; }
    100% { transform: scale(0%, 10%); transform-origin: bottom left; }
    `

  const animation = `${
    props.variant === 'fromBottomToTop' ? fromBottomToTopAnimationKeyframes : ''
  } ${props.animationLengthInMs}ms ease-in-out infinite`

  return (
    <Box
      as={motion.div}
      animation={animation}
      bgGradient='linear(to-l, #7928CA, #FF0080)'
      {...props.rootProps}
    />
  )
}
