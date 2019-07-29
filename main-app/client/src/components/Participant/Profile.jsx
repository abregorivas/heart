import React from 'react'
import { Container, Grid } from '@material-ui/core'
import Card from './components/Card'
import Loader from '../UI/Loader'
import Error from '../UI/Error'
import './Profile.scss'
import Citations from './components/Citations'
import Notes from './components/Notes'
import Status from './components/Status'
import { Page, PageContent } from 'components/UI/Page'
import {useFetch} from '../../hooks/useFetch'

const ParticipantProfile = (props) => {
  const [state, fetchData, dispatch] = useFetch(`participants/${props.match.params.id}`);

  return (
    <Page blue>
        {state.isLoading && <Loader />}
        {state.isError && <Error error={state.isError} />}
        {!state.isLoading && state.data && (
          <Container>
            <Grid container spacing={2}>
              <Grid item xs={12}>
            <a href={'/participants'} className="user-profile--nav">
              <i className="fas fa-arrow-left"></i>
              Back to Index
            </a>
              </Grid>
              <Grid item xs={12}>
                <Card user={state.data[0]} />
              </Grid>
              <Grid item xs={8}>
                <Notes user={state.data[0]} />
                <Citations user={state.data[0]} />
              </Grid>
              <Grid item xs={4}>
                <Status user={state.data[0]} />
              </Grid>
            </Grid>
          </Container>
        )}
      {JSON.stringify(state)}
    </Page>
  )
}

export default ParticipantProfile
