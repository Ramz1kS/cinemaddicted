import React, { useContext, useEffect, useState } from 'react'
import classes from './MyAccount.module.css'
import { authContext } from '../../contexts/AuthContext/AuthContextProvider'
import { useServer } from '../../hooks/useServer'
import { useNavigate } from 'react-router-dom'
import { AccountMainData } from '../../../types'
import { motion } from 'motion/react'
import LogOutButton from '../../components/LogOutButton/LogOutButton'
import LoadingPage from '../LoadingPage/LoadingPage'
import ErrorPage from '../ErrorPage/ErrorPage'
import NavTabUpper from '../../components/NavTabUpper/NavTabUpper'
import MovieDescription from '../../components/MovieDescription/MovieDescription'

const MyAccount = () => {
  // Переменные под получение данных
  const { isLoading, isError, data, useData } = useServer<AccountMainData>()
  const sessionId = useContext(authContext).sessionId
  const validateSession = useContext(authContext).validateSession
  const navigate = useNavigate()
  useEffect(() => {
    validateSession()
    console.log(sessionId)
    if (sessionId == 'none')
      navigate('/gototmdb/')
    useData('https://api.themoviedb.org/3/account', "GET", {
      session_id: sessionId
    })
  }, [])

  // Переменные для самой страницы
  const [currSelection, setCurrSelection] = useState<string>('favorites')
  const selectionVariants = ['favorites', 'wishlist', 'reviews']
  const selectionHandler = () => {
    switch (currSelection) {
      case "favorites":
        return (<div>broski</div>)
      default:
        return (<div>brobrobroskiii</div>)
    }
  }

  if (isLoading && !isError) {
    return (<LoadingPage isPage={true}></LoadingPage>)
  } else if (isError) {
    return (<ErrorPage isPage={true}></ErrorPage>)
  }
  return (
    <div className={classes.pageCanvas}>
      <NavTabUpper name='my account'>
        <LogOutButton></LogOutButton>
      </NavTabUpper>
      <h3>If you see this, it means that you are logged in! Hooray!</h3>
      <div className={classes.basicInfoPage}>
        <img className={classes.avatar}
        src={`https://media.themoviedb.org/t/p/w300_and_h300_face/${data?.avatar.tmdb.avatar_path}`}></img>
        <h3 className={classes.username}>{data?.username}</h3>
        <p className={classes.name}>name: {data?.name != '' ? data?.name : 'unknown'}</p>
      </div>
      <div className={classes.buttonsContainer}>
        {selectionVariants.map((item, index) => 
          <motion.p 
          initial={{scale: 1}}
          animate={{scale: currSelection == item ? 1.1 : 1}}
          key={index}
          style={{borderBottom: currSelection == item ? "1px solid white" : "none"}}
          onClick={() => setCurrSelection(item)}
          className={classes.button}>{item}</motion.p>)}
      </div>
      { selectionHandler() }
    </div>
  )
}

export default MyAccount
