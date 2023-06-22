import { Box, Button, Grid } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import React from 'react'
import { theme } from 'theme'

import { useStore } from 'components/logic'
import { Logo, ThemeAndLanguageToggle } from 'components/ui'

import { useAnimation } from './_hooks/useAnimation'
import { TopBarNavigationProps } from './_types'

export const TopBarNavigation = (props: TopBarNavigationProps) => {
  const store = useStore()

  const router = useRouter()

  const animation = useAnimation()

  return (
    <Box
      px={[4, 8]}
      py={4}
      position='fixed'
      w='100%'
      backdropFilter='blur(40px)'
      zIndex={2}
      ref={animation.scope}
    >
      <Box mx='auto' maxW={theme.layouts.MaxWidth.maxW}>
        <Grid
          w='100%'
          templateColumns={[
            'auto 1fr auto',
            null,
            null,
            null,
            'auto 1fr auto auto',
          ]}
          mx='auto'
          alignItems='center'
          gridGap={[4, null, null, 16]}
        >
          <motion.div
            className='navigationItem'
            style={{
              y: 50,
              opacity: 0,
            }}
          >
            <Logo />
          </motion.div>

          <Box display={[null, null, null, 'none', 'block']}></Box>

          <Grid
            templateColumns={[
              `repeat(${store.navigationBarItems.length}, auto)`,
            ]}
            gap={[null, null, null, null, 8]}
            display={['none', null, null, 'grid']}
          >
            {store.navigationBarItems.map((item, i) => (
              <motion.div
                className='navigationItem'
                style={{
                  y: 50,
                  opacity: 0,
                }}
                key={i}
              >
                <Button
                  w='100%'
                  variant='ghost'
                  leftIcon={item.icon}
                  onClick={() =>
                    props.scrollIntoSection
                      ? props.scrollIntoSection.scroll({ section: item.name })
                      : router.push('/?' + item.name)
                  }
                >
                  {item.text}
                </Button>
              </motion.div>
            ))}
          </Grid>

          <motion.div
            className='navigationItem'
            style={{
              y: 50,
              opacity: 0,
            }}
          >
            <ThemeAndLanguageToggle />
          </motion.div>
        </Grid>
      </Box>
    </Box>
  )
}
