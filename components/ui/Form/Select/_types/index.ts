import { FormControlProps } from '@chakra-ui/react'
import { UseFormReturn } from 'react-hook-form'
import {
  GroupedRelationOption,
  GroupedStringOption,
  RelationOption,
  StringOption,
} from 'shared/_types'

export type FormSelectProps = {
  name: string
  label?: string
  placeholder?: string
  form: UseFormReturn<any>
  componentsProps?: {
    root?: FormControlProps
  }
  isMultiple?: boolean
  isDisabled?: boolean
  isRequired?: boolean
  options:
    | RelationOption[]
    | StringOption[]
    | GroupedStringOption[]
    | GroupedRelationOption[]
  errorText?: string
}
