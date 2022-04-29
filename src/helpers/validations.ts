import { IValidationFields } from '../interfaces/validationInterfaces'

export const validationFields: IValidationFields = {
  reqieredFlag: {
    minLength: {
      value: 2,
      message: 'Too short',
    },
    required: {
      value: true,
      message: 'This field is reqiered',
    },
  },
  emailFlag: {
    pattern: {
      value: /^\S+@\S+\.\S+$/,
      message: 'Invalid format',
    },
  },
  phoneFlag: {
    minLength: {
      value: 11,
      message: 'Too short',
    },
    pattern: {
      value: /^([0-9]|\)|\(|\.|\x|\s|\-)+$/,
      message: 'Invalid format',
    },
  },
  zipcodeFlag: {
    minLength: {
      value: 4,
      message: 'Too short',
    },
    pattern: {
      value: /^[0-9]+\-?[0-9]+$/,
      message: 'Invalid format',
    },
  },
}
