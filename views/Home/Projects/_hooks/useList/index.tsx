import React from 'react'
import { allProjects } from 'shared/_constants'

import {
  HomeViewProjectsUseListInput,
  HomeViewProjectsUseListItem,
} from './_types'

export const useList = (useListInput: HomeViewProjectsUseListInput) => {
  const defaultItems = allProjects

  const [items, setItems] =
    React.useState<HomeViewProjectsUseListItem[]>(defaultItems)

  const applyFiltersToItems = () => {
    const newItems = defaultItems
      .filter((item) =>
        useListInput.filters.values.types.length > 0
          ? useListInput.filters.values.types.some(
              (type) => type.value === item.type,
            )
          : true,
      )
      .filter((item) =>
        useListInput.filters.values.technologies.length > 0
          ? item.technologiesNames.some((technologyName) =>
              useListInput.filters.values.technologies.some(
                (technology) => technology.value === technologyName,
              ),
            )
          : true,
      )

    setItems(newItems)
  }

  return { items, applyFiltersToItems }
}
