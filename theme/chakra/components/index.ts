import { theme as origTheme } from '@chakra-ui/react'

import { Badge } from './Badge'
import { Breadcrumb } from './Breadcrumb'
import { Button } from './Button'
import { Divider } from './Divider'
import { Drawer } from './Drawer'
import { Form } from './Form'
import { Input } from './Input'
import { Menu } from './Menu'
import { Modal } from './Modal'
import { NumberInput } from './NumberInput'
import { Popover } from './Popover'
import { Select } from './Select'
import { Table } from './Table'
import { Text } from './Text'
import { Textarea } from './Textarea'
import { Tooltip } from './Tooltip'
import { Card } from './Card'

export const components = {
  // ? chakra
  Button,
  Breadcrumb,
  Card,
  Divider,
  Drawer,
  Table,
  Modal,
  Form,
  Input,
  Text,
  Badge,
  Select,
  NumberInput,
  Menu,
  Tooltip,
  Textarea,
  Popover,
  Alert: {
    variants: {
      solid: (props: any) => {
        const { colorScheme: c } = props

        if (c !== 'blue' && c !== 'green' && c !== 'red') {
          // use original definition for all color schemes except "blue"
          return origTheme.components.Alert.variants?.solid(props)
        }

        return {
          container: {
            bgGradient: `linear(to-tr, ${c}.300 0%, rgba(255, 255, 255, 0.2))`,
            bg: 'transparent',
            color: 'textAccent',
            borderRadius: 'md',
          },
        }
      },
    },
  },

  // ? custom
}
