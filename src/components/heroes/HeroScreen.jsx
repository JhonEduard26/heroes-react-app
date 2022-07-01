import React, { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById'
import 'animate.css'
export const HeroScreen = () => {
  const { id } = useParams()

  const hero = useMemo(() => getHeroById(id), [id])

  if (!hero) {
    return <Navigate to={'/'} />
  }

  let navigate = useNavigate()

  const handleReturn = () => {
    navigate(-1)
  }

  const { superhero, publisher, alter_ego, first_appearance, characters } = hero

  return (
    <div className='card mb-3'>
      <div className='row g-0'>
        <div className='col-md-4 animate__animated animate__fadeInLeft'>
          <img
            src={`../src/assets/heroes/${id}.jpg`}
            className='img-thumbnail rounded-start'
            alt={superhero}
          />
        </div>
        <div className='col-md-8'>
          <div className='card-body'>
            <h5 className='card-title'>{superhero}</h5>
            <p className='card-text'>{alter_ego}</p>
            <p className='card-text'>{publisher}</p>
            <p className='card-text'>Characters: </p>
            <p className='card-text'>{characters}</p>
            <p className='card-text'>
              <small className='text-muted'>{first_appearance}</small>
            </p>
            <button className='btn btn-outline-info' type='button' onClick={handleReturn}>
              Return
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
