import { FormProvider, useForm } from 'react-hook-form'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

import { userAPI } from '../../store/services/UserService'
import { getInputFields } from './data'
import { Input } from '../../components/Input'
import './styles.scss'

interface IFormInputs {
  [key: string]: string
}

export const User = () => {
  const [isReadOnly, handleReadOnly] = useState(true)
  const { userId } = useParams()
  const { data: user, isLoading, isError } = userAPI.useFetchUserByIdQuery(userId)

  const methods = useForm<IFormInputs>()

  const onSubmit = (data: IFormInputs) => {
    console.log(JSON.stringify(data))
  }

  return (
    <>
      {isLoading && <p className='api-message'>Идёт загрузка..</p>}
      {isError && <p className='api-message'>Ошибка загрузки</p>}
      {user && (
        <FormProvider {...methods}>
          <form className='user' onSubmit={methods.handleSubmit(onSubmit)}>
            <div className='user__title-container'>
              <h2 className='user__title'>Профиль пользователя</h2>
              <button type='button' className='user__update-btn' onClick={() => handleReadOnly((prev) => !prev)}>
                Редактировать
              </button>
            </div>

            <div className='user__inner-wrapper'>
              {getInputFields(user).map((input) => (
                <Input
                  name={input.name}
                  isReadOnly={isReadOnly}
                  label={input.label}
                  placeholder={input.placeholder}
                  validationRules={input.validationRules}
                  key={input.name}
                />
              ))}
              <div className={`user__input`}>
                <label>
                  Comment
                  <textarea {...methods.register('comment')} readOnly={isReadOnly} />
                </label>
              </div>
            </div>
            <button type='submit' disabled={isReadOnly} className='user__submit-btn'>
              Отправить
            </button>
          </form>
        </FormProvider>
      )}
    </>
  )
}
