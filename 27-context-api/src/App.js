import { useState } from 'react'
import './App.css'
import User from './components/User'
import UserContext from './context/UserContext'
import ChangeUser from './components/ChangeUser'

function App() {
  const [user, setUser] = useState('React UserName')

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App">
        <User />
        <ChangeUser></ChangeUser>
      </div>
    </UserContext.Provider>
  )
}

export default App
