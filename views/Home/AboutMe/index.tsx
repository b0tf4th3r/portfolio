import { Box, Card, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useTranslation } from 'react-i18next'

import { MaxWidthLayout } from 'components/layouts'
import { LeftIconHeading } from 'components/ui'

import { AboutMeList } from './List'
import { useAnimation } from './_hooks/useAnimation'
import { HomeViewAboutMeIntroductionProps } from './_types'

export const HomeViewAboutMe = (props: HomeViewAboutMeIntroductionProps) => {
  const { t } = useTranslation()

  const animation = useAnimation()

  return (
    <Box pt={[8]} ref={props.scrollIntoSection.refs.aboutMeSection}>
      <MaxWidthLayout>
        <Box ref={animation.scope}>
          <Card
            className='card'
            transform='translateX(50vw)'
            opacity={0}
            backdropFilter='blur(40px)'
          >
            <VStack w='100%' alignItems='flex-start' spacing={[4, 8, 16]}>
              <LeftIconHeading
                iconName='aboutMe'
                headingText={t('shared._About_me')}
                variant='big'
              />

              <Text color='textNormal'>
                {t('homeView.aboutMe.description')}
              </Text>
            </VStack>

            <AboutMeList />
          </Card>
        </Box>
      </MaxWidthLayout>
    </Box>
  )
}
