import React, { FC, useContext } from 'react'
import Paginator from '../Paginator/Paginator'
import classes from './MovieList.module.css'
import MovieLink from '../MovieLink/MovieLink'
import { Film } from '../../../types'
import { dataContext } from '../../contexts/DataContext/DataContextProvider'

interface MovieListProps {
  data: Film[];
  pageNum: number;
  setPageNum: (val: number) => void;
  totalPages: number;
}

const MovieList: FC<MovieListProps> = ({data, pageNum, totalPages, setPageNum}) => {
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
  if (data)
  return (
    <div className={classes.movieLinkListContainer}>
      <div className={classes.movieLinkList}>
        { data.map((item) => 
        <MovieLink 
        imageLink={item.poster_path}
        movieId={item.id}
        name={item.title}
        key={item.id}
        rating={item.vote_average}
        categories={makeGenresString(item.genre_ids)}
        year={item.release_date}></MovieLink>) }
      </div>
      <Paginator pageNum={pageNum} setPageNum={setPageNum} totalPages={totalPages}></Paginator>
    </div>
  )
}

export default MovieList
