import React from 'react'
import IntakeForm from './IntakeForm/components/IntakeForm'
import { Formik, Form } from 'formik'
import { Button, FormControl, InputLabel } from '@material-ui/core'
import './Intake.scss'
import FormTabs from '../FormTabs'
import ClinicFormGroup from './IntakeForm/components/ClinicFormGroup'
import ContactInfoFormGroup from './IntakeForm/components/ContactInfoFormGroup'
import { Typography, Grid } from '@material-ui/core'

const XBaseInput = ({ initialValues }) => {
  return (
    <Formik
      initalValues={intialValues}
      onSubmit={values => submittionFm()}
      validate={values => {
        validationFn()
      }}
    >
      {values => (
        <Form>
          <FormControl>
            <InputLabel shrink={true} htmlFor="tags">
              Tags
            </InputLabel>
            <Field
              type="text"
              name="tags"
              component={Select}
              multiple={true}
              inputProps={{ name: 'tags', id: 'tags' }}
            />
          </FormControl>
        </Form>
      )}
    </Formik>
  )
}

export default Intake
