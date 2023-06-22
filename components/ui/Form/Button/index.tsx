import { Button } from '@chakra-ui/react'
import React from 'react'

import { FormButtonProps } from './_types'

export const FormButton = (props: FormButtonProps) => {
  return (
    <Button
      variant='solidAccent'
      type='submit'
      w='100%'
      leftIcon={props.leftIcon}
      isLoading={props.isLoading}
      isDisabled={props.isDisabled}
      {...props.componentsProps?.root}
    >
      {props.text}
    </Button>
  )
}
