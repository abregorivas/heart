import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'formik'
import { makeStyles } from '@material-ui/core/styles'
import { FormControl, InputLabel } from '@material-ui/core'
import BaseInput from './BaseInput'

const useStyles = makeStyles(theme => ({
  root: {
    width: '90%',
    margin: theme.spacing(1),
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
}))

export const FormGroup = ({
  id,
  label,
  // form: { touched, errors },
  ...props
}) => {
  const classes = useStyles()
  // const errmsg = touched[field.name] && errors[field.name]
  return (
    <FormControl className={classes.root} component="div" fullWidth={true}>
      <InputLabel
        shrink
        htmlFor={props.id}
        className={classes.label}
        // error={!!errmsg}
      >
        {label}
      </InputLabel>
      <BaseInput field={props.field} {...props} />
    </FormControl>
  )
}

FormGroup.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
}

FormGroup.defaultProps = {
  id: '', // needed for screen readers
  label: 'Label',
}

export default FormGroup
