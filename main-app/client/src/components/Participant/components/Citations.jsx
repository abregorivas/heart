import React, { useState } from 'react'
import {
  Typography,
  Grid,
  Container,
  InputLabel,
  FormControl,
} from '@material-ui/core'
import { Formik, Form, Field } from 'formik'
import { DynamicFormContainer } from 'components/DynamicForm'
import CitationsQA from './Citations.data'
import getCitations from 'api/getCitations.api'
import updateCitation from 'api/updateCitation.api'
// import deleteCitation from 'api/deleteCitation.api'
import addCitation from 'api/addCitation.api'
import './Citations.scss'
import { useFetch } from '../../../hooks/useFetch'
import SectionContainer from './shared/SectionContainer'
import FormInput from './shared/FormInput'
// import FormDropdowm from './shared/FormDropdown'
import { makeStyles } from '@material-ui/core/styles'
import BaseInput from './shared/BaseInput'
import FormGroup from './shared/FormGroup'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    // justifyContent: 'space-evenly'
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    // paddingLeft: theme.spacing(1),
    // margin: theme.spacing(1),
  },
}))

export const CitationsX = ({ user }) => {
  const [state, fetch, dispatch] = useFetch(`citations/${user.id}`)
  const [disabled, setStatus] = useState(false)
  const classes = useStyles()
  return (
    <SectionContainer heading="Citations">
      {state.isLoading ? (
        <p>Loading</p>
      ) : (
        <Formik
          initialValues={state.data[0]}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2))
              actions.setSubmitting(false)
            }, 1000)
          }}
          render={values => (
            <Form className={classes.container}>
              <div>
                <FormGroup
                  id="myField"
                  label="Citation No."
                  type="text"
                  name="citation_number"
                  disabled={disabled}
                />

                <Field
                  id="myField"
                  label="Citation No."
                  type="text"
                  name="citation_number"
                  component={BaseInput}
                  disabled={disabled}
                />
              </div>

              <div>
                <Field
                  id="myField"
                  label="Status"
                  type="text"
                  name="citation_status"
                  component={FormGroup}
                  disabled={disabled}
                />
              </div>
              <Field
                id="myField"
                label="Court Code"
                type="text"
                name="court_code"
                component={FormInput}
                disabled={disabled}
              />
            </Form>
          )}
        />
      )}
      {JSON.stringify(state.data[0])}
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
    return
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
