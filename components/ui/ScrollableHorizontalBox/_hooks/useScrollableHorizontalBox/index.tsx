import React from 'react'
import { useWindowSize } from 'shared/_hooks'

import { UseScrollableHorizontalBoxInput } from './_types'

export const useScrollableHorizontalBox = (
  useScrollableHorizontalBoxInput: UseScrollableHorizontalBoxInput,
) => {
  const windowSize = useWindowSize()

  const boxRef = React.useRef<HTMLDivElement>(null)

  const [isLeftArrowVisible, setIsLeftArrowVisible] = React.useState(false)
  const [isRightArrowVisible, setIsRightArrowVisible] = React.useState(true)

  const scrollToRight = () => {
    if (!boxRef.current || !windowSize.width) return

    boxRef.current.scrollBy({
      behavior: 'smooth',
      left: (boxRef.current.clientWidth * 2) / 3,
    })
  }

  const scrollToLeft = () => {
    if (!boxRef.current || !windowSize.width) return

    boxRef.current.scrollBy({
      behavior: 'smooth',
      left: -(boxRef.current.clientWidth * 2) / 3,
    })
  }

  React.useEffect(() => {
    function updateScrollLeftPosition() {
      if (!boxRef.current || !windowSize.width) return

      if (windowSize.width >= boxRef.current.scrollWidth) {
        setIsLeftArrowVisible(false)
        setIsRightArrowVisible(false)
      }

      if (boxRef.current.scrollLeft > 50) {
        setIsLeftArrowVisible(true)
      } else {
        setIsLeftArrowVisible(false)
      }

      if (
        boxRef.current.scrollLeft + boxRef.current.offsetWidth + 50 >
        boxRef.current.scrollWidth
      ) {
        setIsRightArrowVisible(false)
      } else {
        setIsRightArrowVisible(true)
      }
    }

    if (boxRef.current) {
      if (boxRef.current.scrollWidth === boxRef.current.offsetWidth)
        setIsRightArrowVisible(false)

      if (boxRef.current.scrollWidth > boxRef.current.offsetWidth)
        setIsRightArrowVisible(true)

      boxRef.current.addEventListener('scroll', updateScrollLeftPosition, false)

      return function cleanup() {
        boxRef.current?.removeEventListener(
          'scroll',
          updateScrollLeftPosition,
          false,
        )
      }
    }
  }, [
    boxRef.current,
    windowSize.width,
    boxRef.current?.scrollWidth,
    boxRef.current?.scrollHeight,
    setIsLeftArrowVisible,
    setIsRightArrowVisible,
  ])

  return {
    boxRef,
    scrollToRight,
    scrollToLeft,
    isLeftArrowVisible,
    isRightArrowVisible,
  }
}
