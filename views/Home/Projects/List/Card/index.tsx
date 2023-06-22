import {
  Text,
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
  CardFooter,
  ButtonGroup,
  Badge,
  Box,
  Tooltip,
  HStack,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import NextLink from 'next/link'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { shorten } from 'shared/_utils'

import { Icon } from 'components/ui'

import { ListCardProps } from './_types'

export const ListCard = (props: ListCardProps) => {
  const { t } = useTranslation()

  return (
    <motion.div
      className='card'
      style={{
        display: 'inline-block',
        whiteSpace: 'pre-wrap',
        x: 100,
        opacity: 0,
      }}
    >
      <Card
        verticalAlign='top'
        w={['80vw', '70vw', '60vw', '50vw', '40vw']}
        mr={[4, 8, 16]}
      >
        <CardHeader>
          <Heading>{t(props.project.name)}</Heading>

          <Text mt={[2, 4, 8]} color='textNormal'>
            {props.project.type === 'private'
              ? t('shared._Private')
              : t('shared._Open_source')}
          </Text>
        </CardHeader>

        <CardBody>
          <HStack spacing={[4]}>
            {props.project.githubUrl && (
              <Box>
                <Tooltip label={t('shared._Includes_GitHub_repository')}>
                  <Badge
                    variant='outline'
                    display='flex'
                    alignItems='center'
                    flexDir='row'
                  >
                    <Icon name='github' />
                  </Badge>
                </Tooltip>
              </Box>
            )}

            {props.project.imagesUrls.length > 0 && (
              <Box>
                <Tooltip label={t('shared._Includes_images')}>
                  <Badge
                    variant='outline'
                    display='flex'
                    alignItems='center'
                    flexDir='row'
                  >
                    <Text mr={[2]}>{props.project.imagesUrls.length}</Text>

                    <Icon name='images' />
                  </Badge>
                </Tooltip>
              </Box>
            )}
          </HStack>

          <Text mt={[8]}>{shorten(t(props.project.description), 180)}</Text>
        </CardBody>

        <CardFooter>
          <ButtonGroup spacing={[2, 4, 8, 16]}>
            <NextLink href={props.project.readMoreUrl} passHref>
              <Button
                as='a'
                target='_blank'
                leftIcon={<Icon name='readMore' />}
                variant='solid'
              >
                {t('shared._Read_more')}
              </Button>
            </NextLink>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
