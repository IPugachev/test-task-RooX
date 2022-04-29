import React from 'react'

import { setFilter } from '../../store/reducers/ui/uiSlice'
import { useAppDispatch } from '../../store/hooks'

import styles from './styles.module.scss'

export const Sidebar = () => {
  const dispatch = useAppDispatch()
  return (
    <div className={styles.sidebar}>
      Сортировка
      <button onClick={() => dispatch(setFilter('city'))}>По городу</button>
      <button onClick={() => dispatch(setFilter('company'))}>По компании</button>
    </div>
  )
}
