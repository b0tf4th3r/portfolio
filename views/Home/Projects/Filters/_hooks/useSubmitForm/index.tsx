import { useToast } from '@chakra-ui/react'
import React from 'react'
import { useTranslation } from 'react-i18next'

import {
  ProjectsFiltersUseSubmitFormExecuteInput,
  ProjectsFiltersUseSubmitFormInput,
} from './_types'

export const useSubmitForm = (
  useSubmitFormInput: ProjectsFiltersUseSubmitFormInput,
) => {
  const { t } = useTranslation()

  const toast = useToast()

  const execute = (executeInput: ProjectsFiltersUseSubmitFormExecuteInput) => {
    if (
      executeInput.values.technologies.length === 0 &&
      executeInput.values.types.length === 0
    ) {
      toast({
        status: 'error',
        title: t('shared._Error'),
        description: t('shared._Select_at_least_one_filter'),
      })
      return
    }

    useSubmitFormInput.filters.applyFilters({
      values: executeInput.values,
    })
  }

  return { execute }
}
