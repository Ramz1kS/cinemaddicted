import React from 'react'
import classes from './MoviesListPage.module.css'
import SearchBar from '../../components/SearchBar/SearchBar'
import MovieList from '../../components/MovieList/MovieList'
import NavTabUpper from '../../components/NavTabUpper/NavTabUpper'

const MoviesListPage = () => {
  return (
    <div className={classes.pageCanvas}>
      <NavTabUpper name='search'></NavTabUpper>
      <SearchBar></SearchBar>
      <MovieList></MovieList>
    </div>
  )
}

export default MoviesListPage
