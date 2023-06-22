import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react'
import NextImage from 'next/image'
import React from 'react'
import { useTranslation } from 'react-i18next'

import { ZoomableImageProps } from './_types'

export const ZoomableImage = (props: ZoomableImageProps) => {
  const { t } = useTranslation()

  const disclosure = useDisclosure()

  return (
    <>
      <Modal isOpen={disclosure.isOpen} onClose={disclosure.onClose}>
        <ModalOverlay />

        <ModalContent
          minW={['90vw', '80vw', '70vw']}
          mt={[2, 4, 8]}
          position='relative'
        >
          <ModalBody w='100%' h='100%'>
            <Box
              w='100%'
              h='100%'
              minW={[
                'calc(90vw - 20px)',
                'calc(80vw - 60px)',
                'calc(70vw - 60px)',
              ]}
              minH={['90vh', '80vh', '70vh']}
              position='relative'
              mx='auto'
              my={4}
            >
              <NextImage
                src={props.src}
                alt='Image'
                layout='fill'
                objectFit='contain'
                onClick={() => disclosure.onOpen()}
              />
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button onClick={disclosure.onClose}>{t('shared._Close')}</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Box
        position='relative'
        w={props.width}
        h={props.height}
        mx='auto'
        my={4}
        borderRadius='xl'
        overflow='hidden'
        cursor='pointer'
        bg='cardBg'
      >
        <NextImage
          src={props.src}
          style={{ padding: 10 }}
          alt='Image'
          layout='fill'
          objectFit='contain'
          onClick={() => disclosure.onOpen()}
        />
      </Box>
    </>
  )
}
