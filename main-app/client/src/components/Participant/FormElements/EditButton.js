import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    textTransform: 'none',
    margin: theme.spacing(1),
  },
}))

export const EditButton = ({ toggleEdit }) => {
  const classes = useStyles()
  return (
    <Button
      className={classes.root}
      size="small"
      color="primary"
      variant="outlined"
      onClick={toggleEdit}
    >
      Edit
    </Button>
  )
}

EditButton.propTypes = {
  toggleEdit: PropTypes.func.isRequired,
}

export default EditButton
