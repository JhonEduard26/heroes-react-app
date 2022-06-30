import React from 'react'
import { useNavigate } from 'react-router-dom'

export const LoginScreen = (props) => {
  console.log(props)

  const navigate = useNavigate()

  const handleLogin = () => {
    navigate('/marvel', { replace: true })
  }

  return (
    <div className='container'>
      <h1>Login</h1>
      <button className='btn btn-primary' type='button' onClick={handleLogin}>
        Login
      </button>
    </div>
  )
}
