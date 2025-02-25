import React, { FC, useContext, useEffect } from 'react'
import classes from './UserMoviesList.module.css'
import { useServer } from '../../hooks/useServer'
import { authContext } from '../../contexts/AuthContext/AuthContextProvider';
import LoadingPage from '../../pages/LoadingPage/LoadingPage';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';
import { FilmsArrayData } from '../../../types';
import MovieLink from '../MovieLink/MovieLink';

interface FavoritesPageProps {
  userId: number | undefined;
  type: "favorite" | "watchlist"
}

const UserMoviesList: FC<FavoritesPageProps> = ({userId, type}) => {
  const { isError, isLoading, data, useData } = useServer<FilmsArrayData>()
  const sessionid = useContext(authContext).sessionId
  useEffect(() => {
    useData(`https://api.themoviedb.org/3/account/${userId}/${type}/movies?language=en-US&page=1&sort_by=created_at.asc`, "GET", {
        session_id: sessionid
      }, () => console.log(data)
    )
  }, [type])
  if (isLoading && !isError) {
    return (<LoadingPage isPage={false}></LoadingPage>)
  } else if (isError) {
    return (<ErrorPage isPage={false}></ErrorPage>)
  } else if (!isLoading && data?.total_results == 0) {
    return (<div className={classes.centerer}>
      <h3 className={classes.greyText}>You have no movies in this list yet</h3>
    </div>)
  }
  return (
    <div className={classes.container}>
      { data?.results.map((item) => 
      <MovieLink 
      imageLink={item.poster_path}
      movieId={item.id}
      name={item.title}
      key={item.id}
      rating={item.vote_average}
      categories={['idk', 'idk']}
      year={item.release_date}></MovieLink>) }
    </div>
  )
}

export default UserMoviesList
