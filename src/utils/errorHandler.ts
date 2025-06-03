import { isAxiosError } from 'axios'

export const handleApiError = (err: unknown, defaultMessage = 'An error occurred'): string => {
  console.log(err)
  if (isAxiosError(err)) {
    return err.response?.data || err.message
  }
  return defaultMessage
}
