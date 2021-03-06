import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'

export const LoginScreen = () => {
  const { dispatch } = useContext(AuthContext)

  const navigate = useNavigate()

  const handleLogin = () => {
    dispatch({
      type: types.login,
      payload: {
        name: 'Jhon',
      },
    })
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
