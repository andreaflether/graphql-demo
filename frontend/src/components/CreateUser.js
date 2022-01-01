import React, { useState } from 'react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'

const CREATE_USER = gql`
  mutation CreateUser($name: String!, $email: String!, $username: String!) {
    createUser(input: { name: $name, email: $email, username: $username }) {
      user {
        id
        name
        email
        username
        postsCount
      }
    }
  }
`

const CreateUser = ({ onCreateUser }) => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    username: ''
  })

  console.log(user)

  const onSubmit = (e, createUser) => {
    e.preventDefault()
    createUser({ variables: user })
    setUser({
      name: '',
      email: '',
      username: ''
    })
  }

  return(
    <Mutation
      mutation={CREATE_USER}
      update={onCreateUser}
    >
      {createUserMutation => (
        <div className="lg:fixed bottom-0 left-0 w-full bg-white border-t border-gray-300 py-2">
          <form className="lg:px-8 pt-2" onSubmit={(e) => onSubmit(e, createUserMutation)}>
            <div className="lg:flex flex-wrap flex-between items-center justify-center lg:p-0 p-6">
              <h4 className="font-bold lg:pr-4 mb-2">Create new user</h4>
              <div className="lg:pr-4 mb-2">
                <input 
                  type="text" 
                  className="border focus:border-blue-500 focus:outline-none rounded w-full py-2 px-3" 
                  value={user.name} 
                  placeholder="Name" 
                  onChange={(e) => setUser({ ...user, name: e.target.value })} 
                />
              </div>
              <div className="lg:pr-4 mb-2">
                <input 
                  type="text" 
                  className="border focus:border-blue-500 focus:outline-none rounded w-full py-2 px-3" 
                  value={user.username} 
                  placeholder="Username" 
                  onChange={(e) => setUser({ ...user, username: e.target.value })} 
                />
              </div>
              <div className="lg:pr-4 mb-2">
                <input 
                  type="text" 
                  className="border focus:border-blue-500 focus:outline-none rounded w-full py-2 px-3" 
                  value={user.email} 
                  placeholder="Email" 
                  onChange={(e) => setUser({ ...user, email: e.target.value })} 
                />
              </div>
              <button className="bg-blue-500 text-white px-4 py-2 rounded mb-2" type="submit">
                Create user
              </button>
            </div>
          </form>
        </div>
      )}
    </Mutation>
  )
}

export default CreateUser