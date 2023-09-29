export type Technology = {
  name: TechnologyName
  label: string
  group: TechnologyGroup
  imageUrl?: string
  icon?: JSX.Element
}

export type TechnologyGroup =
  | 'language'
  | 'backend'
  | 'frontend'
  | 'automation'
  | 'other'

export type TechnologyName =
  // ! language
  | 'tsjs'
  | 'csharp'
  | 'python'
  | 'graphql'
  // ! backend
  | 'nestjs'
  | 'nodejs'
  | 'typegraphql'
  | 'postgresql'
  | 'mysql'
  | 'prisma'
  | 'apollo'
  | 'kafka'
  // ! frontend
  | 'react'
  | 'reactnative'
  | 'nextjs'
  | 'chakraui'
  | 'mui'
  | 'styledcomponents'
  | 'sass'
  // ! automation
  | 'playwright'
  | 'puppeteer'
  | 'jest'
  | 'nutjs'
  | 'scrapysplash'
  // ! other
  | 'docker'
  | 'git'
  | 'prometheus'
  | 'grafana'
  | 'graylog'
  | 'win32api'
  | 'gamehacking'
