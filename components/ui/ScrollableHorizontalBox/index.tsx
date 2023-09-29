import { Box } from '@chakra-ui/react'
import React from 'react'
import { themeColors } from 'theme/colors'

import { Icon } from '..'
import { useScrollableHorizontalBox } from './_hooks/useScrollableHorizontalBox'
import { ScrollableHorizontalBoxProps } from './_types'

export const ScrollableHorizontalBox = (
  props: ScrollableHorizontalBoxProps,
) => {
  const scrollableHorizontalBox = useScrollableHorizontalBox({})

  const areItemsCentered = props.shouldCenterItems && !scrollableHorizontalBox.isLeftArrowVisible && !scrollableHorizontalBox.isRightArrowVisible

  return (
    <Box position='relative'>
      {scrollableHorizontalBox.isLeftArrowVisible && (
        <Box
          zIndex={2}
          cursor='pointer'
          position='absolute'
          my='auto'
          h='40px'
          top={0}
          bottom={0}
          left={[2, 4, 8]}
          onClick={scrollableHorizontalBox.scrollToLeft}
        >
          <Icon name='arrowLeft' size='80px' color={themeColors.primary} />
        </Box>
      )}

      {scrollableHorizontalBox.isRightArrowVisible && (
        <Box
          zIndex={2}
          cursor='pointer'
          position='absolute'
          my='auto'
          h='40px'
          top={0}
          bottom={0}
          right={[2, 4, 8]}
          onClick={scrollableHorizontalBox.scrollToRight}
        >
          <Icon name='arrowRight' size='80px' color={themeColors.primary} />
        </Box>
      )}

      <Box
        sx={areItemsCentered ?{
          '::-webkit-scrollbar': {
            width: '8px',
            height: '8px',
            borderRadius: '4px',
            backgroundColor: 'cardBg',
          },
          '::-webkit-scrollbar-thumb': {
            backgroundColor: 'cardBg_hover',
          },
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        } : {
          '::-webkit-scrollbar': {
            width: '8px',
            height: '8px',
            borderRadius: '4px',
            backgroundColor: 'cardBg',
          },
          '::-webkit-scrollbar-thumb': {
            backgroundColor: 'cardBg_hover',
          },
        }}
        ref={scrollableHorizontalBox.boxRef}
        whiteSpace='nowrap'
        overflowX='auto'
        w='100%'
        {...props.componentsProps?.root}
      >
        {props.children}
      </Box>
    </Box>
  )
}
