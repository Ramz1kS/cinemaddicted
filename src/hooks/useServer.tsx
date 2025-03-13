import axios, { AxiosError } from 'axios'
import React, { useState } from 'react'

export function useServer<T>() {
  const apiKey = import.meta.env.VITE_API_READ
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isError, setIsError] = useState(false)
  const [data, setData] = useState<T | null>(null)
  const [errorReason, setErrorReason] = useState("")
  async function useData(url: string, method: 'GET' | 'POST' | 'DELETE', params: {}, callback?: (val?: T) => void) {
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
      // console.log(response.data)
      setData(response.data)
      if (callback)
        callback()
    }
    catch (e: any | Error | AxiosError) {
      if (axios.isAxiosError(e))  {
        setErrorReason(e.message)
      }
      setIsError(true)
    }
    finally {
      setIsLoading(false)
    }
  }
  return { isLoading, isError, data, useData, errorReason }
}
