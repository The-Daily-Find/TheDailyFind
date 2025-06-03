import { useProductStore } from '@/stores/productStore'
import axios from '@/api/axios'
import { handleApiError } from '@/utils/errorHandler'

export const getProducts = async () => {
  const productStore = useProductStore()
  try {
    productStore.setLoading(true)
    const res = await axios.get('/products')
    console.log(res.data)
    productStore.setProducts(res.data)
  } catch (error) {
    productStore.setErrorMsg(handleApiError(error))
  } finally {
    productStore.setLoading(false)
  }
}

export const getProductById = async (prodId: number) => {
  const productStore = useProductStore()
  try {
    const res = await axios.get(`/products/${prodId}`)
    console.log(res)
  } catch (error) {
    productStore.setErrorMsg(handleApiError(error))
  }
}

export const sortProductsByCategory = () => {
  const productStore = useProductStore()
  const products = productStore.getProducts
  const result = products.sort((a, b) => a.category.localeCompare(b.category))
  productStore.setProducts(result)
}

export const sortProductsByPrice = (val: 'Low' | 'High') => {
  const productStore = useProductStore()
  const products = productStore.getProducts.slice()

  const result =
    val === 'Low'
      ? products.sort((a, b) => a.price - b.price)
      : products.sort((a, b) => b.price - a.price)

  productStore.setProducts(result)
}

export const sortProductsByRatings = () => {
  const productStore = useProductStore()
  const products = productStore.getProducts
  const result = products.sort((a, b) => b.rating.count - a.rating.count)
  productStore.setProducts(result)
}

export const filterProductsByRatings = (val: number) => {
  const productStore = useProductStore()
  const products = productStore.getProducts.slice()
  const result = products.filter((item) => Math.floor(item.rating.rate) === val)
  productStore.setProducts(result)
}

export const filterProductsByCategory = (val: string) => {
  const productStore = useProductStore()
  const products = productStore.getProducts.slice()
  const result = products.filter((item) => item.category === val)
  productStore.setProducts(result)
}
