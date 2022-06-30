import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LoginScreen } from '../components/login/LoginScreen'
import { DashboardRoutes } from './DashboardRoutes'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<DashboardRoutes />} />
        <Route path='/login' element={<LoginScreen />} />
      </Routes>
    </BrowserRouter>
  )
}
