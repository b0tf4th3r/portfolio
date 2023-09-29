import { Text, Spinner, Box, Badge, Button } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import NextLink from 'next/link'
import React from 'react'
import { useTranslation } from 'react-i18next'

import { MaxWidthLayout } from 'components/layouts'
import {
  Icon,
  LeftIconHeading,
  ScrollableHorizontalBox,
  TopBarNavigation,
  ZoomableImage,
} from 'components/ui'

import { useAnimation } from './_hooks/useAnimation'
import { useData } from './_hooks/useData'
import { ProjectViewProps } from './_types'

export const ProjectView = (props: ProjectViewProps) => {
  const { t } = useTranslation()

  const data = useData({ projectId: props.projectId })

  const animation = useAnimation({ data })

  return (
    <>
      <TopBarNavigation />

      <Box ref={animation.scope} py={[8, null, 16, 32]} bgGradient= 'linear(to-b, backgroundGradient1, backgroundGradient2)'>
        <MaxWidthLayout>
          <Box mt={['72px']}>
            {!data.project ? (
              <Spinner />
            ) : (
              <>
                <motion.div
                  className='heading'
                  style={{
                    y: 50,
                    opacity: 0,
                  }}
                >
                  <LeftIconHeading
                    iconName='projects'
                    headingText={t(data.project.name)}
                    variant='big'
                  />
                </motion.div>

                <motion.div
                  className='groupTitle'
                  style={{
                    y: 50,
                    opacity: 0,
                  }}
                >
                  <Text
                    mt={[8, null, 16]}
                    color='textNormal'
                    fontSize='xs'
                    textTransform='uppercase'
                    letterSpacing='1px'
                  >
                    {t('shared._Technologies')}
                  </Text>
                </motion.div>

                <Box mt={[4]}>
                  {data.allTechnologiesFilteredByProjectTechnologies.map(
                    (technology, i) => (
                      <Box display='inline-block' mr={[2, 4]} mb={[2, 4]} key={i}>
                        <motion.div
                          className='badge'
                          style={{
                            x: 50,
                            opacity: 0,
                          }}
                        >
                          <Badge variant='outline'>
                            {technology.label.search('_') !== -1
                              ? t(technology.label)
                              : technology.label}
                          </Badge>
                        </motion.div>
                      </Box>
                    ),
                  )}
                </Box>

                <motion.div
                  className='groupTitle'
                  style={{
                    y: 50,
                    opacity: 0,
                  }}
                >
                  <Text
                    mt={[8, null, 16]}
                    color='textNormal'
                    fontSize='xs'
                    textTransform='uppercase'
                    letterSpacing='1px'
                  >
                    {t('shared._Description')}
                  </Text>
                </motion.div>

                <motion.div
                  className='description'
                  style={{
                    x: 50,
                    opacity: 0,
                  }}
                >
                  <Text mt={[4]}>{t(data.project.description)}</Text>
                </motion.div>

                {data.project.imagesUrls.length > 0 && (
                  <>
                    <motion.div
                      className='groupTitle'
                      style={{
                        y: 50,
                        opacity: 0,
                      }}
                    >
                      <Text
                        mt={[8, null, 16]}
                        color='textNormal'
                        fontSize='xs'
                        textTransform='uppercase'
                        letterSpacing='1px'
                      >
                        {t('shared._Images')}
                      </Text>
                    </motion.div>

                    <ScrollableHorizontalBox
                      shouldCenterItems={false}
                      componentsProps={{ root: { mt: [2] } }}
                    >
                      <>
                        {data.project.imagesUrls.map((imageUrl, i) => (
                          <Box key={i} display='inline-block' mr={[2, 4, 8]}>
                            <motion.div
                              className='image'
                              style={{
                                x: 50,
                                opacity: 0,
                              }}
                            >
                              <ZoomableImage
                                src={imageUrl}
                                width='300px'
                                height='200px'
                              />
                            </motion.div>
                          </Box>
                        ))}
                      </>
                    </ScrollableHorizontalBox>
                  </>
                )}

                {data.project.githubUrl && (
                  <NextLink href={data.project.githubUrl} passHref>
                    <motion.div
                      className='button'
                      style={{
                        y: 50,
                        opacity: 0,
                      }}
                    >
                      <Button
                        as='a'
                        target='_blank'
                        leftIcon={<Icon name='github' />}
                        mt={[4, null, 8, 16]}
                      >
                        Github
                      </Button>
                    </motion.div>
                  </NextLink>
                )}
              </>
            )}
          </Box>
        </MaxWidthLayout>
      </Box>
    </>
  )
}
