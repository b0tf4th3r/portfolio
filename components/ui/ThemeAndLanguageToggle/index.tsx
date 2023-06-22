import {
  Box,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorMode,
} from '@chakra-ui/react'
import React from 'react'
import { ChevronDown, Moon, Sun } from 'react-feather'
import { useTranslation } from 'react-i18next'
import { languages } from 'shared/_constants/language'

import { useStore } from 'components/logic/Store'

export const ThemeAndLanguageToggle = () => {
  const { t } = useTranslation()

  const { language, toggleLanguage } = useStore()

  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Menu placement='auto'>
      <HStack spacing='20px'>
        <Box>
          {colorMode === 'dark' ? (
            <IconButton
              aria-label='dark'
              variant='outline'
              icon={<Moon />}
              onClick={toggleColorMode}
            />
          ) : (
            <IconButton
              aria-label='light'
              icon={<Sun />}
              variant='outline'
              onClick={toggleColorMode}
            />
          )}
        </Box>

        <MenuButton
          as={IconButton}
          aria-label='More'
          icon={
            <HStack
              dir='row'
              alignItems='center'
              spacing='5px'
              w='82px'
              justifyContent='center'
            >
              <Text>
                {languages.find((lang) => lang.id === language)?.flag}
              </Text>

              <Text>{languages.find((lang) => lang.id === language)?.id}</Text>

              <ChevronDown size='15px' />
            </HStack>
          }
          variant='outline'
        >
          {t('_shared._More')}
        </MenuButton>

        <MenuList mt='3px' minW='0' w='112px'>
          {languages.map((lang, i) => (
            <MenuItem key={i} onClick={() => toggleLanguage(lang.id)}>
              <Text>{lang.flag}</Text>

              <Text ml='10px'>{lang.label}</Text>
            </MenuItem>
          ))}
        </MenuList>
      </HStack>
    </Menu>
  )
}
