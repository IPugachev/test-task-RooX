import { ValidationRuleType, ValidationRulesEnum } from '../../interfaces/ValidationInterfaces'
import { UserInterface } from '../../interfaces/UserInterface'

interface InputFieldsInterface {
  name: string
  label: string
  placeholder: string
  validationRules: ValidationRuleType[]
}

const { email, phone, reqiered, zipcode } = ValidationRulesEnum

export const getInputFields = (user: UserInterface): InputFieldsInterface[] => [
  {
    name: 'name',
    label: 'Name',
    placeholder: user.name,
    validationRules: [reqiered],
  },

  {
    name: 'username',
    label: 'User name',
    placeholder: user.username,
    validationRules: [reqiered],
  },

  {
    name: 'email',
    label: 'E-mail',
    placeholder: user.email,
    validationRules: [reqiered, email],
  },

  {
    name: 'street',
    label: 'Street',
    placeholder: user.address.street,
    validationRules: [reqiered],
  },

  {
    name: 'city',
    label: 'City',
    placeholder: user.address.city,
    validationRules: [reqiered],
  },

  {
    name: 'zipcode',
    label: 'Zipcode',
    placeholder: user.address.zipcode,
    validationRules: [reqiered, zipcode],
  },

  {
    name: 'phone',
    label: 'Phone',
    placeholder: user.phone,
    validationRules: [reqiered, phone],
  },

  {
    name: 'website',
    label: 'Website',
    placeholder: user.website,
    validationRules: [reqiered],
  },
]
