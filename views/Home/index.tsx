import { Box } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'

import { TopBarNavigation } from 'components/ui'

import { HomeViewAboutMe } from './AboutMe'
import { HomeViewContact } from './Contact'
import { HomeViewIntroduction } from './Introduction'
import { HomeViewProjects } from './Projects'
import { useScrollIntoSection } from './_hooks/useScrollIntoSection'

export const HomeView = () => {
  const router = useRouter()

  const scrollIntoSection = useScrollIntoSection()

  React.useEffect(() => {
    if (router.query.home === '') scrollIntoSection.scroll({ section: 'home' })

    if (router.query.aboutMe === '')
      scrollIntoSection.scroll({ section: 'aboutMe' })

    if (router.query.projects === '')
      scrollIntoSection.scroll({ section: 'projects' })

    if (router.query.contact === '')
      scrollIntoSection.scroll({ section: 'contact' })
  }, [router.query])

  return (
    <Box position='relative'>
      <TopBarNavigation scrollIntoSection={scrollIntoSection} />

      <HomeViewIntroduction scrollIntoSection={scrollIntoSection} />

      <HomeViewAboutMe scrollIntoSection={scrollIntoSection} />

      <HomeViewProjects scrollIntoSection={scrollIntoSection} />

      <HomeViewContact scrollIntoSection={scrollIntoSection} />
    </Box>
  )
}
