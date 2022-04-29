interface AdressInterface {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: { lat: number; lng: number }
}

interface CompanyInterface {
  name: string
  catchPhrase: string
  bs: string
}

export interface UserInterface {
  address: AdressInterface
  company: CompanyInterface
  email: string
  id: number
  name: string
  phone: string
  username: string
  website: string
}
