import React from 'react'
import PropTypes from 'prop-types'
import { FieldArray, Field } from 'formik'
import { Container, Chip, Typography } from '@material-ui/core/'
import { makeStyles } from '@material-ui/core'
import ViolationInput from './ViolationInput'
import clsx from 'clsx'
import Icon from '@material-ui/core/Icon'

const useStyles = makeStyles(theme => ({
  root: {},
  chip: {
    margin: theme.spacing(1),
  },
}))

const ViolationForm = ({ values, isEditing, ...prop }) => {
  const classes = useStyles()
  return (
    <FieldArray
      name="violations"
      render={arrayHelpers => (
        <div>
          {JSON.stringify(values)}
          {values.violations && values.violations.length > 0
            ? values.violations.map((violation, index) => (
                <div key={index}>
                  <Field name={`violations.${index}`} />
                </div>
              ))
            : null}
        </div>
      )}
    />
  )
}

export default ViolationForm
