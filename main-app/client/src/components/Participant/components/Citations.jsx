import React, { useState } from 'react'
import { Typography, Grid, Container } from '@material-ui/core'
import { Formik, Form, Field } from 'formik'
import { DynamicFormContainer } from 'components/DynamicForm'
import CitationsQA from './Citations.data'
import getCitations from 'api/getCitations.api'
import updateCitation from 'api/updateCitation.api'
// import deleteCitation from 'api/deleteCitation.api'
import addCitation from 'api/addCitation.api'
import './Citations.scss'
import { useFetch } from '../../../hooks/useFetch'
// import SectionContainer from './shared/SectionContainer'
import FormInput from '../FormElements/FormInput'
import FormDropdowm from './shared/FormDropdown'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    // justifyContent: 'space-evenly'
  },
}))

export const CitationsX = ({ user }) => {
  const [{ data, isLoading, isError }, fetchData] = useFetch(
    `citations/${user.id}`
  )
  const [disabled, setStatus] = useState(true)
  const classes = useStyles()
  return (
    <SectionContainer heading="Citations">
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <Formik
          initialValues={data[0]}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2))
              actions.setSubmitting(false)
            }, 1000)
          }}
          render={values => (
            <Form className={classes.container}>
              <Field
                id="myField"
                label="Citation No."
                type="text"
                name="citation_number"
                component={FormInput}
                disabled={disabled}
              />

              <Field
                id="myField"
                label="Court Code"
                type="text"
                name="court_code"
                component={FormDropdowm}
                disabled={disabled}
              />

              <Field
                id="myField"
                label="Status"
                type="text"
                name="citation_status"
                component={FormInput}
                disabled={disabled}
              />
            </Form>
          )}
        />
      )}
      {JSON.stringify(data[0])}
    </SectionContainer>
  )
}

class Citations extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      error: false,
      citations: [],
      userId: null,
    }
  }
  componentDidUpdate = prevProps => {
    // fetch all of users citations
    if (prevProps.user !== this.props.user) {
      if (this.props.user.id) {
        this.fetchUserCitations()
      }
    }
  }

  fetchUserCitations = () => {
    let userId = this.props.user.id
    this.setState({ userId })
    return getCitations(userId, this.onSuccess, this.onError)
  }

  onSuccess = data => {
    this.setState({ loading: false, citations: data })
  }
  onError = errorMessage => {
    this.setState({ error: errorMessage, loading: false })
    return this.fetchUserCitations()
  }
  postFormData = formData => {
    this.setState({ loading: true, error: null })
    let { userId } = this.state
    if (formData.participant_id) {
      return updateCitation(
        { id: userId, data: formData, citationId: formData.id },
        this.onSuccess,
        this.onError
      )
    }
    return addCitation(
      { id: userId, data: formData },
      this.onSuccess,
      this.onError
    )
  }
  deleteCitation = citationId => {
    this.setState({ loading: true, error: null })
    console.log(citationId)
    // return
    // return deleteCitation(
    //   { id: this.state.userId, citationId },
    //   this.onSuccess,
    //   this.onError
    // );
  }
  renderCitations = () => {
    let { citations } = this.state
    let emptyForm = (
      <div key={-1} className="citations-form">
        <DynamicFormContainer
          questions={CitationsQA}
          editableMode={true}
          onSubmit={this.postFormData}
          onDelete={this.deleteCitation}
        />
      </div>
    )

    if (citations.length === 0) {
      return emptyForm
    }

    let multipleCitations = citations.map(citation => {
      return (
        <div key={citation.id} className="citations-form">
          <DynamicFormContainer
            key={`${citation.participant_id}_${citation.id}`}
            initialData={citation}
            questions={CitationsQA}
            editableMode={true}
            onSubmit={this.postFormData}
            onDelete={this.deleteCitation}
          />
        </div>
      )
    })
    multipleCitations.push(emptyForm)
    return multipleCitations
  }
  render() {
    return (
      <section className="citations-container">
        <div className="citations-title">Citations</div>
        <div className="citations-form-container">{this.renderCitations()}</div>
      </section>
    )
  }
}

export default Citations
