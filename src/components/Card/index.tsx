import React from 'react'
import { Link } from 'react-router-dom'

import { UserInterface } from '../../interfaces/userInterface'
import styles from './styles.module.scss'

interface CardProps {
  userInfo: UserInterface
}

export const Card = ({ userInfo }: CardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles['card__inner-wrapper']}>
        <div className={styles.card__name}>
          <p>
            ФИО:
            <span>{userInfo.name}</span>
          </p>
        </div>
        <div className={styles.card__city}>
          <p>
            город:
            <span>{userInfo.address.city}</span>
          </p>
        </div>
        <div className={styles.card__company}>
          <p>
            компания:
            <span>{userInfo.company.name}</span>
          </p>
        </div>
      </div>
      <Link to={`user/${userInfo.id}`} className={styles.card__details}>
        Подробнее
      </Link>
    </div>
  )
}
