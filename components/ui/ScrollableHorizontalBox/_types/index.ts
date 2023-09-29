import { BoxProps } from '@chakra-ui/react'

export type ScrollableHorizontalBoxProps = {
  shouldCenterItems: boolean
  children: JSX.Element
  componentsProps?: {
    root?: BoxProps
  }
}
