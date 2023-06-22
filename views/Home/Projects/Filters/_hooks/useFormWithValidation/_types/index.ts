import { Technology } from 'shared/_types'
import { ProjectType } from 'shared/_types/project'

export type ProjectsFiltersUseFormWithValidationValues = {
  types: { value: ProjectType; label: string }[]
  technologies: {
    value: Technology['name']
    label: string
  }[]
}
