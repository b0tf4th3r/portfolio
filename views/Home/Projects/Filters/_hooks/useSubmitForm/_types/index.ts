import { ProjectsFiltersProps } from '../../../_types'
import { ProjectsFiltersUseFormWithValidationValues } from '../../useFormWithValidation/_types'

export type ProjectsFiltersUseSubmitFormInput = {
  filters: ProjectsFiltersProps['filters']
}

export type ProjectsFiltersUseSubmitFormExecuteInput = {
  values: ProjectsFiltersUseFormWithValidationValues
}
