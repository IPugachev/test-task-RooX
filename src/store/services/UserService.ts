import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { UserInterface } from '../../interfaces/userInterface'

export const userAPI = createApi({
  reducerPath: 'userAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: (build) => ({
    fetchAllUsers: build.query<UserInterface[], null>({
      query: () => ({
        url: '/users',
      }),
    }),
    fetchUserById: build.query<UserInterface, string>({
      query: (id: string) => ({
        url: `/users/${id}`,
      }),
    }),
  }),
})
