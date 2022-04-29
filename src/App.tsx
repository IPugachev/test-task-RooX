import React from 'react'

import { Sidebar } from './components/Sidebar'
import { Routing } from './routing'
import styles from './styles/app.module.scss'

export const App = () => {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Routing />
    </div>
  )
}
