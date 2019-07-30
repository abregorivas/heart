import React, { Fragment, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Container, Chip, Typography } from '@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles'
import uuid from 'uuid'
import _ from 'lodash'
// import Search from './Search/Search';
import { violationCodes } from './violationCodes'

const useStyles = makeStyles(theme => ({
  root: {
    padding: 0,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  chip: {
    margin: theme.spacing(1),
  },
}))

const Violations = ({ isEditing, violations }) => {
  const [tempViolations, setTempViolations] = useState([])
  const classes = useStyles()

  const handleViolationSelection = violation => {
    const x = _.find(tempViolations, o => o === violation)
    if (x) {
      alert('That violations is already added to this citation')
    } else {
      setTempViolations(tempViolations.concat([violation]))
    }
  }

  const handleRemove = (event, violation) => {
    setTempViolations(tempViolations.filter(x => x !== violation))
  }

  const isCommon = ({ violation }) => {
    const x = _.find(violationCodes, o => o.text === violation)
    return x ? 'primary' : 'secondary'
  }

  useEffect(() => {
    setTempViolations(violations)
  }, [violations])

  return (
    <Fragment>
      <Typography variant="caption">Violations (Max 5 violations)</Typography>
      <Container className={classes.root}>
        {tempViolations.map(violation => (
          <Chip
            key={uuid()}
            label={violation}
            onDelete={isEditing ? e => handleRemove(e, violation) : null}
            color={isCommon(violation)}
            className={classes.chip}
          />
        ))}
      </Container>
      {/*<Search*/}
      {/*  disabled={tempViolations.length > 4}*/}
      {/*  searchList={violationCodes}*/}
      {/*  handleSelection={handleViolationSelection}*/}
      {/*  placeholder="Search Violations"*/}
      {/*/>*/}
    </Fragment>
  )
}

Violations.propTypes = {
  violations: PropTypes.array,
  handleRemove: PropTypes.func,
}

export default Violations
