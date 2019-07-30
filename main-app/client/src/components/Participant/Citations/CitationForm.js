import React, { useState } from 'react'
import { Formik, Form, Field } from 'formik'
import {
  Grid,
  Card,
  CardActions,
  CardContent,
  makeStyles,
} from '@material-ui/core'
import { FormGroup, FormActionBar, EditButton } from '../FormElements'
import Violations from '../Violations/Violations'
import Search from '../Search/Search'
import { violationCodes } from '../Violations/violationCodes'
import ViolationForm from '../Violations/ViolationsForm'
import Divider from '@material-ui/core/Divider'
import VirtualizedList from '../Search/VirtualList'

const useStyles = makeStyles(theme => ({
  citationContainer: {
    flexGrow: 1,
    backgroundColor: '#F5F5F5',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  card: {
    padding: 0,
  },
  cardContent: {
    padding: 0,
  },
  cardActions: {
    padding: 0,
    backgroundColor: '#F5F5F5',
  },
  violationContainer: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  searchContent: {
    padding: theme.spacing(2),
    paddingTop: 0,
  },
}))

const CitationForm = ({ initValues, handleDelete, handleSave }) => {
  const [violationList, setViolations] = useState(initValues.violations)
  const [isEditing, setEdit] = useState(true)
  const classes = useStyles()
  let { id, citation_number, court_code, citation_status } = initValues
  const toggleEdit = () => setEdit(!isEditing)
  const handleCancel = cb => {
    toggleEdit()
    cb()
  }

  const handleFormSubmit = values => {
    toggleEdit()
    let submittedValues = { ...values, violations: violationList }
    handleSave(submittedValues)
  }

  const handleViolationSelection = val => {
    if (violationList.length > 0 && violationList.length <= 5) {
      setViolations(prevList => {
        const list = [...violationList, val]
        return list
      })
    }
  }

  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        id,
        citation_number,
        court_code,
        citation_status,
      }}
      onSubmit={(values, actions) => {
        handleFormSubmit(values)
      }}
      render={({
        handleSubmit,
        isSubmitting,
        values,
        handleReset,
        ...props
      }) => (
        <Form>
          <CardContent classes={{ root: classes.cardContent }}>
            <Grid
              container
              spacing={1}
              justify="space-between"
              alignItems="center"
              alignContent="center"
              className={classes.citationContainer}
            >
              <Grid item xs={12} sm={4}>
                <Field
                  disabled={!isEditing}
                  name="citation_number"
                  label="citation no"
                  component={FormGroup}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Field
                  disabled={!isEditing}
                  name="court_code"
                  label="court code"
                  component={FormGroup}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Field
                  disabled={!isEditing}
                  name="citation_status"
                  label="status"
                  component={FormGroup}
                />
              </Grid>
            </Grid>
          </CardContent>
          <CardContent classes={{ root: classes.violationContainer }}>
            <Violations
              isEditing={isEditing}
              handleSelection={handleViolationSelection}
              violations={violationList}
            />
          </CardContent>
          <CardContent classes={{ root: classes.searchContent }}>
            {isEditing && (
              <Search
                disabled={!isEditing}
                searchList={violationCodes}
                placeholder="Search Violations"
                handleSelection={handleViolationSelection}
              />
            )}
          </CardContent>
          <CardActions classes={{ root: classes.cardActions }}>
            {isEditing ? (
              <FormActionBar
                handleDelete={() => handleSubmit}
                handleCancel={() => handleCancel(handleReset)}
              />
            ) : (
              <Grid container direction="row-reverse">
                <Grid item>
                  <EditButton toggleEdit={toggleEdit} />
                </Grid>
              </Grid>
            )}
          </CardActions>
        </Form>
      )}
    />
  )
}

// CitationForm.propTypes = {
//
// }

export default CitationForm

//
// <Card classes={{ root: classes.card }}>
// <CardContent classes={{ root: classes.cardContent }}>
// {/*<div className={classes.citationContainer}>*/}
//
// <Grid container className={classes.citationContainer}>
//   <Grid item md>
//     <Field
//       disabled={!isEditing}
//       name="citation_number"
//       label="citation no"
//       component={FormGroup}
//     />
//   </Grid>
//   <Grid item md>
//     <Field
//       disabled={!isEditing}
//       name="court_code"
//       label="court code"
//       component={FormGroup}
//     />
//   </Grid>
//   <Grid item md>
//     <Field
//       disabled={!isEditing}
//       name="citation_status"
//       label="status"
//       component={FormGroup}
//     />
//   </Grid>
// </Grid>
// {/*</div>*/}
//
// <Violations
//   isEditing={isEditing}
//   handleSelection={handleViolationSelection}
//   violations={violationList}
// />
//
// {isEditing && (
//   <Search
//     disabled={!isEditing}
//     searchList={violationCodes}
//     placeholder="Search Violations"
//     handleSelection={handleViolationSelection}
//   />
// )}
// </CardContent>
// <CardActions className={classes.citationContainer}>
// {isEditing ? (
// <FormActionBar
// handleDelete={() => handleSubmit}
// handleCancel={() => handleCancel(handleReset)}
// />
// ) : (
// <Grid container direction="row-reverse">
// <Grid item>
// <EditButton toggleEdit={toggleEdit} />
// </Grid>
// </Grid>
// )}
// </CardActions>
// </Card>
