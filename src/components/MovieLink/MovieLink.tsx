import React from 'react'
import classes from './MovieLink.module.css'
import { Link } from 'react-router-dom';
import RatingNumber from '../RatingNumber/RatingNumber';

interface MovieLinkProps {
  name: string;
  rating: number;
  categories: string[];
  year: string;
  imageLink: string;
  movieId: number;
}

const MovieLink: React.FC<MovieLinkProps> = ({name, rating, categories, year, imageLink, movieId}) => {
  return (
    <Link className={classes.link} to={`/movie/${movieId}`}>
    <div className={classes.movieContainer}>
      <div 
      style={{backgroundImage: `url("https://media.themoviedb.org/t/p/w440_and_h660_face/${imageLink}")`}}
      className={classes.poster}></div>
      <div className={classes.nameAndRating}>
        <p>{name}</p>
        <p className={classes.rating}><RatingNumber number={rating}></RatingNumber>/10</p>
      </div>
      <div className={classes.categoriesYear}>
        <h4>{categories[0] + ', ' + categories[1]}</h4>
        <h4>{year}</h4>
      </div>
    </div>
    </Link>
  )
}

export default MovieLink
