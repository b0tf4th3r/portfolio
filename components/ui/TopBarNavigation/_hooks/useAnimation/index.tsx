import { useAnimate, useInView } from 'framer-motion'
import React, { useEffect } from 'react'

export const useAnimation = () => {
  const [scope, animate] = useAnimate()
  const isInView = useInView(scope)

  useEffect(() => {
    if (isInView) {
      animate(
        '.navigationItem',
        { y: 0, opacity: 1 },
        {
          type: 'spring',
          stiffness: 100,
          delay: (index) => {
            return index * 0.1
          },
        },
      )
    }
  }, [isInView])

  return { scope }
}
