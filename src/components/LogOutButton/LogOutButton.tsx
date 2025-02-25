import React, { useContext, useEffect, useState } from 'react'
import classes from './LogOutButton.module.css'
import { useServer } from '../../hooks/useServer'
import { authContext } from '../../contexts/AuthContext/AuthContextProvider'
import { useNavigate } from 'react-router-dom'

const LogOutButton = () => {
  const sessionId = useContext(authContext).sessionId
  const [isClicked, setIsClicked] = useState(false)
  const logout = useContext(authContext).logout
  const navigate = useNavigate()
  const handleClick = () => {
    setIsClicked(true)
    logout()
  }
  useEffect(() => {
    if (sessionId == 'none')
      navigate('/gototmdb')
  }, [sessionId])
  return (
    <p 
    className={classes.link} 
    onClick={handleClick}
    style={{opacity: isClicked ? 0.5 : 1}}
    >log out</p>
  )
}

export default LogOutButton
