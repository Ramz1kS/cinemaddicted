import React, { FC } from 'react'
import classes from './RatedListElement.module.css'
import { Link } from 'react-router-dom';
import RatingNumber from '../RatingNumber/RatingNumber';

interface RatedListElementProps {
  imageLink: string;
  title: string;
  movieId: number;
  rating: number;
}

const RatedListElement: FC<RatedListElementProps> = ({imageLink, title, movieId, rating}) => {
  return (
    <Link to={`/movie/${movieId}`}>
    <div className={classes.linkContainer}>
      <div className={classes.movieImage}
      style={{backgroundImage: `url("https://media.themoviedb.org/t/p/w440_and_h660_face/${imageLink}")`}}></div>
      <div className={classes.infoDiv}>
        <p>{title}</p>
        <h4>you rated this as <RatingNumber number={rating}></RatingNumber>/10</h4>
      </div>
    </div>
    </Link>
  )
}

export default RatedListElement
