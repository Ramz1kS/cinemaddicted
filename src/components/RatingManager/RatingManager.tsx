import React, { FC, useState } from 'react'
import classes from './RatingManager.module.css'
import RatingNumber from '../RatingNumber/RatingNumber';
import RatingContainer from './RatingContainer';

interface RatingManagerProps {
  sessionId: string;
  movieId: string;
  rating: number;
}

const RatingManager: FC<RatingManagerProps> = ({sessionId, movieId, rating}) => {
  const [displayRating, setDisplayRating] = useState(rating)
  const [boxNeeded, setBoxNeeded] = useState(false)
  if (sessionId == 'none') {
    return (
      <div className={classes.container}>
        <h4 className={classes.yourRating}>you can't rate movies, you're not logged in</h4>
      </div>
    )
  }
  return (
    <div className={classes.container}>
      {
        !displayRating ? <h4 className={classes.yourRating}>you didnt rate it.</h4> :
        <h4 className={classes.yourRating}>you rated it <RatingNumber number={displayRating}></RatingNumber>/10</h4>
      }
      <h4 
      onClick={() => setBoxNeeded(true)}
      className={classes.clickMe}>{ displayRating ? 'change' : 'rate'}</h4>
      <RatingContainer 
      rating={displayRating}
      sessionId={sessionId}
      movieId={movieId}
      setDisplayRating={setDisplayRating}
      isNeeded={boxNeeded}
      setIsNeeded={setBoxNeeded}></RatingContainer>
    </div>
  )
}

export default RatingManager
