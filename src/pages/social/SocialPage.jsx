import React, { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'

function SocialPage() {
  const {user} = useContext(UserContext) 
  return (
    <div>Seja bem vindo - {user.name} {user.last_name}</div>
  )
}

export default SocialPage