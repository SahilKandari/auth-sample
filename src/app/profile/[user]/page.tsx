import React from 'react'

const UserProfile = ({params}:any) => {
  return (
    <div>User Profile {params.user}</div>
  )
}

export default UserProfile;