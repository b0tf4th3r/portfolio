import { AnimatedLineProps } from 'components/animations/AnimatedLine/_types'

export type OneLineTextWithAnimatedBackgroundSliderProps = {
  texts: string[]
  animatedLineProps?: AnimatedLineProps['rootProps']
  animationLengthInMs: number
}
