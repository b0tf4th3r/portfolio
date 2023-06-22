import React from 'react'

import { UseLoopedSliderInput } from './_types'

export const useLoopedSlider = (useLoopedSliderInput: UseLoopedSliderInput) => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0)

  const nextSlide = () => {
    setCurrentSlideIndex((prevState) =>
      prevState === useLoopedSliderInput.itemsCount - 1 ? 0 : prevState + 1,
    )
  }

  const previousSlide = () => {
    setCurrentSlideIndex((prevState) =>
      prevState === 0
        ? useLoopedSliderInput.itemsCount - 1
        : currentSlideIndex - 1,
    )
  }

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        nextSlide()
      }, useLoopedSliderInput.changeSlideIntervalInMs)

      return () => clearInterval(interval)
    }, useLoopedSliderInput.changeSlideIntervalDelayInMs)

    return () => clearInterval(timeout)
  }, [
    useLoopedSliderInput.changeSlideIntervalInMs,
    useLoopedSliderInput.changeSlideIntervalDelayInMs,
  ])

  return { nextSlide, previousSlide, currentSlideIndex }
}
