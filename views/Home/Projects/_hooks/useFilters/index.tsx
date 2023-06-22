import React from 'react'

import {
  HomeViewProjectsUseFiltersApplyFiltersInput,
  HomeViewProjectsUseFiltersInput,
  HomeViewProjectsUseFiltersValues,
} from './_types'

export const useFilters = (
  useFiltersInput: HomeViewProjectsUseFiltersInput,
) => {
  const [values, setValues] = React.useState<HomeViewProjectsUseFiltersValues>({
    types: [],
    technologies: [],
  })

  const applyFilters = (
    applyFiltersInput: HomeViewProjectsUseFiltersApplyFiltersInput,
  ) => {
    setValues({
      ...applyFiltersInput.values,
    })
  }

  React.useEffect(() => {
    useFiltersInput.onFiltersChange()
  }, [values])

  return { values, applyFilters }
}
