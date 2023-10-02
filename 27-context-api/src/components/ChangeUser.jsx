import { useContext } from 'react'
import UserContext from '../context/UserContext'

function ChangeUser() {
  const { user, setUser } = useContext(UserContext)

  return (
    <button
      onClick={() => {
        setUser(user === 'React UserName' ? 'Alice' : 'React UserName')
      }}
    >
      ChangeUser
    </button>
  )
}

export default ChangeUser
