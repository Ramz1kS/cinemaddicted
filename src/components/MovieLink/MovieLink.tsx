import React from 'react'
import PosterImage from '../../assets/images/test/movieposter.png'
import classes from './MovieLink.module.css'

interface MovieLinkProps {
  name: string;
  rating: number;
  categories: string[];
  year: number;
}

const MovieLink: React.FC<MovieLinkProps> = ({name, rating, categories, year}) => {
  return (
    <div className={classes.movieContainer}>
      <div 
      style={{backgroundImage: `url(${PosterImage})`}}
      className={classes.poster}></div>
      <div className={classes.nameAndRating}>
        <p>{name}</p>
        <p className={classes.rating}>{rating}/10</p>
      </div>
      <div className={classes.categoriesYear}>
        <h4>{categories[0] + ', ' + categories[1]}</h4>
        <h4>{year}</h4>
      </div>
    </div>
  )
}

export default MovieLink
