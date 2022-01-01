import React, { useState } from 'react'
import User from './components/User'
import Users from './components/Users'

function App() {
  const [selectedUser, setSelectedUser] = useState(null)

  const handleUserSelect = (user) => {
    setSelectedUser(user)
  }

  return (
    <div className="App">
      <div className="container mx-auto px-4">
        {selectedUser
          ? <User user={selectedUser} handleUserSelect={handleUserSelect} />
          : <Users handleUserSelect={handleUserSelect} />
        }
      </div>
    </div>
  )
}

export default App
