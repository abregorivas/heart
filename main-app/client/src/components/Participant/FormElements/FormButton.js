import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({}))

export const FormButton = ({ children, ...props }) => (
  <Button {...props}> {children} </Button>
)

FormButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
    .isRequired,
  isVisible: PropTypes.bool,
}

export default FormButton
