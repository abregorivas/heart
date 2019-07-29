import React from 'react'
import {Formik, Field, Form, ErrorMessage } from 'formik';
import {TextField} from '@material-ui/core'

const CitationForm = ({citation, handleSubmit}) => {
  return(
  <Formik
    initialValues={citation}
    onSubmit={handleSubmit}
    render={({ handleSubmit, handleChange, handleBlur, values, errors  }) => (
      <form noValidate autoComplete="off">
        <TextField
          id="outlined-bare"
          className=""
          defaultValue={citation.citation_number}
          margin="normal"
          variant="outlined"
          inputProps={{ 'aria-label': 'bare' }}
          // onChange={handleChange}
        />
        <TextField
          id="outlined-bare"
          className=""
          defaultValue={citation.court_code}
          margin="normal"
          variant="outlined"
          inputProps={{ 'aria-label': 'bare' }}
          // onChange={handleChange}
        />

        <button type="submit" disabled={handleSubmit}>
          Submit
        </button>
      </form>
    )}
  />

  )
}

export default CitationForm;