export enum roleEnum {
  customer = 'customer',
  admin = 'admin',
}
export type UserTypes = {
  id: number
  firstname: string
  lastname: string
  email: string
  password: string
  address: string
  phone: string
  role: roleEnum
  createdAt: Date
}

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

export type TableDataType = {
  id: number
}
