import { Box, Button, Text, VStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import NextLink from 'next/link'
import React from 'react'
import { useTranslation } from 'react-i18next'

import { MaxWidthLayout } from 'components/layouts'
import { Icon, LeftIconHeading } from 'components/ui'

import { useAnimation } from './_hooks/useAnimation'
import { HomeViewContactProps } from './_types'

export const HomeViewContact = (props: HomeViewContactProps) => {
  const { t } = useTranslation()

  const animation = useAnimation()

  return (
    <Box
      py={[16, null, 32, 64]}
      ref={props.scrollIntoSection.refs.contactSection}
    >
      <MaxWidthLayout>
        <Box ref={animation.scope}>
          <VStack w='100%' alignItems='flex-start' spacing={[4, 8, 16]}>
            <motion.div
              className='heading'
              style={{
                y: 50,
                opacity: 0,
              }}
            >
              <LeftIconHeading
                iconName='contact'
                headingText={t('shared._Contact')}
                variant='big'
              />
            </motion.div>

            <motion.div
              className='description'
              style={{
                x: 50,
                opacity: 0,
              }}
            >
              <Text color='textNormal'>
                {t('homeView.contact.description')}
              </Text>
            </motion.div>

            <motion.div
              className='button'
              style={{
                x: 50,
                opacity: 0,
              }}
            >
              <NextLink href='https://pl.linkedin.com/in/bogdan-rubas' passHref>
                <Button
                  as='a'
                  target='_blank'
                  variant='solidAccent'
                  leftIcon={<Icon name='linkedin' color='white' />}
                >
                  {t('homeView.contact.button')}
                </Button>
              </NextLink>
            </motion.div>
          </VStack>
        </Box>
      </MaxWidthLayout>
    </Box>
  )
}
