import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core'

export const SectionHeading = ({ children, ...props }) => (
  <Typography {...props}>{children}</Typography>
)

SectionHeading.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
    PropTypes.string,
  ]).isRequired,
}

SectionHeading.defaultProps = {
  variant: 'h2',
  component: 'h2',
  color: 'textSecondary',
  gutterBottom: true,
}

export default SectionHeading
