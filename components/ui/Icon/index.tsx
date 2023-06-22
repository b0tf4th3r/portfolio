import { useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import {
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineProject,
  AiOutlineRobot,
} from 'react-icons/ai'
import { BiMenu, BiHome } from 'react-icons/bi'
import {
  BsCardChecklist,
  BsChevronCompactLeft,
  BsChevronCompactRight,
  BsEyeglasses,
  BsGithub,
  BsImages,
} from 'react-icons/bs'
import { GiProcessor } from 'react-icons/gi'
import { MdOutlineReadMore } from 'react-icons/md'
import { SlMustache } from 'react-icons/sl'
import { TbFilter, TbFilterOff, TbPrompt } from 'react-icons/tb'

import { IconProps } from './_types'

export const Icon = (props: IconProps) => {
  const iconColor = useColorModeValue(
    props.revertColor ? 'white' : 'black',
    props.revertColor ? 'black' : 'white',
  )

  const propsToPassToIconElement = {
    size: props.size ? props.size : '20px',
    color: props.color ? props.color : iconColor,
  }

  const renderIcon = () => {
    switch (props.name) {
      case 'aboutMe':
        return <BsCardChecklist {...propsToPassToIconElement} />

      case 'arrowLeft':
        return <BsChevronCompactLeft {...propsToPassToIconElement} />

      case 'arrowRight':
        return <BsChevronCompactRight {...propsToPassToIconElement} />

      case 'contact':
        return <AiOutlineMail {...propsToPassToIconElement} />

      case 'glasses':
        return <BsEyeglasses {...propsToPassToIconElement} />

      case 'github':
        return <BsGithub {...propsToPassToIconElement} />

      case 'home':
        return <BiHome {...propsToPassToIconElement} />

      case 'filterOff':
        return <TbFilterOff {...propsToPassToIconElement} />

      case 'filterOn':
        return <TbFilter {...propsToPassToIconElement} />

      case 'images':
        return <BsImages {...propsToPassToIconElement} />

      case 'linkedin':
        return <AiOutlineLinkedin {...propsToPassToIconElement} />

      case 'memoryreadwrite':
        return <GiProcessor {...propsToPassToIconElement} />

      case 'menu':
        return <BiMenu {...propsToPassToIconElement} />

      case 'mustache':
        return <SlMustache {...propsToPassToIconElement} />

      case 'projects':
        return <AiOutlineProject {...propsToPassToIconElement} />

        
      case 'readMore':
        return <MdOutlineReadMore {...propsToPassToIconElement} />
        
      case 'robot':
        return <AiOutlineRobot {...propsToPassToIconElement} />
        
      case 'win32api':
        return <TbPrompt {...propsToPassToIconElement} />

      default:
        return <>Error</>
    }
  }

  return renderIcon()
}
