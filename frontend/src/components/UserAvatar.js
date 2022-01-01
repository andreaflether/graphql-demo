import React from 'react'
import Gravatar from 'react-gravatar'

const UserAvatar = ({ user }) => {
  return(
    <>
      <Gravatar email={user.email} size={200} className="rounded-full text-center inline" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-1">
          {user.name} 
        </div>
        <p className="text-gray-900">@{user.username}</p>
        <p className="text-gray-500 text-base">{user.postsCount} posts</p>
      </div>
    </>
  )
}

export default UserAvatar