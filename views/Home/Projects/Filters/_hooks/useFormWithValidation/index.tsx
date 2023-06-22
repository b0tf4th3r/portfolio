import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { ProjectsFiltersUseFormWithValidationValues } from './_types'

export const useFormWithValidation = () => {
  const schema = yup.object().shape({
    types: yup.array(),
    technologies: yup.array(),
  })

  const form = useForm<ProjectsFiltersUseFormWithValidationValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      types: [],
      technologies: [],
    },
    mode: 'all',
  })

  return {
    form,
  }
}
