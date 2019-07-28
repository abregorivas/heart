import React from 'react'
import { Formik } from 'formik'
import { useFetch } from '../../../hooks/useFetch'
import { DynamicFormContainer } from 'components/DynamicForm'
import CitationsQA from './Citations.data'
import './Citations.scss'
import { useDataApi } from '../../../hooks/useAxios'

import violationCodes from '../../../api/violationCodes.api'
import Search from '../../Shared/Search'
import Violations from './Violations'
// import Violations from './Violations'

const Citations = ({ user }) => {
  // const [citations, fetchUrl]= useFetch('get', `participants/${user.id}/citations`)
  const [state, fetchData, dispatch] = useDataApi(
    `participants/${user.id}/citations`
  )
  const postFormData = formData => {
    formData.participant_id ? updateCitation(formData) : addCitation(formData)
  }

  const deleteCitation = citation => {
    let data = { id: citation.participant_id, citationId: citation.id }
    fetchData('delete', `citations/${citation.id}`, data)
  }

  const updateCitation = formData => {
    let data = {
      id: formData.participant_id,
      data: formData,
      citationId: formData.id,
    }
    fetchData('put', `citations/${formData.id}`, data)
  }

  const addCitation = formData => {
    let data = { id: user.id, data: formData }
    // fetchData('post', `participants/${user.id}/citations`, data )
  }
  const handleViolationSelection = () => {
    console.log('Selection Clicked')
  }

  return (
    <section className="citations-container">
      <div className="citations-title">Citations</div>
      <div className="citations-form-container">
        {state.isLoading ? (
          <h1>...Loading</h1>
        ) : (
          state.data.map(citation => (
            <div key={citation.id} className="citations-form">
              <DynamicFormContainer
                key={`${citation.participant_id}_${citation.id}`}
                initialData={citation}
                questions={CitationsQA}
                editableMode={true}
                onSubmit={postFormData}
                onDelete={() => deleteCitation(citation)}
              />
              <br />
              <br />
              <div>
                <Violations violations={citation.violations} />
                <Search
                  searchList={violationCodes}
                  handleSelection={handleViolationSelection}
                  placeholder={'Search Violations'}
                />
              </div>
            </div>
          ))
        )}
      </div>
      <button className="citation-addnew--button">+Add New</button>
      {/*<p>{JSON.stringify(state)}</p>*/}
    </section>
  )
}

export default Citations

// import { API_BASE_URL } from '../../../config/url_config'
// import getCitations from "api/getCitations.api";
// import updateCitation from "api/updateCitation.api";
// import deleteCitation from "api/deleteCitation.api";
// import addCitation from "api/addCitation.api";
// <br/>

// class Citations extends React.Component {
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
//         this.fetchUserCitations()
//       }
//     }
//   };
//
//   fetchUserCitations = () => {
//     let userId = this.props.user.id;
//     this.setState({ userId });
//     return getCitations(userId, this.onSuccess, this.onError);
//   }
//
//   onSuccess = data => {
//     this.setState({ loading: false, citations: data });
//   };
//   onError = errorMessage => {
//     this.setState({ error: errorMessage, loading: false });
//     return this.fetchUserCitations()
//   };

// postFormData = formData => {
//   this.setState({ loading: true, error: null });
//   let { userId } = this.state;
//   if (formData.participant_id) {
//     return updateCitation(
//       { id: userId, data: formData, citationId: formData.id },
//       this.onSuccess,
//       this.onError
//     );
//   }
//   return addCitation(
//       { id: userId, data: formData },
//       this.onSuccess,
//       this.onError
//   );
// };

//   deleteCitation = citationId => {
//     this.setState({ loading: true, error: null });
//     console.log(citationId);
//     return;
//     // return deleteCitation(
//       { id: this.state.userId, citationId },
//       this.onSuccess,
//       this.onError
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
//
//     if (citations.length === 0) {
//       return emptyForm;
//     }
//
//     let multipleCitations = citations.map((citation) => {
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

// export default Citations;
