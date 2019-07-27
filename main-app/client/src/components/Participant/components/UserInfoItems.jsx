import React from 'react'
import dateFormatter from 'utilities/dateFormatter'
import './UserInfoItems.scss'

// const UserInfoItems = ({ user, editing, editHandler, localUserInfo }) => {
//   let { dob, email, phone, clinic, dl } = localUserInfo
//   let dobText = dob ? dateFormatter(Date.parse(dob)) : 'N/A'
//   let emailText = email ? email : 'N/A'
//   let phoneText = phone ? phone : 'N/A'
//   let clinicText = clinic ? clinic : 'N/A'
//   let dlText = dl ? dl : 'N/A'

const UserInfoItems = ({ editing, handleChange, editHandler, profileInfo }) => {
  let { dob, email, phone, clinic, dl } = profileInfo

  let infoArray = [
    {
      label: 'Clinic Attended',
      value: clinic ? clinic : 'N/A',
      name: 'clinic',
    },
    {
      label: 'Date of Birth',
      value: dob ? dateFormatter(Date.parse(dob)) : 'N/A',
      name: 'dob',
    },
    {
      label: 'Driver License',
      value: dl ? dl : 'N/A',
      name: 'dl',
    },
    {
      label: 'Phone Number',
      value: phone ? phone : 'N/A',
      name: 'phone',
    },
    {
      label: 'Email Address',
      value: email ? email : 'N/A',
      name: 'email',
    },
  ]

  const renderItems = () => {
    return infoArray.map((info, idx) => {
      return (
        <div key={idx} className="user-card-info-unit">
          <input
            className="user-card-info--value"
            value={info.value}
            disabled={!editing}
            name={info.name}
            onChange={e => editHandler(e)}
          />
          <div className="user-card-info--label">{info.label}</div>
        </div>
      )
    })
  }

  return <div className="user-card-info--container">{renderItems()}</div>
}

export default UserInfoItems
