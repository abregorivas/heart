import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Grid, Button, Icon, Fab } from '@material-ui/core'
import FormButton from './FormButton'

export const FormActionBar = ({ handleDelete, handleCancel }) => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={4} sm={3}>
        <Button variant="contained" color="secondary" onClick={handleDelete}>
          Delete
        </Button>
      </Grid>
      <Grid item xs={2} sm={3} />
      <Grid item xs={3}>
        <Button
          type="reset"
          variant="outlined"
          color="default"
          onClick={handleCancel}
        >
          Cancel
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button type="submit" variant="contained" color="primary">
          Save
        </Button>
      </Grid>
    </Grid>
  )
}

FormActionBar.propTypes = {
  handleDelete: PropTypes.func.isRequired,
  // handleSave: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
}

export default FormActionBar
