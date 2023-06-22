import { useAnimate, useInView } from 'framer-motion'
import _ from 'lodash'
import React, { useEffect, useState } from 'react'

import { HomeViewProjectsUseAnimationInput } from './_types'

export const useAnimation = (
  useAnimationInput: HomeViewProjectsUseAnimationInput,
) => {
  const [scope, animate] = useAnimate()
  const isInView = useInView(scope)

  const [previousListItems, setPreviousListItems] = useState(
    useAnimationInput.list.items,
  )

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
        '.filtersElement',
        { x: 0, opacity: 1 },
        {
          type: 'spring',
          stiffness: 100,
          delay: (index) => {
            return 0.35 + index * 0.2
          },
        },
      )

      animate(
        '.card',
        { x: 0, opacity: 1 },
        {
          stiffness: 100,
          type: 'spring',
          delay: _.isEqual(previousListItems, useAnimationInput.list.items)
            ? (index) => {
                return 0.55 + index * 0.2
              }
            : undefined,
        },
      )

      setPreviousListItems(useAnimationInput.list.items)
    }
  }, [isInView, useAnimationInput.list.items])

  return { scope }
}
