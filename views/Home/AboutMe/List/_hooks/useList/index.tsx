import React from 'react'
import { useTranslation } from 'react-i18next'
import { allTechnologies } from 'shared/_constants'

import { AboutMeListUseListItem } from './_types'

export const useList = () => {
  const { t } = useTranslation()

  const items: AboutMeListUseListItem[] = [
    {
      heading: t('shared._Languages'),
      technologies: allTechnologies.filter(
        (technology) => technology.group === 'language',
      ),
    },
    {
      heading: t('shared._Backend'),
      technologies: allTechnologies.filter(
        (technology) => technology.group === 'backend',
      ),
    },
    {
      heading: t('shared._Frontend'),
      technologies: allTechnologies.filter(
        (technology) => technology.group === 'frontend',
      ),
    },
    {
      heading: t('shared._Automation'),
      technologies: allTechnologies.filter(
        (technology) => technology.group === 'automation',
      ),
    },
    {
      heading: t('shared._Other'),
      technologies: allTechnologies.filter(
        (technology) => technology.group === 'other',
      ),
    },
  ]

  return { items }
}
