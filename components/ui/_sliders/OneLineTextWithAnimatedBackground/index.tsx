import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { useLoopedSlider } from 'shared/_hooks'

import { AnimatedLine } from 'components/animations'

import { OneLineTextWithAnimatedBackgroundSliderProps } from './_types'

export const OneLineTextWithAnimatedBackgroundSlider = (
  props: OneLineTextWithAnimatedBackgroundSliderProps,
) => {
  const slider = useLoopedSlider({
    itemsCount: props.texts.length,
    changeSlideIntervalInMs: 3000,
    changeSlideIntervalDelayInMs: 200,
  })

  return (
    <Box position='relative'>
      <AnimatedLine
        rootProps={{
          ...props.animatedLineProps,
        }}
        variant='fromBottomToTop'
        animationLengthInMs={props.animationLengthInMs}
      />

      {props.texts.map((text, i) => (
        <Box
          key={i}
          w='100%'
          mx='auto'
          display='flex'
          alignItems='center'
          position='absolute'
          zIndex={-1}
          top={0}
        >
          <Heading
            opacity={slider.currentSlideIndex === i ? 1 : 0}
            mx={['auto', null, '0']}
            whiteSpace='nowrap'
            fontSize={['8.1vw', '8.3vw', '5vw', '4vw', '70px']}
          >
            {text}
          </Heading>
        </Box>
      ))}
    </Box>
  )
}
