import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { List } from '../components/List'
import { User } from '../components/User'
import { ROUTES } from '../constants/routes'

export const Routing = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<List />} />
      <Route path={ROUTES.USER} element={<User />} />
    </Routes>
  )
}
