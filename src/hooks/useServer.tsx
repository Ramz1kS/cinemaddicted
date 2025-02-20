import axios from 'axios'
import React, { useState } from 'react'

export function useServer<T>() {
  const apiKey = import.meta.env.VITE_API_READ
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isError, setIsError] = useState(false)
  const [data, setData] = useState<T | null>(null)
  async function useData(url: string, method: 'GET' | 'POST' | 'DELETE', params: {}, callback?: () => void) {
    setIsLoading(true)
    setIsError(false)
    try {
      let response = await axios<T>({
        url: url,
        method: method,
        params: params,
        headers: {
          "Content-Type": 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${apiKey}`
        }
      })
      console.log(response.data)
      setData(response.data)
      if (callback)
        callback()
    }
    catch (e) {
      console.log(e)
      setIsError(true)
    }
    finally {
      setIsLoading(false)
    }
  }
  return { isLoading, isError, data, useData }
}
