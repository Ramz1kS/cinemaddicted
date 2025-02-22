import React, { FC } from 'react'
import classes from './SimilarMovies.module.css'
import { Film } from '../../../types'
import MovieLink from '../MovieLink/MovieLink'

interface SimilarMoviesProps {
  moviesList: Film[]
}

const SimilarMovies: FC<SimilarMoviesProps> = ({moviesList}) => {
  return (
    <div className={classes.moviesListContainer}>
      <h1 className={classes.sectionName}>SIMILAR</h1>
      <div className={classes.moviesList}>
        {moviesList.slice(0, 10).map((item) => <MovieLink 
        key={item.id} 
        name={item.title}
        rating={item.vote_average}
        year={item.release_date}
        categories={["idk", "idk"]}
        movieId={item.id}
        imageLink={item.poster_path}></MovieLink>)}
      </div>
    </div>
  )
}

export default SimilarMovies
