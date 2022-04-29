import React from 'react'
import { useFormContext } from 'react-hook-form'

import { validationFields } from '../../helpers/validations'
import { ValidationRuleType } from '../../interfaces/validationInterfaces'
import styles from './styles.module.scss'

interface InputProps {
  name: string
  label: string
  isReadOnly: boolean
  placeholder: string
  validationRules: ValidationRuleType[]
}

export const Input = ({ name, label, isReadOnly, placeholder, validationRules }: InputProps) => {
  const { register, formState } = useFormContext()

  let registeProps = {}

  for (let i = 0; i < validationRules.length; i++) {
    for (let item in validationFields) {
      if (validationRules[i] === item) {
        registeProps = { ...registeProps, ...validationFields[validationRules[i]] }
      }
    }
  }

  return (
    <div className={`${styles.user__input} ${formState.errors[name] && styles.error}`}>
      <label>
        {label}
        <input {...register(name, { ...registeProps })} readOnly={isReadOnly} placeholder={placeholder} />
      </label>
    </div>
  )
}
