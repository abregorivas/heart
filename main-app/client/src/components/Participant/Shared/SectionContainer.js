import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardContent } from '@material-ui/core'

export const SectionContainer = ({ children }) => <Card>{children}</Card>

SectionContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element])
    .isRequired,
}

export default SectionContainer
