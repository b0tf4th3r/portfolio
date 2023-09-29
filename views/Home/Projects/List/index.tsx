import { Alert, AlertIcon, Box } from '@chakra-ui/react'
import React from 'react'
import { useTranslation } from 'react-i18next'

import { MaxWidthLayout } from 'components/layouts'
import { ScrollableHorizontalBox } from 'components/ui'

import { ListCard } from './Card'
import { ProjectsListProps } from './_types'

export const ProjectsList = (props: ProjectsListProps) => {
  const { t } = useTranslation()

  const thereAreSomeItems = props.list.items.length !== 0

  return (
    <Box>
      {!thereAreSomeItems && (
        <MaxWidthLayout>
          <Alert status='info' mt={[4, 8, 16]}>
            <AlertIcon />
            {t('shared._No_projects_found')}
          </Alert>
        </MaxWidthLayout>
      )}

      {thereAreSomeItems && (
        <ScrollableHorizontalBox
          shouldCenterItems={true}
          componentsProps={{
            root: { mt: [8, null, 16], p: [4, 8, null, null, 16] },
          }}
        >
          <>
            {props.list.items.map((project, i) => (
              <ListCard project={project} key={i} isLastCard={i === props.list.items.length - 1} />
            ))}
          </>
        </ScrollableHorizontalBox>
      )}
    </Box>
  )
}
