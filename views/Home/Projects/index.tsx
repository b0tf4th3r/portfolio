import { Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'
import { useTranslation } from 'react-i18next'

import { MaxWidthLayout } from 'components/layouts'
import { LeftIconHeading } from 'components/ui'

import { ProjectsFilters } from './Filters'
import { ProjectsList } from './List'
import { useAnimation } from './_hooks/useAnimation'
import { useFilters } from './_hooks/useFilters'
import { useList } from './_hooks/useList'
import { HomeViewProjectsProps } from './_types'

export const HomeViewProjects = (props: HomeViewProjectsProps) => {
  const { t } = useTranslation()

  const filters = useFilters({
    onFiltersChange: () => list.applyFiltersToItems(),
  })

  const list = useList({
    filters,
  })

  const animation = useAnimation({
    list,
  })

  return (
    <Box
      pt={[16, null, 32, 64]}
      ref={props.scrollIntoSection.refs.projectsSection}
    >
      <Box ref={animation.scope}>
        <MaxWidthLayout>
          <>
            <motion.div
              className='heading'
              style={{
                y: 50,
                opacity: 0,
              }}
            >
              <LeftIconHeading
                iconName='projects'
                headingText={t('shared._Projects')}
                variant='big'
              />
            </motion.div>

            <ProjectsFilters filters={filters} />
          </>
        </MaxWidthLayout>

        <ProjectsList list={list} />
      </Box>
    </Box>
  )
}
