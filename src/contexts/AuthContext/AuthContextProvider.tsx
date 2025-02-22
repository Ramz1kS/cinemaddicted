import axios, { AxiosError } from 'axios';
import React, { createContext, FC, useState } from 'react'
import { useServer } from '../../hooks/useServer';

interface authContextType {
  sessionId: string;
  login: (val: string) => void, 
  validateSession: () => void,
  logout: () => void;
}

export const authContext = createContext<authContextType>({
  sessionId: 'none',
  login: (val: string) => {},
  validateSession: () => {},
  logout: () => {}
})

interface AuthContextProviderProps {
  children: React.ReactNode
}

const AuthContextProvider: FC<AuthContextProviderProps> = ({children}) => {
  const apiKey = import.meta.env.VITE_API_READ
  const { useData } = useServer()
  const [sessionId, setSessionId] = useState<string>(localStorage.getItem("tmdb_session_id") || 'none')
  const login = (newSessionId: string) => {
    setSessionId(newSessionId)
    localStorage.setItem("tmdb_session_id", newSessionId)
  }
  const logout = () => {
    useData('https://api.themoviedb.org/3/authentication/session', "DELETE", {
      session_id: sessionId
    }, () => {
      setSessionId('none')
      localStorage.removeItem("tmdb_session_id")})
  }
  const validateSession = async () => {
    const storedSessionId = localStorage.getItem('tmdb_session_id')
    if (!storedSessionId) return
    try {
      let response = await axios.get('https://api.themoviedb.org/3/account', {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          Accept: 'application/json'
        },
        params: {
          session_id: sessionId
        }
      })
      if (response.data) {
        console.log('Session ID is valid')
      }
    } 
    catch (e: AxiosError | any) {
      if (e.code == "ERR_NETWORK") {
        console.error("Cannot connect to server, no need in removing session id!")
        return
      }
      console.error('Session ID is invalid, removing it...', e)
      localStorage.removeItem('tmdb_session_id')
      setSessionId('none')
    }
  }
  return (
    <authContext.Provider value={{ sessionId, login, validateSession, logout }}>
      {children}
    </authContext.Provider>
  )
}

export default AuthContextProvider
