import { ProjectType, Technology } from 'shared/_types'

export type HomeViewProjectsUseFiltersInput = {
  onFiltersChange: () => void
}

export type HomeViewProjectsUseFiltersApplyFiltersInput = {
  values: HomeViewProjectsUseFiltersValues
}

export type HomeViewProjectsUseFiltersValues = {
  types: {
    value: ProjectType
    label: string
  }[]
  technologies: {
    value: Technology['name']
    label: string
  }[]
}
