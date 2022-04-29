import React from 'react'
import { Link } from 'react-router-dom'

import { UserInterface } from '../../interfaces/UserInterface'
import './styles.scss'

interface CardProps {
  userInfo: UserInterface
}

export const Card = ({ userInfo }: CardProps) => {
  return (
    <div className='card'>
      <div className='card__inner-wrapper'>
        <div className='card__name'>
          <p>
            ФИО:
            <span>{userInfo.name}</span>
          </p>
        </div>
        <div className='card__city'>
          <p>
            город:
            <span>{userInfo.address.city}</span>
          </p>
        </div>
        <div className='card__company'>
          <p>
            компания:
            <span>{userInfo.company.name}</span>
          </p>
        </div>
      </div>
      <Link to={`user/${userInfo.id}`} className='card__details'>
        Подробнее
      </Link>
    </div>
  )
}
