import {
  Text,
  FormControl,
  FormErrorMessage,
  FormLabel,
} from '@chakra-ui/react'
import { Select } from 'chakra-react-select'
import { Controller } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { FormSelectProps } from './_types'

export const FormSelect = (props: FormSelectProps) => {
  const { t } = useTranslation()

  return (
    <Controller
      control={props.form.control}
      name={props.name}
      render={({ field: { onChange, onBlur, value, name, ref } }) => {
        return (
          <FormControl
            isInvalid={
              props.errorText
                ? true
                : props.form.formState.errors[name]
                ? true
                : false
            }
            id={name}
            {...props.componentsProps?.root}
          >
            {props.label && (
              <FormLabel htmlFor={name}>
                {props.label}{' '}
                {!props.isRequired && (
                  <Text display='inline-block' color='textInsignificant'>
                    ({t('shared._optional')})
                  </Text>
                )}
              </FormLabel>
            )}

            <Select
              name={name}
              ref={ref}
              blurInputOnSelect={false}
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              options={props.options}
              placeholder={
                props.placeholder ? props.placeholder : t('shared._Select')
              }
              isDisabled={props.isDisabled}
              isRequired={props.isRequired}
              closeMenuOnSelect={false}
              isClearable
              isMulti={props.isMultiple}
              variant='filled'
            />

            {props.form.formState.errors[name] && (
              <FormErrorMessage>
                {props.form.formState.errors[name]?.message?.toString()}
              </FormErrorMessage>
            )}

            {props.errorText && (
              <FormErrorMessage>{props.errorText}</FormErrorMessage>
            )}
          </FormControl>
        )
      }}
    />
  )
}
