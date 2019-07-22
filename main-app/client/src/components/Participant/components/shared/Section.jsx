import React from 'react'
import PropTypes from 'prop-types'
import { Container, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {},
  heading: { color: '#7f7f7f',}
}))

const Section = ({ heading, as, children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {heading &&
      <Typography align="left" gutterBottom className={classes.heading} variant="h2">
        {heading}
      </Typography>
      }
      <Container component={as}>{children}</Container>
    </div>
  )
}

Section.propTypes = {
  as: PropTypes.string,
  heading: PropTypes.string,
  children: PropTypes.node,
}

Section.defaultProps = {
  as: 'div',
}

export default Section
