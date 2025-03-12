import React, { FC, useContext } from 'react'
import classes from './SimilarMovies.module.css'
import { Film } from '../../../types'
import MovieLink from '../MovieLink/MovieLink'
import { dataContext } from '../../contexts/DataContext/DataContextProvider'

interface SimilarMoviesProps {
  moviesList: Film[]
}

const SimilarMovies: FC<SimilarMoviesProps> = ({moviesList}) => {
  const genres = useContext(dataContext).movie_genres
  const makeGenresString = (ids: number[]) => {
    if (!genres)
      return "..."
    const needed_genres = genres.genres.filter((item) => ids.includes(item.id))
    if (needed_genres.length == 0) {
      return "none"
    }
    if (needed_genres.length == 1) {
      return needed_genres[0].name
    }
    else {
      var result = ""
      for (var i = 0; i < 2; i++) {
        result += needed_genres[i].name
        if (i != 1)
          result += ", "
      }
      return result.toLowerCase()
    }
  }
  return (
    <div className={classes.moviesListContainer}>
      <h1 className={classes.sectionName}>SIMILAR</h1>
      { moviesList.length == 0 ? 
        <p className={classes.greyText}>Seems like there are no similar movies here...</p>
      :
        <div className={classes.moviesList}>
        {moviesList.slice(0, 10).map((item) => <MovieLink 
        key={item.id} 
        name={item.title}
        rating={item.vote_average}
        year={item.release_date}
        categories={makeGenresString(item.genre_ids)}
        movieId={item.id}
        imageLink={item.poster_path}></MovieLink>)}
      </div>}
    </div>
  )
}

export default SimilarMovies
