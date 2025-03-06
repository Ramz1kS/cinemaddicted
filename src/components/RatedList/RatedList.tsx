import React, { useContext, useEffect, useState } from 'react'
import classes from './RatedList.module.css'
import { useServer } from '../../hooks/useServer'
import LoadingPage from '../../pages/LoadingPage/LoadingPage'
import ErrorPage from '../../pages/ErrorPage/ErrorPage'
import { authContext } from '../../contexts/AuthContext/AuthContextProvider'
import { FilmsArrayData } from '../../../types'
import RatingNumber from '../RatingNumber/RatingNumber'
import RatedListElement from '../RatedListElement/RatedListElement'
import Paginator from '../Paginator/Paginator'

const RatedList = () => {
  const sessionId = useContext(authContext).sessionId
  const userId = useContext(authContext).userId
  const [pageNum, setPageNum] = useState(1)
  const { isLoading, isError, data, useData } = useServer<FilmsArrayData>()
  useEffect(() => {
    useData(`https://api.themoviedb.org/3/account/${userId}/rated/movies?language=en-US&page=1&sort_by=created_at.asc`, 
      'GET',
      {
        session_id: sessionId,
        page: pageNum
      }
    )
  }, [pageNum])
  if (isLoading) {
    return <LoadingPage isPage={false}></LoadingPage>
  }
  if (isError) {
    return <ErrorPage isPage={false}></ErrorPage>
  }
  if (data) {
    console.log(data) 
  return (
    <div className={classes.ratedListContainer}>
      <div className={classes.list}>
        {data.results.map((item) => (<RatedListElement key={item.id} imageLink={item.poster_path} title={item.title} movieId={item.id} rating={item.rating}></RatedListElement>))}
      </div>
      <Paginator pageNum={pageNum} totalPages={data.total_pages} setPageNum={setPageNum}></Paginator>
    </div>
  )}
}

export default RatedList
