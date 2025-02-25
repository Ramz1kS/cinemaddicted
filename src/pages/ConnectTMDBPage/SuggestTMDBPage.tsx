import React, { useContext, useEffect, useState } from 'react'
import classes from './SuggestTMDBPage.module.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { RequestToken, SessionIdData } from '../../../types'
import { authContext } from '../../contexts/AuthContext/AuthContextProvider'
import { motion } from 'motion/react'

const SuggestTMDBPage = () => {
  const apiKey = import.meta.env.VITE_API_READ
  const sessionId = useContext(authContext).sessionId
  const [isError, setIsError] = useState<boolean>(false)
  const [canStartAuthorization, setCanStartAuthorization] = useState<boolean>(true)
  const [requestToken, setRequestToken] = useState<string>('')
  const navigate = useNavigate()
  useEffect(() => {
    console.log(sessionId)
    if (sessionId != 'none')
      navigate('/account/')
  }, [])
  // TODO: переделать под useData
  async function authorize() {
    if (!canStartAuthorization)
      return
    setIsError(false)
    setCanStartAuthorization(false)
    // Аутентификация API-ключа
    try {
      let response = await axios.get('https://api.themoviedb.org/3/authentication', 
        {
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${apiKey}`
          }
        }
      )
      if (!response.data.success) {
        setIsError(true)
        return
      }
    }
    catch (e) {
      setIsError(true)
      setCanStartAuthorization(true)
      // TODO: Добавить детали ошибки
      return
    }
    // Получение Request-токена
    try {
      let response = await axios.get<RequestToken>('https://api.themoviedb.org/3/authentication/token/new', 
        {
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${apiKey}`
          }
        }
      )
      if (!response.data.success) {
        setIsError(true)
        setCanStartAuthorization(true)
        return
      }
      localStorage.setItem('tmdb_request_code', response.data.request_token)
      setRequestToken(response.data.request_token)
      window.open(`https://themoviedb.org/authenticate/${localStorage.tmdb_request_code}?redirect_to=http://localhost:5173/successtmdb`, '_blank')
    }
    catch (e) {
      setIsError(true)
      setCanStartAuthorization(true)
      // TODO: Добавить детали ошибки
      return
    }
  }
  const handleClick = () => {
    authorize()
  }
  return (
    <>
    <p 
      onClick={() => navigate('/list/')}
      className={classes.goBackButton}>go back to movie list</p>
    <div className={classes.pageCanvas}>
      <motion.h2 
      initial={{y: -50, opacity: 0}}
      animate={{y: 0, opacity: 1}}
      className={classes.question}>Want use all the features?</motion.h2>
      <motion.div
      className={classes.anotherContainer}
      initial={{y: 50, opacity: 0}}
      animate={{y: 0, opacity: 1}}
      transition={{delay: 0.2}}>
        <p>You should connect your <span className={classes.blueText}>TheMovieDataBase</span> account!</p>
        <p 
        onClick={() => handleClick()}
        style={{opacity: canStartAuthorization ? 1 : 0.5}}
        className={classes.linkToAuth}>click me to do so!</p>
      </motion.div>
      <p 
      style={{opacity: isError ? 1 : 0}}
      className={classes.errorMsg}>Unfortunately, we are unable to connect to TMDB. I'll add some details later lol</p>
    </div>
    </>
  )
}



export default SuggestTMDBPage
