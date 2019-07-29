import React, { useState } from 'react'
import { Formik, Form, Field } from 'formik'
import { Grid } from '@material-ui/core'
import { FormGroup, FormActionBar, EditButton } from '../FormElements'
import Violations from '../Violations/Violations'
// import PropTypes from 'prop-types'

const CitationForm = ({ initValues, handleDelete, handleSave }) => {
  const [isEditing, setEdit] = useState(false)
  let {
    id,
    citation_number,
    court_code,
    citation_status,
    violations,
  } = initValues

  const toggleEdit = () => setEdit(!isEditing)
  const handleCancel = cb => {
    toggleEdit()
    cb()
  }

  const handleFormSubmit = values => {
    toggleEdit()
    handleSave(values)
  }

  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        id,
        citation_number,
        court_code,
        citation_status,
        violations,
      }}
      onSubmit={(values, actions) => {
        handleFormSubmit(values)
        // actions.setSubmitting(true)
        // setTimeout(() => {
        //   actions.setSubmitting(false)
        //   actions.resetForm(initValues)
        //   // alert(JSON.stringify(values, null, 2));
        // }, 3000)
      }}
      render={({
        handleSubmit,
        isSubmitting,
        values,
        handleReset,
        ...props
      }) => (
        <Form>
          <Grid container spacing={1}>
            <Grid item xs={12} md={4}>
              <Field
                disabled={!isEditing}
                name="citation_number"
                label="citation no"
                component={FormGroup}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Field
                disabled={!isEditing}
                name="court_code"
                label="court code"
                component={FormGroup}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Field
                disabled={!isEditing}
                name="citation_status"
                label="status"
                component={FormGroup}
              />
            </Grid>
          </Grid>
          <Grid container>
            <Violations isEditing={isEditing} violations={violations} />
          </Grid>
          {isEditing ? (
            <FormActionBar
              handleDelete={() => handleSubmit}
              // handleSave={() => handleSubmit}
              handleCancel={() => handleCancel(handleReset)}
            />
          ) : (
            <EditButton toggleEdit={toggleEdit} />
          )}
        </Form>
      )}
    />
  )
}

// CitationForm.propTypes = {
//
// }

export default CitationForm
