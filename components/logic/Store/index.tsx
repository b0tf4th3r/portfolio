import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Language } from 'shared/_types'
import { theme } from 'theme/chakra'

import { Icon } from 'components/ui'

import { LOCAL_STORAGE_LANGUAGE } from './_constants'
import { StoreNavigationBarItem, StoreProps, StoreValues } from './_types'

export const StoreContext = React.createContext<StoreValues | null>(null)

export const useStore = () => React.useContext(StoreContext) as StoreValues

export const Store = ({ children, pageProps }: StoreProps) => {
  const { t, i18n } = useTranslation()

  const navigationBarItems: StoreNavigationBarItem[] = [
    {
      name: 'home',
      text: t('shared._Home'),
      icon: <Icon name='home' />,
    },
    {
      name: 'aboutMe',
      text: t('shared._About_me'),
      icon: <Icon name='aboutMe' />,
    },
    {
      name: 'projects',
      text: t('shared._Projects'),
      icon: <Icon name='projects' />,
    },
    {
      name: 'contact',
      text: t('shared._Contact'),
      icon: <Icon name='contact' />,
    },
  ]

  // ! language

  const [language, setLanguage] = React.useState<Language['id']>(() => {
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem(LOCAL_STORAGE_LANGUAGE)

      if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'pl')) {
        return savedLanguage
      }

      return 'en'
    }

    return 'en'
  })

  const toggleLanguage = (languageId: Language['id']) => {
    setLanguage(languageId)
    localStorage.setItem(LOCAL_STORAGE_LANGUAGE, languageId)
  }

  React.useEffect(() => {
    i18n.changeLanguage(language)
  }, [language])

  const store: StoreValues = {
    navigationBarItems,
    language,
    toggleLanguage,
  }

  return (
    <StoreContext.Provider value={store}>
      <ChakraProvider theme={theme} portalZIndex={2000}>
        {children}
      </ChakraProvider>
    </StoreContext.Provider>
  )
}
