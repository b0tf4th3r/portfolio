import { TechnologyName } from './technology'

export type Project = {
  id: string
  name: string
  type: ProjectType
  description: string
  readMoreUrl: string
  imagesUrls: string[]
  githubUrl?: string
  technologiesNames: TechnologyName[]
}

export type ProjectType = 'private' | 'openSource'
