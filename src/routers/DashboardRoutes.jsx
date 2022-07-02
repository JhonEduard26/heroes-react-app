import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { DcScreen } from '../components/dc/DcScreen'
import { HeroScreen } from '../components/heroes/HeroScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { SearchScreen } from '../components/search/SearchScreen'
import { Navbar } from '../components/ui/Navbar'

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />

      <div className='container mt-4'>
        <Routes>
          <Route path='/' element={<MarvelScreen />} />
          <Route path='marvel' element={<MarvelScreen />} />
          <Route path='dc' element={<DcScreen />} />
          <Route path='search' element={<SearchScreen />} />
          <Route path='hero/:id' element={<HeroScreen />} />
          <Route path='*' element={<h1>404 not found</h1>} />
        </Routes>
      </div>
    </>
  )
}
