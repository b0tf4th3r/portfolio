import { Spinner } from '@chakra-ui/react'
import * as NextRouter from 'next/router'
import React from 'react'
import { getNextRouterQueryParameter } from 'shared/_utils'

import { ProjectView } from 'views/Project'

const ProjectsProjectPage = () => {
  const router = NextRouter.useRouter()

  const projectId = getNextRouterQueryParameter(router.query.projectId)

  console.log({ projectId })

  if (!projectId) return <Spinner />

  return <ProjectView projectId={projectId} />
}

export default ProjectsProjectPage
