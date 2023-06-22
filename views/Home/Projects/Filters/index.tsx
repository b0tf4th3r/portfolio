import { Box, Button, Grid, GridItem, HStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'
import { useTranslation } from 'react-i18next'

import { FormButton, FormSelect, Icon } from 'components/ui'

import { useFormWithValidation } from './_hooks/useFormWithValidation'
import { useOptions } from './_hooks/useOptions'
import { useSubmitForm } from './_hooks/useSubmitForm'
import { ProjectsFiltersProps } from './_types'

export const ProjectsFilters = (props: ProjectsFiltersProps) => {
  const { t } = useTranslation()

  const formWithValidation = useFormWithValidation()

  const options = useOptions()

  const submitForm = useSubmitForm({ filters: props.filters })

  const areSomeFiltersSelected = formWithValidation.form.watch("technologies").length !== 0 || formWithValidation.form.watch("types").length !== 0

  const clearFilters = () => {
    formWithValidation.form.reset({
      technologies: [],
      types: []
    })
    props.filters.applyFilters({
      values:{
        technologies: [],
        types: []
      }
    })
  }

  return (
    <Box mt={[4, 8, 16]}>
      <form
        onSubmit={formWithValidation.form.handleSubmit((values) =>
          submitForm.execute({
            values,
          }),
        )}
      >
        <Grid
          gridTemplateColumns={['1fr', null, '1fr 1fr auto']}
          gridGap={[4, null, 8]}
          alignItems='flex-start'
        >
          <GridItem>
            <motion.div
              className='filtersElement'
              style={{
                x: 50,
                opacity: 0,
              }}
            >
              <FormSelect
                label={t('shared._Types') || ''}
                name='types'
                form={formWithValidation.form}
                options={options.fields.types}
                isMultiple
                componentsProps={{
                  root: { m: 0 },
                }}
              />
            </motion.div>
          </GridItem>

          <GridItem>
            <motion.div
              className='filtersElement'
              style={{
                x: 50,
                opacity: 0,
              }}
            >
              <FormSelect
                label={t('shared._Technologies') || ''}
                name='technologies'
                form={formWithValidation.form}
                options={options.fields.technologies}
                isMultiple
                componentsProps={{
                  root: { m: 0 },
                }}
              />
            </motion.div>
          </GridItem>

          <GridItem>
            <motion.div
              className='filtersElement'
              style={{
                x: 50,
                opacity: 0,
              }}
            >
              <HStack mt={[4, null, '32px']} spacing={[4, null, 8]}>
                {areSomeFiltersSelected && (
                  <Button variant='outline' onClick={() => clearFilters()}>
                    <Icon name='filterOff' />
                  </Button>
                )}

                <FormButton
                  text={t('shared._Apply_filters')}
                  leftIcon={<Icon name='filterOn' color='white' />}
                />
              </HStack>
            </motion.div>
          </GridItem>
        </Grid>
      </form>
    </Box>
  )
}
