import React, { useContext, useEffect } from 'react'
import classes from './MoviePage.module.css'
import UpperMoviePage from './UpperMoviePage'
import ExtraMovieInfo from '../../components/ExtraMovieInfo/ExtraMovieInfo'
import NavTabLeft from '../../components/NavTabLeft/NavTabLeft'
import { useParams } from 'react-router-dom'
import LoadingPage from '../LoadingPage/LoadingPage'
import ErrorPage from '../ErrorPage/ErrorPage'
import { useServer } from '../../hooks/useServer'
import { authContext } from '../../contexts/AuthContext/AuthContextProvider'
import { Film, FilmsArrayData, Genre } from '../../../types'
import { getRandomInRange } from '../../hooks/useRandom'
import ReviewsList from '../../components/Reviews/ReviewsList'
import SimilarMovies from '../../components/SimilarMovies/SimilarMovies'
import { dataContext } from '../../contexts/DataContext/DataContextProvider'

const MoviePage = () => {
  const { isLoading, isError, data, useData } = useServer<Film>()
  const sessionid = useContext(authContext).sessionId
  const { movieId } = useParams()
  useEffect(() => {
    useData(`https://api.themoviedb.org/3/movie/${movieId}?append_to_response=credits,videos,images,reviews,similar,account_states`, 'GET', {
      session_id: sessionid,
      'accept': 'application/json'
    })
  }, [movieId])

  const makeGenresString = (genres: Genre[]) => {
      var result = ""
      for (var i = 0; i < 2; i++) {
        result += genres[i].name
        if (i != 1)
          result += ", "
      }
      return result.toLowerCase()
  }

  const getBackgroundImage = () => {
    if (!data)
      return ''
    if (data?.images.backdrops.length == 0)
      return ''
    const possibleBackgrounds = data?.images.backdrops.filter((item, _) => item.iso_639_1 == null)
    if (!possibleBackgrounds)
      return ''
    if (possibleBackgrounds.length == 0)
      return ''
    return possibleBackgrounds[getRandomInRange(0, possibleBackgrounds.length)].file_path
  }
  if (isLoading && !isError) {
    return (<LoadingPage isPage={true}></LoadingPage>)
  } else if (isError) {
    return (<ErrorPage isPage={true}></ErrorPage>)
  } 

  if (!data)
    return
  return (
    <div className={classes.pageCanvas} key={movieId}>
      <UpperMoviePage 
      status={data.account_states}
      movieId={movieId ?? ''}
      rating={data.vote_average}
      voteCount={data.vote_count}
      backgroundImage={getBackgroundImage()}
      runtime={data.runtime}
      movieName={data.title}
      genres={makeGenresString(data.genres)}
      directors={data.credits.crew.filter((item) => item.job == "Director") ?? []}
      posterLink={data.poster_path}
      countries={data.production_countries}
      companies={data.production_companies}
      releaseDate={data.release_date}></UpperMoviePage>
      <ExtraMovieInfo
      images={data.images}
      cast={data.credits.cast}
      description={data.overview}></ExtraMovieInfo>
      <ReviewsList reviews={data.reviews}></ReviewsList>
      <SimilarMovies moviesList={data.similar.results}></SimilarMovies>
      <NavTabLeft></NavTabLeft>
    </div>
  )
}

export default MoviePage
