import React from 'react'
import { Container, Grid, Link } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Card from './components/Card'
import Loader from '../UI/Loader'
import Error from '../UI/Error'
import Citations from './components/Citations'
import Notes from './components/Notes'
import Status from './components/Status'
import { useFetch } from '../../hooks/useFetch'
import { CitationsX } from './components/Citations'
import './Profile.scss'
import getParticipant from 'api/getParticipant.api'
import updateParticipant from 'api/updateParticipant.api'
// import getNotes from "api/getNotes.api";

import getCitations from 'api/getCitations.api'
import addCitation from 'api/addCitation.api'
import updateCitation from 'api/updateCitation.api'
// import Status from "./components/Status";
// import _ from "lodash";
import axios from 'axios'

import { getFields, objectDifference } from '../../utilities/utils.js'
import deleteCitation from 'api/deleteCitation.api'

const useStyles = makeStyles(theme => ({
  root: { padding: theme.spacing(2), backgroundColor: '#f3f7fc' },
  link: {
    color: '#252525',
    cursor: 'pointer',
    textTransform: 'uppercase',
    fontSize: 12,
    fontWeight: 600,
    '&:hover': {
      color: '#428FE2',
      textDecoration: 'none',
    },
  },
  arrowLeft: {
    display: 'inline-block',
    marginBottom: theme.spacing(1),
    marginLeft: theme.spacing(1),
  },
}))

/*
refactored to use fetch hook but still pending connecting the crud actions
to each form.
Also removed sass requirement and using material-ui grid
 */

const ParticipantProfile = props => {
  const [state, fetchData, dispatch] = useFetch(
    `participants/${props.match.params.id}`
  )
  const classes = useStyles()
  return (
    <>
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
      <div className={classes.root}>
        {state.isLoading ? (
          <Loader />
        ) : (
          <Container>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Link to="/participants" className={classes.link}>
                  {state.isError && <Error error={state.isError} />}
                  <i className="fas fa-arrow-left"></i>
                  <span className={classes.arrowLeft}>Back to Index</span>
                </Link>
              </Grid>
              <Grid item xs={12}>
                <Card user={state.data[0]} />
              </Grid>
              <Grid item xs={8}>
                <Notes user={state.data[0]} />
                <Citations user={state.data[0]} />
                <CitationsX user={state.data[0]} />
              </Grid>
              <Grid item xs={4}>
                <Status user={state.data[0]} />
              </Grid>
            </Grid>
          </Container>
        )}
      </div>
    </>
  )
}

// class ParticipantProfile extends React.Component {
//   state = {
//     participant: {},
//     notes: {},
//     citations: [],
//     violationCodes: [],
//     error: null,
//     loading: true,
//     editing: { status: false, who: null }
//   };
//
//   componentDidMount() {
//     let { id } = this.props.match.params;
//     if (id) {
//       axios
//         .all([getParticipant(id), getCitations(id)])
//         .then(
//           axios.spread((participant, citations) => {
//             console.log(participant);
//             console.log(citations);
//             this.setState({
//               loading: false,
//               participant: participant,
//               citations: citations.data
//             });
//           })
//         )
//         .catch(err => this.setState({ error: err.message, loading: false }));
//     } else {
//       this.onError("Please add a participant ID to the route.");
//     }
//   }
//
//   toggleEdit = editTrigger => {
//     this.setState(prevState => ({
//       editing: {
//         status: !prevState.editing.status,
//         who: prevState.editing.who ? null : editTrigger
//       }
//     }));
//   };
//
//   handleChange = e => {
//     e.preventDefault();
//     const name = e.target.name;
//     const value = e.target.value;
//     this.setState(prevState => ({
//       participant: { ...prevState.participant, [name]: value }
//     }));
//   };
//
//   updateProfile = () => {
//     let { id } = this.props.match.params;
//     let { participant } = this.state;
//     return updateParticipant({ id, data: participant }).then(res => {
//       this.toggleEdit();
//
//       console.log(objectDifference(res.data.participants[0], participant));
//       // requires a confirm update message
//     });
//   };
//
//   updateNote = () => {
//     console.log("Notes updated");
//     this.toggleEdit();
//   };
//
//   deleteNote = () => {
//     console.log("notes deleted");
//     this.toggleEdit();
//   };
//
//   addCitation = newCitation => {
//     // need way to determin whether adding or editing
//     let { id } = this.props.match.params;
//     return addCitation({ id, data: newCitation }).then(res => {
//       this.toggleEdit();
//       console.log(res);
//     });
//   };
//
//   updateCitations = (participantId, citationId) => {
//     console.log("citation updated");
//     this.toggleEdit();
//   };
//
//   deleteCitation = id => {
//     console.log("citation deleted");
//     this.toggleEdit();
//   };
//
//   updateViolation = (citationNum, violationCode) => {
//     let { citations } = this.state;
//     let updatedCitations = citations.reduce((prev, cur) => {
//       if (cur.citation_number == citationNum) {
//         cur.violations.push(violationCode);
//         prev.push(cur);
//       } else {
//         prev.push(cur);
//       }
//       return prev;
//     }, []);
//
//     this.setState(prevState => ({
//       citations: updatedCitations
//     }));
//   };
//
//   render() {
//     let { participant, citations, loading, error, editing, notes } = this.state;
//
//     return (
//       <div className="user-profile--container">
//         {loading ? (
//           <Loader />
//         ) : (
//           <div className="user-profile--content-container">
//             <a href={"/participants"} className="user-profile--nav">
//               <i className="fas fa-arrow-left" />
//               Back to Index
//             </a>
//             <Card
//               namesInfo={getFields(
//                 ["first_name", "last_name", "aka"],
//                 participant
//               )}
//               profileInfo={getFields(
//                 ["dob", "email", "phone", "clinic", "dl"],
//                 participant
//               )}
//               editing={editing.who == "card" ? true : false}
//               toggleEdit={this.toggleEdit}
//               handleChange={this.handleChange}
//               handleSubmit={this.updateProfile}
//             />
//
//             <Notes
//               editing={editing.who == "notes" ? true : false}
//               toggleEdit={this.toggleEdit}
//               handleSubmit={this.updateNote}
//               handleDelete={this.deleteNote}
//               notes={notes}
//             />
//
//             <Citations
//               editing={editing}
//               toggleEdit={this.toggleEdit}
//               handleSubmit={this.updateCitations}
//               handleDelete={this.deleteCitation}
//               handleViolation={this.updateViolation}
//               citations={citations}
//             />
//           </div>
//         )}
//       </div>
//     );
//   }
// }
//
// export default ParticipantProfile
//
// <Citations user={participant} />
// <Status user={participant} />
//
// {error && <Error error={error} />}
