import React from 'react'

import { Sidebar } from './components/Sidebar'
import { Routing } from './routing'
import './styles/app.scss'

export const App = () => {
  return (
    <div className='app'>
      <Sidebar />
      <Routing />
    </div>
  )
}
