import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import UserAvatar from './UserAvatar'
import CreateUser from './CreateUser' 

const GET_USERS = gql`
  {
    users {
      id
      name
      email
      username
      postsCount
    }
  }
`

const Users = ({ handleUserSelect }) => {
  const { loading, error, data} = useQuery(GET_USERS)

  function updateUsers(cache, { data: { createUser }}) {
    const { users } = cache.readQuery({ query: GET_USERS })
    cache.writeQuery({
      query: GET_USERS,
      data: { users: users.concat([createUser.user]) }
    })
  }

  if(loading) return <div>Loading...</div>
  if(error) return <div>Error: {error.message}</div>

  return(
    <div className="flex flex-wrap items-center pb-16">
      {data.users.map(user => (
        <div key={user.id} className="lg:w-1/3 w-full p-4 text-center inline" onClick={() => handleUserSelect(user)}>
          <UserAvatar user={user} />
        </div>
      ))}

      <CreateUser onCreateUser={updateUsers} />
    </div>
  )
}

export default Users