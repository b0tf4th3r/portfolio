import { ReactNode } from 'react'
import { Language } from 'shared/_types/language'

export type StoreProps = {
  children: ReactNode
  pageProps: any
}

export type StoreValues = {
  navigationBarItems: StoreNavigationBarItem[]
  language: Language['id']
  toggleLanguage: (language: Language['id']) => void
}

export type StoreNavigationBarItem = {
  name: 'home' | 'aboutMe' | 'projects' | 'contact'
  text: string
  icon: JSX.Element
}
