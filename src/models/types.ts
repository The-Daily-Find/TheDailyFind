export type LoginTypes = {
  email: string
  password: string
}

export type SignupTypes = {
  firstname: string
  lastname: string

  email: string
  password: string

  address: string
  phone: string
}

export type ProductTypes = {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}
