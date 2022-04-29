export interface IValidationFields {
  reqieredFlag: {
    minLength: {
      value: number
      message: string
    }
    required: {
      value: boolean
      message: string
    }
  }
  emailFlag: {
    pattern: {
      value: RegExp
      message: string
    }
  }
  phoneFlag: {
    minLength: {
      value: number
      message: string
    }
    pattern: {
      value: RegExp
      message: string
    }
  }
  zipcodeFlag: {
    minLength: {
      value: number
      message: string
    }
    pattern: {
      value: RegExp
      message: string
    }
  }
}

export enum ValidationRulesEnum {
  reqiered = 'reqieredFlag',
  email = 'emailFlag',
  phone = 'phoneFlag',
  zipcode = 'zipcodeFlag',
}

export type ValidationRuleType = keyof IValidationFields
