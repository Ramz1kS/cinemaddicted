import React, { useContext, useEffect, useState } from 'react'
import classes from './SuccessfulTMDBPage.module.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { SessionIdData } from '../../../types'
import { authContext } from '../../contexts/AuthContext/AuthContextProvider'
import { useServer } from '../../hooks/useServer'

const SuccessfulTMDBPage = () => {
  const { isLoading, isError, data, useData } = useServer<SessionIdData>()
  const sessionId = useContext(authContext).sessionId
  const navigate = useNavigate()
  const login = useContext(authContext).login
  const requestToken = localStorage.tmdb_request_code
  useEffect(() => {
    console.log(sessionId)
    if (sessionId != 'none')
      navigate('/account/')
  }, [])
  useEffect(() => {
    useData('https://api.themoviedb.org/3/authentication/session/new', "POST", {
      request_token: requestToken
    })
  }, [])
  useEffect(() => {
    if (data?.session_id) {
      login(data.session_id)
    }
  }, [data])
  return (
    <div className={classes.pageCanvas}>
      { isLoading ? <h3 className={classes.loading}>Now just wait a little longer...</h3> 
      : isError ? <h3 className={classes.sad}>Unfortunately, we couldn't authorize :c</h3> : 
      <>
        <h3 className={classes.yay}>Success!</h3>
        <p>Thank you! You're logged in!</p>
        <Link to='/list/' className={classes.link}><p>discover new films</p></Link>
      </> }
    </div>
  )
}

export default SuccessfulTMDBPage
