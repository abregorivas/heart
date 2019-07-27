import React from 'react'
import PropTypes from 'prop-types'
import { Container, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {},
  heading: { color: '#7f7f7f', fontWeight: 400 },
}))

const SectionContainer = ({ heading, as: Element, children }) => {
  const classes = useStyles()
  return (
    <Element className={classes.root}>
      {heading && (
        <Typography
          align="left"
          gutterBottom
          className={classes.heading}
          variant="h2"
        >
          {heading}
        </Typography>
      )}
      {children}
    </Element>
  )
}

SectionContainer.propTypes = {
  as: PropTypes.string,
  heading: PropTypes.string,
  children: PropTypes.node,
}

SectionContainer.defaultProps = {
  as: 'div',
}

export default SectionContainer
