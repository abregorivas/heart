import React from 'react'
import { DynamicFormContainer } from 'components/DynamicForm'
import CitationsQA from './Citations.data'
// import getCitations from "api/getCitations.api";
// import updateCitation from "api/updateCitation.api";
// import deleteCitation from "api/deleteCitation.api";
import addCitation from 'api/addCitation.api'
import SearchBar from './SearchBar.js'
import Violations from './Violations.js'
import Button from './Button.js'
import './Citations.scss'

const Citations = ({
  citations,
  editing,
  toggleEdit,
  handleDelete,
  handleSubmit,
  handleViolation,
}) => {
  return (
    <section className="citations-container">
      <div className="citations-title">Citations</div>
      <div className="citations-form-container">
        {citations.map(citation => (
          <div key={citation.id} className="citations-form">
            <div className="form-QA--row">
              <div className="form-QA">
                <label className="form-question">Citation No.</label>
                <input
                  type="text"
                  className="form-input"
                  value={citation.citation_number}
                  disabled={
                    editing.who == `citations${citation.id}` ? true : false
                  }
                  onChange={() => handleSubmit()}
                />
              </div>
              <div className="form-QA">
                <label className="form-question">Court Code</label>
                <div>
                  <input
                    type="text"
                    className="form-input"
                    value={citation.court_code}
                  />
                </div>
              </div>
              <div className="form-QA">
                <label className="form-question">Status</label>
                <div>
                  <select
                    type="text"
                    className="form-input"
                    value={citation.citation_status}
                  >
                    <option value="volvo">Not Sent</option>
                    <option value="saab">Sent</option>
                  </select>
                </div>
              </div>
            </div>
            <Violations
              disabled={editing.who == `citations${citation.id}` ? true : false}
              violations={citation.violations}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              {editing.who == `citations${citation.id}` ? (
                <SearchBar
                  citationNum={citation.citation_number}
                  handleViolation={handleViolation}
                />
              ) : null}
              <Button
                handleClick={
                  editing.who == `citations${citation.id}`
                    ? e => handleSubmit(e)
                    : () => toggleEdit(`citations${citation.id}`)
                }
                editing={
                  editing.who == `citations${citation.id}` ? true : false
                }
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Citations
// <DynamicFormContainer
//   key={`${citation.participant_id}_${citation.id}`}
//   initialData={citation}
//   questions={CitationsQA}
//   editableMode={true}
//   onSubmit={handleSubmit}
//   onDelete={handleDelete}
// />

//   }
//   }
//   )}
// ) : (
//   <div key={-1} className="citations-form">
//     <DynamicFormContainer
//       questions={CitationsQA}
//       editableMode={true}
//       onSubmit={handleSubmit}
//       onDelete={handleDelete}
//     />
//   </div>
// )}

// class Citationss extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       loading: false,
//       error: false,
//       citations: [],
//       userId: null
//     };
//   }
//   componentDidUpdate = prevProps => {
//     // fetch all of users citations
//     if (prevProps.user !== this.props.user) {
//       if (this.props.user.id) {
//         this.fetchUserCitations();
//       }
//     }
//   };

//   fetchUserCitations = () => {
//     let userId = this.props.user.id;
//     this.setState({ userId });
//     return getCitations(userId, this.onSuccess, this.onError);
//   };

//   onSuccess = data => {
//     this.setState({ loading: false, citations: data });
//   };
//   onError = errorMessage => {
//     this.setState({ error: errorMessage, loading: false });
//     return this.fetchUserCitations();
//   };
//   postFormData = formData => {
//     this.setState({ loading: true, error: null });
//     let { userId } = this.state;
//     if (formData.participant_id) {
//       return updateCitation(
//         { id: userId, data: formData, citationId: formData.id },
//         this.onSuccess,
//         this.onError
//       );
//     }
//     return addCitation(
//       { id: userId, data: formData },
//       this.onSuccess,
//       this.onError
//     );
//   };
//   deleteCitation = citationId => {
//     this.setState({ loading: true, error: null });
//     console.log(citationId);
//     return;
//     // return deleteCitation(
//     //   { id: this.state.userId, citationId },
//     //   this.onSuccess,
//     //   this.onError
//     // );
//   };
//   renderCitations = () => {
//     let { citations } = this.state;
//     let emptyForm = (
//       <div key={-1} className="citations-form">
//         <DynamicFormContainer
//           questions={CitationsQA}
//           editableMode={true}
//           onSubmit={this.postFormData}
//           onDelete={this.deleteCitation}
//         />
//       </div>
//     );

//     if (citations.length === 0) {
//       return emptyForm;
//     }

//     let multipleCitations = citations.map(citation => {
//       return (
//         <div key={citation.id} className="citations-form">
//           <DynamicFormContainer
//             key={`${citation.participant_id}_${citation.id}`}
//             initialData={citation}
//             questions={CitationsQA}
//             editableMode={true}
//             onSubmit={this.postFormData}
//             onDelete={this.deleteCitation}
//           />
//         </div>
//       );
//     });
//     multipleCitations.push(emptyForm);
//     return multipleCitations;
//   };
//   render() {
//     return (
//       <section className="citations-container">
//         <div className="citations-title">Citations</div>
//         <div className="citations-form-container">{this.renderCitations()}</div>
//       </section>
//     );
//   }
// }
