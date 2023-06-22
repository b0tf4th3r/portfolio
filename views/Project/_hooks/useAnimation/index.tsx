import { useAnimate, useInView } from 'framer-motion'
import React, { useEffect } from 'react'

import { ProjectViewUseAnimationInput } from './_types'

export const useAnimation = (
  useAnimationInput: ProjectViewUseAnimationInput,
) => {
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
        },
      )

      animate(
        '.groupTitle',
        { y: 0, opacity: 1 },
        {
          type: 'spring',
          stiffness: 100,
          delay: (index) => {
            return 0.2 + index * 0.1
          },
        },
      )

      animate(
        '.badge',
        { x: 0, opacity: 1 },
        {
          type: 'spring',
          stiffness: 100,
          delay: (index) => {
            return 0.4 + index * 0.025
          },
        },
      )

      animate(
        '.description',
        { x: 0, opacity: 1 },
        {
          type: 'spring',
          stiffness: 100,
          delay: 0.6,
        },
      )

      if (!useAnimationInput.data.project) return

      if (useAnimationInput.data.project.imagesUrls.length > 0)
        animate(
          '.image',
          { x: 0, opacity: 1 },
          {
            type: 'spring',
            stiffness: 100,
            delay: (index) => {
              return 0.6 + index * 0.1
            },
          },
        )

      if (useAnimationInput.data.project.githubUrl)
        animate(
          '.button',
          { y: 0, opacity: 1 },
          {
            type: 'spring',
            stiffness: 100,
            delay: 0.8,
          },
        )
    }
  }, [isInView])

  return { scope }
}
