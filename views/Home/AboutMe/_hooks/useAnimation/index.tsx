import { useAnimate, useInView } from 'framer-motion'
import React, { useEffect } from 'react'

export const useAnimation = () => {
  const [scope, animate] = useAnimate()
  const isInView = useInView(scope)

  useEffect(() => {
    if (isInView) {
      animate(
        '.card',
        { opacity: 1, transform: 'translateX(0vw)' },
        {
          duration: 0.5,
          ease: 'anticipate',
          delay: 0.2,
        },
      )
    }
  }, [isInView])

  return { scope }
}
