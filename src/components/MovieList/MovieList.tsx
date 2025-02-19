import React from 'react'
import classes from './MovieList.module.css'
import MovieLink from '../MovieLink/MovieLink'

const MovieList = () => {
  const movies = [{
    name: "Snatch",
    rating: 10,
    categories: ['comedy', 'crime'],
    year: 2000
  },
  {
    name: "Snatch",
    rating: 10,
    categories: ['comedy', 'crime'],
    year: 2000
  },
  {
    name: "Snatch",
    rating: 10,
    categories: ['comedy', 'crime'],
    year: 2000
  },
  {
    name: "Snatch",
    rating: 10,
    categories: ['comedy', 'crime'],
    year: 2000
  },
  {
    name: "Snatch",
    rating: 10,
    categories: ['comedy', 'crime'],
    year: 2000
  },
  {
    name: "Snatch",
    rating: 10,
    categories: ['comedy', 'crime'],
    year: 2000
  },
  {
    name: "Snatch",
    rating: 10,
    categories: ['comedy', 'crime'],
    year: 2000
  },
  {
    name: "Snatch",
    rating: 10,
    categories: ['comedy', 'crime'],
    year: 2000
  },
  {
    name: "Snatch",
    rating: 10,
    categories: ['comedy', 'crime'],
    year: 2000
  },
  {
    name: "Snatch",
    rating: 10,
    categories: ['comedy', 'crime'],
    year: 2000
  }]
  return (
    <div className={classes.container}>
      {movies.map((item, index) => <MovieLink 
      key={index} 
      name={item.name}
      rating={item.rating}
      categories={item.categories}
      year={item.year}></MovieLink>)}
    </div>
  )
}

export default MovieList
