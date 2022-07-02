import React, { useMemo } from 'react'
import { HeroCard } from '../heroes/HeroCard'
import useForm from '../../hooks/useForm'
import { useLocation, useSearchParams } from 'react-router-dom'
import queryString from 'query-string'
import { getHeroesByName } from '../../selectors/getHeroesByName'

export const SearchScreen = () => {
  let location = useLocation()
  const { q = '' } = queryString.parse(location.search)

  const [searchParams, setSearchParams] = useSearchParams()

  const [formValue, setFormValue] = useForm({
    searchHero: q,
  })
  const { searchHero } = formValue

  const heroesFiltered = useMemo(() => getHeroesByName(searchHero), [searchParams])

  const handleSearch = (e) => {
    e.preventDefault()
    setSearchParams(`q=${searchHero}`)

    // setSearchParams(params)
  }

  return (
    <>
      <h1>Search Screen</h1>
      <hr />
      <div className='row'>
        <div className='col-5'>
          <h4 className='mb-4'>SearchForm</h4>
          <form onSubmit={handleSearch}>
            <input
              className='form-control'
              value={searchHero}
              type='text'
              name='searchHero'
              placeholder='Find your hero'
              onChange={setFormValue}
            />
            <div className='d-grid gap-2'>
              <button className='btn btn-outline-primary btn-block mt-2' type='submit'>
                Search
              </button>
            </div>
          </form>
        </div>
        <div className='col-7'>
          <h4>Results</h4>
          {q === '' && <div className='alert alert-info'>Search a hero</div>}

          {q !== '' && heroesFiltered.length === 0 && (
            <div className='alert alert-danger'>There is not a hero with {q}</div>
          )}

          {heroesFiltered.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  )
}
