import { useAnimate, useInView } from 'framer-motion'
import React, { useEffect } from 'react'

export const useAnimation = () => {
  const [scope, animate] = useAnimate()
  const isInView = useInView(scope)

  useEffect(() => {
    if (isInView) {
      animate(
        '.heading',
        { y: 0, opacity: 1 },
        {
          type: 'spring',
          stiffness: 100,
          delay: 0,
        },
      )

      animate(
        '.description',
        { x: 0, opacity: 1 },
        {
          type: 'spring',
          stiffness: 100,
          delay: 0.3,
        },
      )

      animate(
        '.button',
        { x: 0, opacity: 1 },
        {
          type: 'spring',
          stiffness: 100,
          delay: 0.6,
        },
      )
    }
  }, [isInView])

  return { scope }
}
