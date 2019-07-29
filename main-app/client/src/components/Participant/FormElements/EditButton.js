import React from 'react'
import PropTypes from 'prop-types'
import { Fab, Icon } from '@material-ui/core'

export const EditButton = ({ toggleEdit }) => (
  <Fab color="primary" onClick={toggleEdit}>
    <Icon className="fas fa-pencil-alt" />
  </Fab>
)

EditButton.propTypes = {
  toggleEdit: PropTypes.func.isRequired,
}

export default EditButton
