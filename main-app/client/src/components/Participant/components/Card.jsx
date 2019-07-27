import React from 'react'
import './Card.scss'
import UserInfoItems from './UserInfoItems'
import UserNameItems from './UserNameItems'
import updateParticipant from 'api/updateParticipant.api'
import _ from 'lodash'
import Button from './Button.js'

const Card = ({
  namesInfo,
  profileData,
  editing,
  toggleEdit,
  handleChange,
  handleSubmit,
}) => {
  return (
    <div className="user-card--container">
      <div className="user-card-name--container">
        <img
          className="user-card--avatar"
          alt="user-avatar"
          src={require('../../../assets/blank-image.png')}
        />
        <UserNameItems
          namesInfo={namesInfo}
          editing={editing}
          toggleEdit={toggleEdit}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        />
        <Button
          toggleEdit={toggleEdit}
          handleSubmit={handleSubmit}
          editing={editing}
        />
      </div>
    </div>
  )
}

export default Card

// <div className="user-card-name--container">
//   <img
//     className="user-card--avatar"
//     alt="user-avatar"
//     src={require("../../../assets/blank-image.png")}
//   />
//   <div className="user-card-name name-finalized">
//     {`${profileData.first_name} ${profileData.last_name}`}
//   </div>
//   <div className="user-card-name name--aka">AKA</div>
//   <div className="user-card-name aka">{profileData.aka}</div>
//   <button
//     type="button"
//     className={`user-card--edit-btn edit-btn-${
//       !editing ? "edit" : "save"
//     }`}
//   >
//     {editing ? "save" : "edit"}
//   </button>
// </div>

// class Card extends React.Component {
//   state = {
//     editing: false,
//     btnText: "Edit",
//     localUserInfo: {},
//     changeInFormState: false,
//     error: null,
//     loading: false
//   };

//   componentDidMount() {
//     // let { user } = this.props;
//     // if (user) {
//     //   this.initializeFormState(user);
//     // }
//   }

//   componentDidUpdate(prevProps) {
//     // if (prevProps.user !== this.props.user) {
//     //   this.initializeFormState(this.props.user);
//     // }
//   }

//   toggleEditMode = () => {
//     let { editing, localUserInfo, changeInFormState } = this.state;
//     if (this.props.user) {
//       let { id } = this.props.user;
//       if (editing && changeInFormState) {
//         this.postFormData(id, localUserInfo);
//       }
//     }
//     this.setState({
//       editing: !editing,
//       btnText: !editing ? "Save" : "Edit",
//       changeInFormState: false
//     });
//   };
//   onSuccess = data => {
//     this.initializeFormState(data);
//     this.setState({ loading: false });
//   };
//   onError = errorMessage => {
//     this.setState({ error: errorMessage, loading: false });
//   };
//   postFormData = (id, formData) => {
//     this.setState({ loading: true, error: null });
//     return updateParticipant(
//       { id, data: formData },
//       this.onSuccess,
//       this.onError
//     );
//   };
//   editHandler = e => {
//     let { name, value } = e.currentTarget;
//     let { localUserInfo } = this.state;

//     if (name === "aka") {
//       value = value.includes(",") ? value.split(",") : [value];
//     }

//     localUserInfo[name] = value;
//     this.setState({ localUserInfo, changeInFormState: true });
//   };

//   render() {
//     let { editing, btnText } = this.state;
//     let { localUserInfo } = this.props;
//     return (
//       <div className="user-card--container">
// <UserNameItems
//   localUserInfo={localUserInfo}
//   editHandler={this.editHandler}
//   toggleEditMode={this.toggleEditMode}
//   btnText={btnText}
//   editing={editing}
// />;
//         <UserInfoItems
//           localUserInfo={localUserInfo}
//           editHandler={this.editHandler}
//           editing={editing}
//         />
//       </div>
//     );
//   }
// }
