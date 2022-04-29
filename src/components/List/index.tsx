import React from 'react'

import { userAPI } from '../../store/services/userService'
import { Card } from '../../components/Card'
import { useAppSelector } from '../../store/hooks'
import { UserInterface } from '../../interfaces/userInterface'
import styles from './styles.module.scss'

export const List = () => {
  const { data, isLoading, isError } = userAPI.useFetchAllUsersQuery(null)

  const filteredBy = useAppSelector((store) => store.ui.fiteredeBy)
  let users: UserInterface[]
  if (filteredBy === 'city' && data) {
    users = [...data].sort((a, b) => {
      if (a.address.city > b.address.city) return 0
      return -1
    })
  } else if (filteredBy === 'company' && data) {
    users = [...data].sort((a, b) => {
      if (a.company.name > b.company.name) return 0
      return -1
    })
  } else {
    users = data
  }

  return (
    <div className={styles.list__container}>
      <h3 className={styles.list__title}>Список пользователей</h3>
      {isLoading && <p className='api-message'>Идёт загрузка..</p>}
      {isError && <p className='api-message'>Ошибка загрузки</p>}
      {users && users.map((user) => <Card userInfo={user} key={user.id} />)}
      {users && <p className={styles['list__users-amount']}>Найдено {data.length} пользователей</p>}
    </div>
  )
}
