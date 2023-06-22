import { ProjectType, Technology } from 'shared/_types'

export type HomeViewProjectsFiltersUseOptionsFields = {
  types: {
    value: ProjectType
    label: string
  }[]
  technologies: {
    label: string
    options: { value: Technology['name']; label: string }[]
  }[]
}
