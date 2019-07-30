import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import { Grid, Button, Icon, Fab, CardActionArea } from '@material-ui/core'
import FormButton from './FormButton'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexGrow: 1,
    flexWrap: 'no-wrap',
    justifyContent: 'flex-end',
  },
  btnRoot: {
    textTransform: 'none',
    margin: theme.spacing(1),
  },
  btnDelete: {
    textTransform: 'none',
    margin: theme.spacing(1),
    marginRight: 'auto',
  },
}))

export const FormActionBar = ({ handleDelete, handleCancel }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Button
        classes={{ root: classes.btnDelete }}
        size="small"
        color="secondary"
        onClick={handleDelete}
      >
        Delete
      </Button>
      <Button
        classes={{ root: classes.btnRoot }}
        size="small"
        type="reset"
        // variant="outlined"
        color="default"
        onClick={handleCancel}
      >
        Cancel
      </Button>

      <Button
        classes={{ root: classes.btnRoot }}
        size="small"
        type="submit"
        variant="contained"
        color="primary"
      >
        Save
      </Button>
    </div>
  )
}

FormActionBar.propTypes = {
  handleDelete: PropTypes.func.isRequired,
  // handleSave: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
}

export default FormActionBar

// <Grid container spacing={1}>
//   <Grid item xs={4} sm={3}>
//   {/*<Button variant="contained" color="secondary" onClick={handleDelete}>*/}
// {/*//   Delete*/}
//   </Button>
// </Grid>
// <Grid item xs={2} sm={3} />
// <Grid item xs={3}>
// <Button
// type="reset"
// variant="outlined"
// color="default"
// onClick={handleCancel}
// >
// Cancel
// </Button>
// </Grid>
// <Grid item xs={3}>
// <Button type="submit" variant="contained" color="primary">
// Save
// </Button>
// </Grid>
// </Grid>
