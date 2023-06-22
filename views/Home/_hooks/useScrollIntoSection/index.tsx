import React from 'react'

import { HomeViewUseScrollIntoSectionScrollInput } from './_types'

export const useScrollIntoSection = () => {
  const homeSectionRef = React.useRef<HTMLDivElement>(null)
  const aboutMeSectionRef = React.useRef<HTMLDivElement>(null)
  const projectsSectionRef = React.useRef<HTMLDivElement>(null)
  const contactSectionRef = React.useRef<HTMLDivElement>(null)

  const scroll = (scrollInput: HomeViewUseScrollIntoSectionScrollInput) => {
    switch (scrollInput.section) {
      case 'home':
        if (homeSectionRef.current)
          homeSectionRef.current.scrollIntoView({ behavior: 'smooth' })
        break

      case 'aboutMe':
        if (aboutMeSectionRef.current)
          aboutMeSectionRef.current.scrollIntoView({ behavior: 'smooth' })
        break

      case 'projects':
        if (projectsSectionRef.current)
          projectsSectionRef.current.scrollIntoView({ behavior: 'smooth' })
        break

      case 'contact':
        if (contactSectionRef.current)
          contactSectionRef.current.scrollIntoView({ behavior: 'smooth' })
        break

      default:
        break
    }
  }

  const refs = {
    homeSection: homeSectionRef,
    aboutMeSection: aboutMeSectionRef,
    projectsSection: projectsSectionRef,
    contactSection: contactSectionRef,
  }

  return {
    refs,
    scroll,
  }
}
