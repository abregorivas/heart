import React from 'react'
import './UserNameItems.scss'

const UserNameItems = ({ editing, namesInfo, handleChange }) => {
  return (
    <React.Fragment>
      {editing ? (
        <input
          type="text"
          className="user-card-name"
          value={namesInfo.first_name}
          name={namesInfo.first_name}
          onChange={e => handleChange(e)}
        />
      ) : (
        <React.Fragment>
          <div className="user-card-name name-finalized">
            {`${namesInfo.first_name} ${namesInfo.last_name}`}
          </div>
          <div className="user-card-name name--aka">AKA</div>
          <div className="user-card-name aka">{namesInfo.aka}</div>
        </React.Fragment>
      )}
    </React.Fragment>
  )
}

export default UserNameItems

// <div className="user-card-name--container">
//   <img
//     className="user-card--avatar"
//     alt="user-avatar"
//     src={require("../../../assets/blank-image.png")}
//   />
// const { first_name, last_name, aka } = localUserInfo;
// let firstNameText = first_name ? first_name : "N/A";
// let lastNameText = last_name ? last_name : "N/A";
// let akaText = aka ? aka : "N/A";

// let nameArray = [
//   {
//     value: firstNameText,
//     name: "first_name"
//   },
//   {
//     value: lastNameText,
//     name: "last_name"
//   },
//   {
//     value: akaText,
//     name: "aka"
//   }
// ];

// let renderedNameArray = [
//   {
//     value: () => {
//       return `${firstNameText} ${lastNameText}`;
//     }
//   },
//   {
//     value: () => {
//       return akaText;
//     }
//   }
// ];

// const renderItems = editing => {
//   if (editing) {
//     return nameArray.map((info, idx) => {
//       return (
//         <input
//           key={idx}
//           id={`input-${info.name}`}
//           className="user-card-name"
//           disabled={!editing}
//           value={info.value || info.value()}
//           name={info.name}
//           onChange={e => {
//             editHandler(e);
//           }}
//         />
//       );
//     });
//   }

//   return (
//     <>
//       <div className="user-card-name name-finalized">
//         {renderedNameArray[0].value()}
//       </div>
//       <div className="user-card-name name--aka">AKA</div>
//       <div className="user-card-name aka">{renderedNameArray[1].value()}</div>
//     </>
//   );
// };
