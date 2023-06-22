import { useAnimate, useInView } from 'framer-motion'
import React, { useEffect } from 'react'

export const useAnimation = () => {
  const [scope, animate] = useAnimate()
  const isInView = useInView(scope)

  useEffect(() => {
    if (isInView) {
      animate(
        '.headingIcon',
        { y: 0, opacity: 1 },
        {
          type: 'spring',
          stiffness: 100,
        },
      )

      animate(
        '.headingFirstLine',
        { y: 0, opacity: 1 },
        {
          type: 'spring',
          stiffness: 100,
          delay: 0.3,
        },
      )

      animate(
        '.headingSecondLine',
        { y: 0, opacity: 1 },
        {
          type: 'spring',
          stiffness: 100,
          delay: 0.4,
        },
      )

      animate(
        '.image',
        { y: 0, opacity: 1 },
        {
          type: 'spring',
          stiffness: 100,
          delay: 0.4,
        },
      )

      animate(
        '.button',
        { x: 0, opacity: 1 },
        {
          type: 'spring',
          stiffness: 100,
          delay: (index) => {
            return 0.6 + index * 0.1
          },
        },
      )
    }
  }, [isInView])

  return { scope }
}
