import {
  Box,
  Button,
  ButtonGroup,
  Grid,
  Heading,
  HStack,
  VStack,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import NextImage from 'next/image'
import NextLink from 'next/link'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { GiHand } from 'react-icons/gi'

import { MaxWidthLayout } from 'components/layouts'
import { Icon, OneLineTextWithAnimatedBackgroundSlider } from 'components/ui'

import { useAnimation } from './_hooks/useAnimation'
import { HomeViewIntroductionProps } from './_types'

export const HomeViewIntroduction = (props: HomeViewIntroductionProps) => {
  const { t } = useTranslation()

  const animation = useAnimation()

  return (
    <Box bgGradient= 'linear(to-b, backgroundGradient1, backgroundGradient2)' position='relative' zIndex={0}>
      <MaxWidthLayout>
        <Box ref={animation.scope}>
          <Grid
            h='100vh'
            templateColumns={[null, null, '1fr 1fr', null, '1fr 500px']}
            mx='auto'
            maxW='100%'
            alignItems='center'
            py={[32]}
            ref={props.scrollIntoSection.refs.homeSection}
          >
            <VStack spacing={4} alignItems={['center', null, 'flex-start']}>
              <HStack spacing={[4]}>
                <motion.div
                  className='headingIcon'
                  style={{
                    y: 50,
                    opacity: 0,
                  }}
                >
                  <GiHand color='#FF0080' size='40px' />
                </motion.div>

                <motion.div
                  className='headingFirstLine'
                  style={{
                    y: 50,
                    opacity: 0,
                  }}
                >
                  <Heading>{t('homeView.introduction.heading')}</Heading>
                </motion.div>
              </HStack>

              <motion.div
                className='headingSecondLine'
                style={{
                  y: -50,
                  opacity: 0,
                }}
              >
                <OneLineTextWithAnimatedBackgroundSlider
                  texts={[
                    t('homeView.introduction.text1'),
                    t('homeView.introduction.text2'),
                  ]}
                  animationLengthInMs={3000}
                  animatedLineProps={{
                    w: [
                      'calc(100vw - 32px)',
                      'calc(100vw - 64px)',
                      '56vw',
                      '46vw',
                      '740px',
                    ],
                    h: ['17vw', null, '9vw', '8vw', '130px'],
                  }}
                />
              </motion.div>

              <ButtonGroup pt={[4, 8]} spacing={[4, 8]}>
                <motion.div
                  className='button'
                  style={{
                    x: 50,
                    opacity: 0,
                  }}
                >
                  <NextLink
                    href='https://pl.linkedin.com/in/bogdan-rubas'
                    passHref
                  >
                    <Button
                      className='button'
                      as='a'
                      target='_blank'
                      leftIcon={<Icon name='linkedin' />}
                    >
                      Linkedin
                    </Button>
                  </NextLink>
                </motion.div>

                <NextLink href='https://github.com/b0tf4th3r' passHref>
                  <motion.div
                    className='button'
                    style={{
                      x: 50,
                      opacity: 0,
                    }}
                  >
                    <Button
                      as='a'
                      target='_blank'
                      leftIcon={<Icon name='github' />}
                    >
                      Github
                    </Button>
                  </motion.div>
                </NextLink>
              </ButtonGroup>
            </VStack>

            <motion.div
              className='image'
              style={{
                y: 50,
                opacity: 0,
              }}
            >
              <Box>
                <motion.div
                  animate={{
                    y: [0, 20, -20, 0],
                  }}
                  transition={{
                    duration: 10,
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeatType: 'loop',
                    repeat: Infinity,
                    repeatDelay: 0,
                  }}
                >
                  <Box
                    display='flex'
                    justifyContent={['center', null, 'flex-end']}
                    py={[8, 16, 0]}
                  >
                    <motion.div
                      animate={{
                        y: [0, 10, -10, 0],
                      }}
                      transition={{
                        duration: 10,
                        times: [0, 0.2, 0.5, 0.8, 1],
                        repeatType: 'loop',
                        repeat: Infinity,
                        repeatDelay: 0,
                      }}
                      style={{position:"absolute"}}
                    >
                      <Box
                        // position='absolute'
                        transform={[
                          'translate(-3vw, 3vw)',
                          'translate(0, 5vw)',
                          'translate(-8vw, 5vw)',
                          'translate(-11vw, 5vw)',
                          'translate(-100px, 50px)',
                        ]}
                        w={['55vw', '50vw', '20vw', '25vw', '300px']}
                        h={['55vw', '50vw', '20vw', '25vw', '300px']}
                        borderRadius='30%'
                        overflow='hidden'
                      >
                        <NextImage
                          src='/home/introduction/face.png'
                          alt='Face'
                          layout='fill'
                          objectFit='contain'
                        />
                      </Box>
                    </motion.div>

                    <svg
                      style={{ width: '100%', height: '100%' }}
                      viewBox='0 0 1000 1000'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <defs>
                        <linearGradient
                          id='b'
                          gradientTransform='rotate(-45 .5 .5)'
                        >
                          <stop offset='0%' stopColor='#FF3CAC' />
                          <stop offset='50%' stopColor='#784BA0' />
                          <stop offset='100%' stopColor='#2b86c5' />
                        </linearGradient>
                        <clipPath id='a'>
                          <path
                            fill='currentColor'
                            d='M807.5 661.5Q686 823 481 855.5T170.5 694q-105.5-194-1-389.5t303-148Q671 204 800 352t7.5 309.5Z'
                          />
                        </clipPath>
                      </defs>
                      <g clipPath='url(#a)'>
                        <path
                          fill='url(#b)'
                          d='M807.5 661.5Q686 823 481 855.5T170.5 694q-105.5-194-1-389.5t303-148Q671 204 800 352t7.5 309.5Z'
                        />
                      </g>
                    </svg>
                  </Box>
                </motion.div>
              </Box>
            </motion.div>
          </Grid>
        </Box>
      </MaxWidthLayout>
    </Box>
  )
}
