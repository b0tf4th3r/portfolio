import { ButtonProps } from '@chakra-ui/react'

export type FormButtonProps = {
  text: string
  isLoading?: boolean
  isDisabled?: boolean
  leftIcon?: JSX.Element
  componentsProps?: {
    root?: ButtonProps
  }
}
