import type { ProductTypes } from './types'

export const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-08',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-06',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-07',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]

export const dummyProducts: ProductTypes[] = [
  {
    id: 1,
    title: 'Wireless Headphones',
    price: 59.99,
    description: 'High-quality wireless headphones with noise cancellation.',
    category: 'Electronics',
    image: 'https://via.placeholder.com/150',
    rating: {
      rate: 4.5,
      count: 120,
    },
  },
  {
    id: 2,
    title: 'Running Shoes',
    price: 89.99,
    description: 'Lightweight and comfortable running shoes for all terrains.',
    category: 'Footwear',
    image: 'https://via.placeholder.com/150',
    rating: {
      rate: 4.2,
      count: 78,
    },
  },
  {
    id: 3,
    title: 'Coffee Maker',
    price: 39.99,
    description: 'Automatic drip coffee maker with programmable timer.',
    category: 'Home Appliances',
    image: 'https://via.placeholder.com/150',
    rating: {
      rate: 4.0,
      count: 45,
    },
  },
  {
    id: 4,
    title: 'Yoga Mat',
    price: 25.0,
    description: 'Non-slip yoga mat with extra cushioning for comfort.',
    category: 'Fitness',
    image: 'https://via.placeholder.com/150',
    rating: {
      rate: 4.8,
      count: 200,
    },
  },
  {
    id: 5,
    title: 'Bluetooth Speaker',
    price: 49.99,
    description: 'Portable Bluetooth speaker with powerful sound and long battery life.',
    category: 'Electronics',
    image: 'https://via.placeholder.com/150',
    rating: {
      rate: 4.3,
      count: 150,
    },
  },
]
