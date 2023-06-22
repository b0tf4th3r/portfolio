import React from 'react'
import { useTranslation } from 'react-i18next'
import { allTechnologies } from 'shared/_constants'

import { HomeViewProjectsFiltersUseOptionsFields } from './_types'

export const useOptions = () => {
  const { t } = useTranslation()

  const [fields] = React.useState<HomeViewProjectsFiltersUseOptionsFields>({
    types: [
      {
        value: 'private',
        label: t('shared._Private'),
      },
      {
        value: 'openSource',
        label: t('shared._Open_source'),
      },
    ],
    technologies: [
      {
        label: t('shared._Languages'),
        options: allTechnologies
          .filter((technology) => technology.group === 'language')
          .map((technology) => ({
            value: technology.name,
            label: technology.label,
          })),
      },
      {
        label: t('shared._Backend'),
        options: allTechnologies
          .filter((technology) => technology.group === 'backend')
          .map((technology) => ({
            value: technology.name,
            label: technology.label,
          })),
      },
      {
        label: t('shared._Frontend'),
        options: allTechnologies
          .filter((technology) => technology.group === 'frontend')
          .map((technology) => ({
            value: technology.name,
            label: technology.label,
          })),
      },
      {
        label: t('shared._Automation'),
        options: allTechnologies
          .filter((technology) => technology.group === 'automation')
          .map((technology) => ({
            value: technology.name,
            label: technology.label,
          })),
      },
      {
        label: t('shared._Other'),
        options: allTechnologies
          .filter((technology) => technology.group === 'other')
          .map((technology) => ({
            value: technology.name,
            label:
              technology.label.search('_') !== -1
                ? t(technology.label)
                : technology.label,
          })),
      },
    ],
  })

  return { fields }
}
