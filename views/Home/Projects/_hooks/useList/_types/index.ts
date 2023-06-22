import { Project } from 'shared/_types/project'

import { useFilters } from '../../useFilters'

export type HomeViewProjectsUseListInput = {
  filters: ReturnType<typeof useFilters>
}

export type HomeViewProjectsUseListItem = Project
