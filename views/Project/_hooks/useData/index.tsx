import React from 'react'
import { allProjects, allTechnologies } from 'shared/_constants'

import { ProjectViewUseDataInput } from './_types'

export const useData = (useDataInput: ProjectViewUseDataInput) => {
  const project = allProjects.find(
    (project) => project.id === useDataInput.projectId,
  )

  const allTechnologiesFilteredByProjectTechnologies = allTechnologies.filter(
    (technology) => project?.technologiesNames.includes(technology.name),
  )

  return {
    project,
    allTechnologiesFilteredByProjectTechnologies,
  }
}
