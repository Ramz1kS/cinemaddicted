import React, { useContext, useEffect, useState } from 'react'
import classes from './MyAccount.module.css'
import { authContext } from '../../contexts/AuthContext/AuthContextProvider'
import { useServer } from '../../hooks/useServer'
import { useNavigate } from 'react-router-dom'
import { AccountMainData } from '../../../types'
import LogOutButton from '../../components/LogOutButton/LogOutButton'
import LoadingPage from '../LoadingPage/LoadingPage'
import ErrorPage from '../ErrorPage/ErrorPage'
import NavTabUpper from '../../components/NavTabUpper/NavTabUpper'
import UserMoviesList from '../../components/UserMoviesList/UserMoviesList'
import ButtonChoiceContainer from '../../components/ButtonChoiceContainer/ButtonChoiceContainer'
import RatedList from '../../components/RatedList/RatedList'

const MyAccount = () => {
  // Переменные под получение данных
  const { isLoading, isError, data, useData, errorReason } = useServer<AccountMainData>()
  const sessionId = useContext(authContext).sessionId
  const validateSession = useContext(authContext).validateSession
  const navigate = useNavigate()
  useEffect(() => {
    validateSession()
    if (sessionId == 'none')
      navigate('/gototmdb/')
    useData('https://api.themoviedb.org/3/account', "GET", {
      session_id: sessionId
    })
  }, [])

  // Переменные для самой страницы
  const [currSelection, setCurrSelection] = useState<string>('favorites')
  const selectionVariants = ['favorites', 'watchlist', 'rated']
  const selectionHandler = () => {
    switch (currSelection) {
      case "favorites":
        return (<UserMoviesList type={"favorite"} userId={data?.id}></UserMoviesList>)
      case "watchlist":
        return (<UserMoviesList type={"watchlist"} userId={data?.id}></UserMoviesList>)
      case "rated":
        return (<RatedList></RatedList>)
      default:
        return (<></>)
      }
  }

  if (isLoading && !isError) {
    return (<LoadingPage isPage={true}></LoadingPage>)
  } else if (isError) {
    return (<ErrorPage message={errorReason} isPage={true}></ErrorPage>)
  }
  return (
    <div className={classes.myAccountCanvas}>
      <NavTabUpper name='my account'>
        <LogOutButton></LogOutButton>
      </NavTabUpper>
      <div className={classes.basicInfoPage}>
        <img className={classes.avatar}
        src={`https://media.themoviedb.org/t/p/w300_and_h300_face/${data?.avatar.tmdb.avatar_path}`}></img>
        <h3 className={classes.username}>{data?.username}</h3>
        <p className={classes.name}>name: {data?.name != '' ? data?.name : 'unknown'}</p>
      </div>
      <div className={classes.marginDiv}>
        <ButtonChoiceContainer
        setVariant={setCurrSelection}
        variants={selectionVariants}
        currVariant={currSelection}></ButtonChoiceContainer>
      </div>
      { selectionHandler() }
    </div>
  )
}

export default MyAccount
