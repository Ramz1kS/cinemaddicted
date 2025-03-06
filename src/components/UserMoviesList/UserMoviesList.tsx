import React, { FC, useContext, useEffect, useState } from 'react'
import classes from './UserMoviesList.module.css'
import { useServer } from '../../hooks/useServer'
import { authContext } from '../../contexts/AuthContext/AuthContextProvider';
import LoadingPage from '../../pages/LoadingPage/LoadingPage';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';
import { FilmsArrayData } from '../../../types';
import MovieLink from '../MovieLink/MovieLink';
import Paginator from '../Paginator/Paginator';

interface FavoritesPageProps {
  userId: number | undefined;
  type: "favorite" | "watchlist"
}

const UserMoviesList: FC<FavoritesPageProps> = ({userId, type}) => {
  const { isError, isLoading, data, useData } = useServer<FilmsArrayData>()
  const sessionid = useContext(authContext).sessionId
  const [pageNum, setPageNum] = useState(1)
  useEffect(() => {
    useData(`https://api.themoviedb.org/3/account/${userId}/${type}/movies?language=en-US&page=1&sort_by=created_at.asc`, "GET", {
        session_id: sessionid,
        // данное убожество расчитано на случай, когда при смене категории pageNum будет больше totalPages
        page: pageNum > (data?.total_pages ?? 0) ? 1 : pageNum 
      }
    )
  }, [type, pageNum])
  if (isLoading && !isError) {
    return (<LoadingPage isPage={false}></LoadingPage>)
  } else if (isError) {
    return (<ErrorPage isPage={false}></ErrorPage>)
  } else if (!isLoading && data?.total_results == 0) {
    return (<div className={classes.centerer}>
      <h3 className={classes.greyText}>You have no movies in this list yet</h3>
    </div>)
  }
  if (data)
  return (
    <div className={classes.movieLinkListContainer}>
      <div className={classes.movieLinkList}>
        { data.results.map((item) => 
        <MovieLink 
        imageLink={item.poster_path}
        movieId={item.id}
        name={item.title}
        key={item.id}
        rating={item.vote_average}
        categories={['idk', 'idk']}
        year={item.release_date}></MovieLink>) }
      </div>
      <Paginator pageNum={pageNum} setPageNum={setPageNum} totalPages={data?.total_pages}></Paginator>
    </div>
  )
}

export default UserMoviesList
